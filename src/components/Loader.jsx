import { useEffect, useState } from 'react';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent"></div>
      
      <div className="relative flex flex-col items-center">
        {/* Outer ring - slow rotation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-40 w-40 rounded-full border border-blue-500/30 animate-spin-slow"></div>
        </div>
        
        {/* Middle ring - medium rotation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-32 w-32 rounded-full border-2 border-transparent border-t-blue-400 border-r-blue-500 animate-spin"></div>
        </div>
        
        {/* Inner ring - fast rotation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-24 w-24 rounded-full border-2 border-transparent border-b-blue-600 border-l-blue-700 animate-spin animation-reverse"></div>
        </div>
        
        {/* Glowing dots */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-2 w-2 bg-blue-400 rounded-full animate-ping absolute top-8 left-1/2 transform -translate-x-1/2"></div>
          <div className="h-2 w-2 bg-blue-500 rounded-full animate-ping absolute bottom-8 left-1/2 transform -translate-x-1/2 animation-delay-500"></div>
          <div className="h-2 w-2 bg-blue-600 rounded-full animate-ping absolute left-8 top-1/2 transform -translate-y-1/2 animation-delay-1000"></div>
          <div className="h-2 w-2 bg-blue-700 rounded-full animate-ping absolute right-8 top-1/2 transform -translate-y-1/2 animation-delay-1500"></div>
        </div>
        
        {/* Logo container with enhanced styling */}
        <div className="relative z-10 flex items-center justify-center h-20 w-20 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-blue-500/20 shadow-2xl shadow-blue-500/20">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-12 w-12 object-contain animate-pulse-slow filter drop-shadow-lg"
          />
        </div>
      </div>
      
      {/* CSS for custom animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animation-reverse {
          animation-direction: reverse;
        }
        
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
};

export default Loader;