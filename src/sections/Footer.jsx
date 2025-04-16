import React from 'react';
import { socialImgs } from '../constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Text-based footer heading */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold text-white">
            Made with 💙 by Sayan Sen
          </h2>
          <p className="text-sm text-gray-400">Let's build something amazing!</p>
        </div>

        {/* Social media links */}
        <div className="socials mt-4">
          {socialImgs.map((img) => (
            <a
              key={img.url}
              href={img.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={img.imgPath} className="social-icon" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Sayan Sen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
