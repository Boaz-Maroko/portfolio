'use client';
import { useState } from 'react';

export default function Header({ toggleTheme, theme }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
    document.body.style.overflowY = 'auto';
  };

  const openMobileNav = () => {
    setIsMobileNavOpen(true);
    document.body.style.overflowY = 'hidden';
  };

  const handleNavLinkClick = () => {
    closeMobileNav();
  };

  return (
    <>
      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileNavOpen ? 'active' : ''}`} 
           style={{ display: isMobileNavOpen ? 'flex' : 'none' }}>
        <div className="mobile-nav__close" onClick={closeMobileNav}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd" />
          </svg>
        </div>
        <ul className="mobile-nav__links">
          <li>
            <a href="#about" className="mobile__links" onClick={handleNavLinkClick}>About</a>
          </li>
          <li>
            <a href="#featured" className="mobile__links" onClick={handleNavLinkClick}>Work</a>
          </li>
          <li>
            <a href="#contact" className="mobile__links" onClick={handleNavLinkClick}>Contact</a>
          </li>
          <li className="mobile__links-line">
            <hr />
          </li>
          <li>
            <button className="header__sun" onClick={toggleTheme}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path
                  d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
              </svg>
            </button>
          </li>
          <li>
            <a className="btn" href="https://docs.google.com/document/d/1rUDk0zEO01bDYm1PFbYIpIm8J2pIxu4Tk83zhyaDwcY/edit?usp=sharing" target="_blank">Resume</a>
          </li>
        </ul>
      </div>

      {/* Desktop Navigation */}
      <header className="header container">
        <nav>
          <button className="header__ham" onClick={openMobileNav}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm8.25 5.25a.75.75 0 0 1 .75-.75h8.25a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd" />
            </svg>
          </button>
          <ul className="header__menu">
            <li></li>
            <li>
              <a href="#about" className="header__link">About</a>
            </li>
            <li>
              <a href="#featured" className="header__link">Work</a>
            </li>
            <li>
              <a href="#contact" className="header__link">Contact</a>
            </li>
            <li className="header__line"></li>
            <li>
              <button className="header__sun" onClick={toggleTheme}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path
                    d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
              </button>
            </li>
            <li>
              <a className="btn" href="https://docs.google.com/document/d/1rUDk0zEO01bDYm1PFbYIpIm8J2pIxu4Tk83zhyaDwcY/edit?usp=sharing" target="_blank">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}