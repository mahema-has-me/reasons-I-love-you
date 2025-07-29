import { useEffect, useState } from 'react';

interface FloatingHeartProps {
  onComplete: () => void;
}

export const FloatingHeart = ({ onComplete }: FloatingHeartProps) => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    // Random starting position and properties
    const startX = Math.random() * (window.innerWidth - 40);
    const drift = (Math.random() - 0.5) * 200; // Random horizontal drift
    const duration = 2.5 + Math.random() * 1.5; // 2.5-4 seconds
    const colors = ['text-heart-pink', 'text-heart-red', 'text-heart-purple'];
    const heartColor = colors[Math.floor(Math.random() * colors.length)];
    const size = 20 + Math.random() * 15; // 20-35px

    setStyle({
      left: `${startX}px`,
      fontSize: `${size}px`,
      animationDuration: `${duration}s`,
      '--drift': `${drift}px`,
    } as React.CSSProperties);

    // Clean up after animation
    const timer = setTimeout(() => {
      onComplete();
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed bottom-0 z-50 animate-float-up pointer-events-none select-none`}
      style={style}
    >
      <span className="inline-block animate-pulse-heart">💖</span>
    </div>
  );
};