import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | HarborIQ",
  description: "HarborIQ privacy policy. How we collect, use, and protect your data.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="bg-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <h1 className="text-3xl md:text-4xl font-medium text-ink mb-8">Privacy Policy</h1>

        <div className="prose prose-sm md:prose max-w-none text-charcoal space-y-8">
          <section>
            <p>
              This Privacy Policy describes how Wrkstream LLC ("HarborIQ," "we," "us," or "our") collects, uses, and shares information about you when you use our website www.harboriq.co and our HarborIQ platform (collectively, the "Services").
            </p>
            <p className="text-sm text-stone">Last Updated: March 20, 2026</p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mt-8 mb-4">1. Information We Collect</h2>

            <h3 className="text-lg font-medium text-ink mt-6 mb-3">Information You Provide to Us</h3>
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Account Information:</strong> Name, email address, phone number, company name, and password when you create an account</li>
              <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely by our payment processor)</li>
              <li><strong>Business Data:</strong> Client information, policy details, carrier data, and other information you input into the HarborIQ platform</li>
              <li><strong>Communications:</strong> Information you provide when you contact us for support or feedback</li>
            </ul>

            <h3 className="text-lg font-medium text-ink mt-6 mb-3">Information We Collect Automatically</h3>
            <p>When you use our Services, we automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Usage Information:</strong> Pages viewed, features used, time spent on pages, and navigation paths</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
              <li><strong>Log Data:</strong> Access times, error logs, and other system activity</li>
              <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar tracking technologies to provide and improve our Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Provide, maintain, and improve the HarborIQ platform</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, security alerts, and support messages</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Develop new features and services</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mt-8 mb-4">3. How We Share Your Information</h2>
            <p>We may share information about you in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Service Providers:</strong> We share information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services</li>
              <li><strong>Business Transfers:</strong> We may share information in connection with a merger, acquisition, or sale of assets</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities</li>
              <li><strong>With Your Consent:</strong> We may share information with your consent or at your direction</li>
            </ul>
            <p className="mt-4">
              <strong>We do not sell your personal information.</strong> Your client and business data belongs to you, and we treat it with the highest level of confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the information we collect and process. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security assessments and testing</li>
              <li>Access controls and authentication requirements</li>
              <li>Regular security training for our team</li>
            </ul>
            <p className="mt-4">
              However, no security measures are perfect, and we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mt-8 mb-4">5. Data Retention</h2>
            <p>
              We retain your information for as long as your account is active or as needed to provide you Services. If you wish to delete your account or request that we no longer use your information, please contact us at team@wrkstream.com. We will retain and use your information as necessary to comply with legal obligations, resolve disputes, and enforce our agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mt-8 mb-4">6. Your Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your information:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information</li>
              <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing of your information</li>
              <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at team@wrkstream.com. We will respond to your request within a reasonable timeframe.
            </p>

            <h3 className="text-lg font-medium text-ink mt-6 mb-3">Cookies</h3>
            <p>
              Most browsers accept cookies by default. You can usually choose to set your browser to remove or reject cookies. Please note that if you choose to remove or reject cookies, this may affect the availability and functionality of our Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mt-8 mb-4">7. California Privacy Rights</h2>
            <p>
              If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Right to know what personal information we collect, use, disclose, and sell</li>
              <li>Right to request deletion of personal information</li>
              <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
              <li>Right to non-discrimination for exercising your rights</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, please contact us at team@wrkstream.com or call (630) 942-3340.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mt-8 mb-4">8. International Data Transfers</h2>
            <p>
              HarborIQ is based in the United States. If you are accessing our Services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located and our central database is operated. By using our Services, you consent to the transfer of your information to the United States.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mt-8 mb-4">9. Children's Privacy</h2>
            <p>
              Our Services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you become aware that a child has provided us with personal information, please contact us. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mt-8 mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective. We encourage you to review this Privacy Policy periodically to stay informed about our information practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-ink mt-8 mb-4">11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
            <p className="mt-4">
              <strong>Wrkstream LLC</strong><br />
              535 Duane Street<br />
              Glen Ellyn, Illinois 60137<br />
              <br />
              Email: <a href="mailto:team@wrkstream.com" className="text-harbor hover:text-deep">team@wrkstream.com</a><br />
              Phone: (630) 942-3340
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
