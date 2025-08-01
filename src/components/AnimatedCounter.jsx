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
            className="bg-zinc-900 rounded-lg flex flex-col items-center justify-center py-10 px-5 border-2 border-zinc-900 hover:border-green-400 transition-all duration-300"
          >
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-500 to-emerald-600 mb-2">
              <CountUp
                start={0}
                end={item.value}
                duration={5}
                delay={1}
                suffix={item.suffix}
              />
            </div>
            <div className="text-white/80 text-lg text-center mt-2">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
