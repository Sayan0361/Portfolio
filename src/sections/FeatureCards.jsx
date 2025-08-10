import React from 'react'
import { abilities } from '../constants/index.js'
import TitleHeader from '../components/TitleHeader.jsx'

const FeatureCards = () => {
  return (
    <section
    id="strengths"
    className="bg-black flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
        <div className="container mx-auto px-4 md:px-8 lg:px-16 relative">
            <TitleHeader
                title="My Core Strengths"
                sub="💡 What I bring to the table"
            />
            <div className='w-full padding-x-lg mt-20'>
                <div className='mx-auto grid-3-cols'>
                    {abilities.map(({imgPath, title, desc})=>(
                        <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4 '>
                            <div className='size-14 rounded-full flex items-center justify-center p-2'>
                                <img src={imgPath} alt={title}/>
                            </div>
                            <h3 className='text-2xl text-white font-semibold'>{title}</h3>
                            <p className='text-base text-white-50'>{desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default FeatureCards