import React, { use } from 'react'
import { navLinks } from '../constants/index.js'
import { useState,useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrolled(currentScrollY > 0);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <div className='inner max-w-screen-xl mx-auto w-full'>
            <a className='logo' href="#hero">
                Sayan🦚
            </a>
            <nav className='desktop'>
                <ul>
                    {navLinks.map(({link,name}) =>(
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                            </a>
                            <span className='underline'/>
                        </li>
                    ))}
                </ul>
            </nav>
            <a href="#contact" className='contact-btn group'>
                <div className='inner'>
                    <span>
                        Contact Me
                    </span>
                </div>
            </a>
        </div>
    </header>
  )
}

export default Navbar