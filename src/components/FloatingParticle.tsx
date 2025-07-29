export const FloatingParticle = ({ delay = 0 }) => {
  const colors = ['bg-pastel-pink', 'bg-pastel-lavender', 'bg-pastel-blue', 'bg-pastel-mint'];
  const sizes = ['w-1 h-1', 'w-2 h-2', 'w-1.5 h-1.5'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  const randomX = Math.random() * 100;
  const randomDuration = 15 + Math.random() * 10; // 15-25 seconds
  
  return (
    <div
      className={`absolute ${randomSize} ${randomColor} rounded-full opacity-20`}
      style={{
        left: `${randomX}%`,
        animation: `float-slow ${randomDuration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};