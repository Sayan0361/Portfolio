import React from 'react'
import { counterItems } from '../constants'
import CountUp from 'react-countup';

const AnimatedCounter = () => {
  return (
    <div id='counter' className='padding-x-lg xl:mt-0 mt-32'>
        <div className='mx-auto grid-4-cols'>
            {counterItems.map((item)=>(
                <div className='bg-zinc-900 rounded-lg flex flex-col items-center justify-center py-10 px-5' >
                    <div key='counterItems.label' className='counter-number text-white text-5xl font-bold mb-2'>
                    <CountUp
                        start={0}
                        end={item.value}
                        duration={5}
                        delay={1}
                        suffix={item.suffix}
                        className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-500 to-emerald-600 text-4xl font-extrabold"
                        />
                    </div>
                    <div className='text-white-50'>{item.label}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default AnimatedCounter