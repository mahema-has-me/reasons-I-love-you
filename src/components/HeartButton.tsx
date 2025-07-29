import { Button } from "@/components/ui/button";

interface HeartButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const HeartButton = ({ onClick, disabled }: HeartButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="heart"
      size="heart"
      className="font-handwritten font-bold"
      style={{
        borderRadius: '50px 50px 50px 10px',
      }}
    >
      <span className="relative z-10 text-white drop-shadow-sm">
        Why I love you 💖
      </span>
    </Button>
  );
};