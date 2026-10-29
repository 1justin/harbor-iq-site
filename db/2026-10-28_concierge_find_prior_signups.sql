-- Read-only duplicate check for /start signups (2026-10-28).
-- Applied to the sales database (the project behind SALES_DB_URL) on 2026-10-28.
-- If the lookup fails, /api/signup skips it and the signup still saves.
-- Called just before concierge_capture_intent so the founder alert email can
-- say "someone from this agency already signed up". Never shown to visitors;
-- service_role only, like the other concierge_* functions.
create or replace function public.concierge_find_prior_signups(p_email text, p_agency text)
returns jsonb
language sql
stable
security definer
set search_path to ''
as $function$
  with input as (
    select
      lower(trim(p_email)) as email,
      lower(split_part(trim(p_email), '@', 2)) as domain,
      nullif(trim(regexp_replace(regexp_replace(
        regexp_replace(lower(coalesce(p_agency, '')), '[^a-z0-9 ]', ' ', 'g'),
        '\m(insurance|ins|agency|agencies|group|inc|llc|co|company|services|associates|and|the)\M', ' ', 'g'
      ), '\s+', ' ', 'g')), '') as agency_key
  ),
  candidates as (
    select
      pe.first_name,
      pe.email,
      o.name as agency,
      pe.source,
      pe.created_at,
      case
        when lower(pe.email) = i.email then 'same email'
        when i.domain <> '' and i.domain not in (
          'gmail.com','googlemail.com','yahoo.com','ymail.com','hotmail.com','outlook.com','live.com','msn.com',
          'aol.com','icloud.com','me.com','mac.com','comcast.net','att.net','sbcglobal.net','verizon.net',
          'protonmail.com','proton.me'
        ) and lower(split_part(pe.email, '@', 2)) = i.domain then 'same email domain'
        when i.agency_key is not null and trim(regexp_replace(regexp_replace(
          regexp_replace(lower(coalesce(o.name, '')), '[^a-z0-9 ]', ' ', 'g'),
          '\m(insurance|ins|agency|agencies|group|inc|llc|co|company|services|associates|and|the)\M', ' ', 'g'
        ), '\s+', ' ', 'g')) = i.agency_key then 'same agency name'
      end as match
    from sales.people pe
    left join sales.organizations o on o.id = pe.organization_id
    cross join input i
  )
  select coalesce(jsonb_agg(to_jsonb(c) order by c.created_at desc), '[]'::jsonb)
  from (select * from candidates where match is not null order by created_at desc limit 5) c;
$function$;

revoke all on function public.concierge_find_prior_signups(text, text) from public, anon, authenticated;
grant execute on function public.concierge_find_prior_signups(text, text) to service_role;
