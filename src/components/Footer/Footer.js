import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [scrollDir, setScrollDir] = useState('up');
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      if (direction !== scrollDir && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDir(direction);
      }
      
      // Check if at bottom of page
      const isBottom = window.innerHeight + scrollY >= document.body.offsetHeight - 50;
      setAtBottom(isBottom);
      
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <footer className={`footer ${scrollDir === 'down' ? 'scrolling-down' : 'scrolling-up'} ${atBottom ? 'at-bottom' : ''}`}>
      <div className="footer-content">
        <div className="connect-section">
          <span>Connect with me:</span>
          <div className="social-icons">
            <a 
              href="https://github.com/iamrajmani" 
              aria-label="GitHub"
              className="icon-link"
              data-tooltip="GitHub"
            >
              <FaGithub className="icon" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rajmani-singh/" 
              aria-label="LinkedIn"
              className="icon-link"
              data-tooltip="LinkedIn"
            >
              <FaLinkedin className="icon" />
            </a>
            <a 
              href="mailto:iamrajmanisingh@gmail.com?subject=Contacting%20from%20Portfolio%20website&body=Hi%20Rajmani," 
              aria-label="Email"
              className="icon-link"
              data-tooltip="Email"
            >
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Rajmani Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;