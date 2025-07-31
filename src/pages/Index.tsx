import { useState, useCallback } from 'react';
import { HeartButton } from '@/components/HeartButton';
import { FloatingHeart } from '@/components/FloatingHeart';
import { FloatingParticle } from '@/components/FloatingParticle';
import { CSSHeart, CSSFlower, CSSBubble, CSSSparkle } from '@/components/CSSGraphics';

const loveReasons = [
  "You laugh at my dumb jokes (sometimes too hard) 😂",
  "You make me feel safe when the world feels scary 🛡️",
  "You bring peace just by being near ☁️",
  "Your voice is my favorite sound 🎶",
  "You're weird, and I love your kind of weird 🌀",
  "You challenge me in the best ways 🧠",
  "You never let me give up on myself 💪",
  "You get excited about tiny things 🌸",
  "You text me just to check in, and it melts me 📱❤️",
  "You say 'I love you' like you mean it every time 💬💘",
  "You remember the little things I forget 📝",
  "You hold my hand like it’s made to be held ✋❤️✋",
  "You make being in love feel easy 💞",
  "You never make me feel like I’m too much 💗",
  "Your sleepy voice should be a lullaby 💤🎵",
  "You’re my biggest fan — even when I fail 🏆",
  "You’re honest, even when it’s hard 🪞",
  "You give the tightest, warmest hugs ever 🤗",
  "You randomly send me memes and I live for them 😂📤",
  "You dream big — and drag me into your dreams 🌈",
  "You believe in me when I don’t 🙏",
  "You’re beautiful even when you say you’re not 💋",
  "You protect what you love fiercely 🐾",
  "You care deeply about people, even strangers 💓",
  "You love animals like they’re your babies 🐶🐱",
  "You’ve made me cry happy tears — more than once 😭❤️",
  "You let me be soft when I need to be 🌷",
  "You somehow smell like magic and comfort 🌸✨",
  "You look amazing in anything — even pajamas 😍",
  "You dance around the house like no one's watching 💃",
  "You don’t judge my mess — you sit with me in it 🛋️",
  "You’re so smart it’s hot 🔥🧠",
  "You’re the only one I want to tell everything to 🎙️",
  "You bite your lip when you're thinking — and it's cute 😘",
  "You say my name like it means something sacred 💌",
  "You make every day feel a little like a movie 🎬",
  "You cry during movies and then deny it (adorable) 🎞️🥺",
  "You make fun of me just the right amount 😏",
  "You get jealous sometimes, and it’s lowkey cute 😼",
  "You love me in a way I’ve never been loved before 💖",
  "You let me see the real you — and I love all of it 🌹",
  "You talk about our future like it’s a promise 📆💍",
  "You steal my hoodies and look better in them 🧥❤️",
  "You have a smile that literally makes my day better 😊🌞",
  "You don’t let me stay mad for long 🕊️",
  "You make lazy days feel like holidays ☕🛌",
  "You whisper things when you’re half asleep 💤💬",
  "You make me feel like the luckiest person alive 🍀",
  "You make love feel like art 🎨💘",
  "Because you're you — and that’s more than enough 🌟"
];


const Index = () => {
  const [floatingHearts, setFloatingHearts] = useState<number[]>([]);
  const [currentReason, setCurrentReason] = useState<string>('');
  const [showReason, setShowReason] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleHeartClick = useCallback(() => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Show random reason
    const randomReason = loveReasons[Math.floor(Math.random() * loveReasons.length)];
    setCurrentReason(randomReason);
    setShowReason(true);
    
    // Create multiple floating hearts
    const heartCount = 12 + Math.floor(Math.random() * 8); // 12-20 hearts
    const newHearts: number[] = [];
    
    for (let i = 0; i < heartCount; i++) {
      setTimeout(() => {
        const heartId = Date.now() + Math.random();
        newHearts.push(heartId);
        setFloatingHearts(prev => [...prev, heartId]);
      }, i * 150 + Math.random() * 300);
    }
    
    // Reset animation state
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  }, [isAnimating]);

  const removeFloatingHeart = useCallback((heartId: number) => {
    setFloatingHearts(prev => prev.filter(id => id !== heartId));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-romantic relative overflow-hidden">
      {/* Background floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }, (_, i) => (
          <FloatingParticle key={i} delay={i * 2} />
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Hearts - scattered around */}
        <div className="absolute top-8 left-8 animate-bounce-gentle">
          <CSSHeart size="w-12 h-12" color="text-heart-pink" className="opacity-60" />
        </div>
        <div className="absolute top-16 left-24 animate-bounce-gentle delay-500">
          <CSSHeart size="w-8 h-8" color="text-heart-purple" className="opacity-40" />
        </div>
        <div className="absolute bottom-20 right-8 animate-sway">
          <CSSHeart size="w-10 h-10" color="text-heart-red" className="opacity-50" />
        </div>
        
        {/* Flowers - distributed around */}
        {/* Random decorative flowers */}
        {Array.from({ length: 15 }).map((_, i) => {
          const top = Math.floor(Math.random() * 100);  // 0–100%
          const left = Math.floor(Math.random() * 100); // 0–100%
          const sizes = ['w-8 h-8', 'w-10 h-10', 'w-12 h-12', 'w-14 h-14'];
          const opacities = ['opacity-40', 'opacity-50', 'opacity-60', 'opacity-70'];
          const colors = ['text-pastel-rose', 'text-pastel-lavender', 'text-pastel-blue', 'text-pastel-mint'];
          const animations = ['animate-bounce-gentle', 'animate-sway', 'animate-scale-pulse'];
          const delays = [0, 200, 400, 600, 800, 1000, 1200];

          const size = sizes[Math.floor(Math.random() * sizes.length)];
          const opacity = opacities[Math.floor(Math.random() * opacities.length)];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const animation = animations[Math.floor(Math.random() * animations.length)];
          const delay = delays[Math.floor(Math.random() * delays.length)];

          return (
            <div
              key={`decor-flower-${i}`}
              className={`absolute ${animation} delay-${delay}`}
              style={{ top: `${top}%`, left: `${left}%` }}
            >
              <CSSFlower size={size} color={color} className={opacity} />
            </div>
          );
        })}
        
        {/* Random decorative bubbles */}
        {Array.from({ length: 25 }).map((_, i) => {
          const top = Math.floor(Math.random() * 100);  // 0–100%
          const left = Math.floor(Math.random() * 100); // 0–100%
          const sizes = ['w-4 h-4', 'w-5 h-5', 'w-6 h-6', 'w-7 h-7', 'w-8 h-8'];
          const colors = [
            'bg-pastel-blue',
            'bg-pastel-mint',
            'bg-pastel-peach',
            'bg-pastel-lavender',
            'bg-pastel-rose',
          ];
          const animations = ['animate-bounce-gentle', 'animate-sway', 'animate-scale-pulse'];
          const delays = [0, 200, 400, 600, 800, 1000, 1200];

          const size = sizes[Math.floor(Math.random() * sizes.length)];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const animation = animations[Math.floor(Math.random() * animations.length)];
          const delay = delays[Math.floor(Math.random() * delays.length)];

          return (
            <div
              key={`decor-bubble-${i}`}
              className={`absolute ${animation} delay-${delay}`}
              style={{ top: `${top}%`, left: `${left}%` }}
            >
              <CSSBubble size={size} color={color} />
            </div>
          );
        })}
        
        {/* Sparkles - randomly scattered */}
        {Array.from({ length: 50 }).map((_, i) => {
          const top = Math.floor(Math.random() * 100);   // 0–100%
          const left = Math.floor(Math.random() * 100);  // 0–100%
          const sizes = ['w-3 h-3', 'w-4 h-4', 'w-5 h-5', 'w-6 h-6'];
          const colors = [
            'text-pastel-lavender',
            'text-pastel-blue',
            'text-pastel-mint',
            'text-pastel-peach',
            'text-heart-pink',
            'text-heart-purple',
          ];
          const opacities = ['opacity-40', 'opacity-50', 'opacity-60', 'opacity-70'];
          const delays = [0, 200, 400, 600, 800, 1000, 1200];
          
          const size = sizes[Math.floor(Math.random() * sizes.length)];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const opacity = opacities[Math.floor(Math.random() * opacities.length)];
          const delay = delays[Math.floor(Math.random() * delays.length)];

          return (
            <div
              key={`sparkle-${i}`}
              className={`absolute animate-pulse-heart ${opacity} delay-${delay}`}
              style={{ top: `${top}%`, left: `${left}%` }}
            >
              <CSSSparkle size={size} color={color} />
            </div>
          );
        })}

        
        {/* Additional floating hearts as decoration */}
        {Array.from({ length: 25 }).map((_, i) => {
          const top = Math.floor(Math.random() * 100); // 0–80%
          const left = Math.floor(Math.random() * 100); // 0–80%
          const sizes = ['text-2xl', 'text-3xl', 'text-4xl'];
          const opacities = ['opacity-20', 'opacity-30', 'opacity-40', 'opacity-50'];
          const colors = ['text-heart-pink', 'text-heart-purple', 'text-heart-red'];
          const emojis = ['💕', '💖', '💝', '💞', '💗'];
          const delays = [0, 200, 400, 600, 800, 1000, 1200];

          const size = sizes[Math.floor(Math.random() * sizes.length)];
          const opacity = opacities[Math.floor(Math.random() * opacities.length)];
          const color = colors[Math.floor(Math.random() * colors.length)];
          const emoji = emojis[Math.floor(Math.random() * emojis.length)];
          const delay = delays[Math.floor(Math.random() * delays.length)];

          return (
            <div
              key={`decor-heart-${i}`}
              className={`absolute ${size} ${opacity} ${color} animate-pulse-heart`}
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animationDelay: `${delay}ms`,
              }}
            >
              {emoji}
            </div>
          );
        })}
      </div>

      {/* Quote section at the top */}
      <div className="relative z-10 pt-12 pb-8">
        <div className="text-center max-w-2xl mx-auto px-8">
          <p className="font-script text-2xl md:text-3xl text-foreground/70 italic">
            "Love is not just looking at each other, it's looking in the same direction together..." ✨
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] px-8">
        {/* Title area */}
        <div className="text-center mb-16">
          <h1 className="font-script text-4xl md:text-7xl text-foreground mb-4 drop-shadow-sm">
            Love Notes For Mahema
          </h1>
          <p className="font-handwritten text-2xl text-foreground/80 max-w-md mx-auto">
            Click the heart to discover all the reasons you're amazing! 💫
          </p>
        </div>

        {/* Heart button */}
        <div className="mb-16">
          <HeartButton onClick={handleHeartClick} disabled={isAnimating} />
        </div>

        {/* Love reason display */}
        {showReason && (
          <div className="max-w-2xl mx-auto text-center">
            <div 
              className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-dreamy border border-border/50 animate-fade-in-soft"
              style={{ animationDelay: '0.5s' }}
            >
              <p className="font-script text-3xl md:text-4xl text-foreground leading-relaxed">
                {currentReason}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Additional content section */}
      <div className="relative z-10 py-16 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Statistics section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-soft border border-border/30">
              <div className="text-4xl mb-2 animate-pulse-heart text-heart-pink">💕</div>
              <div className="font-handwritten text-3xl text-primary mb-1">∞</div>
              <div className="font-script text-lg text-foreground/70">Reasons to smile</div>
            </div>
            
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-soft border border-border/30">
              <div className="text-4xl mb-2 animate-pulse-heart delay-300 text-heart-purple">🌟</div>
              <div className="font-handwritten text-3xl text-primary mb-1">24/7</div>
              <div className="font-script text-lg text-foreground/70">Thinking of you</div>
            </div>
            
            <div className="text-center bg-card/60 backdrop-blur-sm rounded-3xl p-6 shadow-soft border border-border/30">
              <div className="text-4xl mb-2 animate-pulse-heart delay-600 text-heart-red">💖</div>
              <div className="font-handwritten text-3xl text-primary mb-1">Always</div>
              <div className="font-script text-lg text-foreground/70">& forever</div>
            </div>
          </div>

          {/* Sweet messages grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-pastel-pink/35 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-pastel-pink/30">
              <h3 className="font-script text-2xl text-foreground mb-3">Little Things 🌸</h3>
              <p className="font-handwritten text-lg text-foreground/80">
                The way you laugh at your own jokes, how you sing in the shower, 
                and the cute face you make when you're concentrating...
              </p>
            </div>
            
            <div className="bg-pastel-lavender/35 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-pastel-lavender/30">
              <h3 className="font-script text-2xl text-foreground mb-3">Dreams Together 💫</h3>
              <p className="font-handwritten text-lg text-foreground/80">
                Building blanket forts, chasing sunsets, making midnight snacks, 
                and creating a lifetime of beautiful memories...
              </p>
            </div>
            
            <div className="bg-pastel-blue/35 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-pastel-blue/30">
              <h3 className="font-script text-2xl text-foreground mb-3">Your Magic ✨</h3>
              <p className="font-handwritten text-lg text-foreground/80">
                You turn ordinary days into adventures and make everything 
                brighter just by being yourself...
              </p>
            </div>
            
            <div className="bg-pastel-mint/35 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-pastel-mint/30">
              <h3 className="font-script text-2xl text-foreground mb-3">Forever Promise 💍</h3>
              <p className="font-handwritten text-lg text-foreground/80">
                Through every season, every challenge, every joy - 
                my heart chooses you, again and again...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 py-12 px-8">
        <div className="text-center max-w-xl mx-auto">
          <div className="bg-card/40 backdrop-blur-sm rounded-full py-6 px-8 shadow-dreamy border border-border/40">
            <p className="font-script text-xl text-foreground/80 mb-2">
              Made with 💖 and endless love
            </p>
            <p className="font-handwritten text-lg text-foreground/60">
              Every pixel crafted with thoughts of you
            </p>
          </div>
        </div>
      </div>

      {/* Floating hearts */}
      {floatingHearts.map(heartId => (
        <FloatingHeart
          key={heartId}
          onComplete={() => removeFloatingHeart(heartId)}
        />
      ))}

      {/* Soft overlay gradients for extra dreaminess */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-pastel-pink/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pastel-lavender/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default Index;