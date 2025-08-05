import React from 'react';
import { counterItems } from '../constants';
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  return (
    <div id="counter" className="px-6 xl:mt-0 relative z-10 bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {counterItems.map((item, index) => (
          <div
            key={item.label + index}
            className="group bg-zinc-900 rounded-lg flex flex-col items-center justify-center py-8 px-5 border-2 border-zinc-800 hover:border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10 relative overflow-hidden"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Main counter */}
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-500 to-emerald-600 mb-2">
              <CountUp
                start={0}
                end={item.value}
                duration={3}
                delay={0.5}
                suffix={item.suffix}
              />
            </div>
            
            {/* Label */}
            <div className="text-white text-lg font-medium text-center">{item.label}</div>
            
            {/* Description */}
            <div className="text-gray-400 text-sm text-center mt-2 px-2">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;