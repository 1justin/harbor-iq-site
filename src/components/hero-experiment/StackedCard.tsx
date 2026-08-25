import { CARD_HEIGHT, CARD_WIDTH, stackStyle } from "./stack";

type StackedCardProps = {
  depth: number;
  children: React.ReactNode;
};

export const StackedCard: React.FC<StackedCardProps> = ({ depth, children }) => {
  const style = stackStyle(depth);

  return (
    <div
      className="absolute rounded-2xl shadow-[0_1px_2px_rgba(26,26,24,0.04),0_32px_70px_-20px_rgba(27,58,92,0.4)]"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        left: "50%",
        top: "50%",
        marginLeft: -CARD_WIDTH / 2,
        marginTop: -CARD_HEIGHT / 2,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
