export const CSSHeart = ({ className = "", size = "w-8 h-8", color = "text-heart-pink" }) => (
  <div className={`${size} ${color} ${className} relative`}>
    <div className="absolute inset-0">
      <div className="w-full h-full relative">
        <div className="absolute top-0 left-1/2 w-1/2 h-3/5 bg-current rounded-full transform -translate-x-1/2"></div>
        <div className="absolute top-0 left-0 w-1/2 h-3/5 bg-current rounded-full transform translate-x-1/4"></div>
        <div className="absolute top-0 right-0 w-1/2 h-3/5 bg-current rounded-full transform -translate-x-1/4"></div>
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-current transform -translate-x-1/2 rotate-45"></div>
      </div>
    </div>
  </div>
);

export const CSSFlower = ({ className = "", size = "w-10 h-10", color = "text-pastel-rose" }) => (
  <div className={`${size} ${color} ${className} relative`}>
    {/* Flower petals */}
    <div className="absolute inset-0">
      {[0, 72, 144, 216, 288].map((rotation, index) => (
        <div
          key={index}
          className="absolute top-0 left-1/2 w-3 h-6 bg-current rounded-full origin-bottom transform -translate-x-1/2"
          style={{ transform: `translateX(-50%) rotate(${rotation}deg)` }}
        />
      ))}
      {/* Flower center */}
      <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-pastel-peach rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  </div>
);

export const CSSBubble = ({ className = "", size = "w-6 h-6", color = "bg-pastel-blue" }) => (
  <div className={`${size} ${color} ${className} rounded-full opacity-60 relative overflow-hidden`}>
    <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-40"></div>
  </div>
);

export const CSSSparkle = ({ className = "", size = "w-4 h-4", color = "text-pastel-lavender" }) => (
  <div className={`${size} ${color} ${className} relative`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-0.5 bg-current"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-0.5 h-full bg-current"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-3 h-0.5 bg-current transform rotate-45"></div>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-0.5 h-3 bg-current transform rotate-45"></div>
    </div>
  </div>
);