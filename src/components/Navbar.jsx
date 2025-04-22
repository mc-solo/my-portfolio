import React, { useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import IconLogo from './logo'

/**
 * Navbar component: fixed at top, changes blur on scroll,
 * and toggles a mobile menu.
 */
const Navbar = () => {
  // isMenuOpen: controls mobile overlay menu visibility (true = open)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // isScrolled: tracks whether window.scrollY > 50 to adjust styling
  const [isScrolled, setIsScrolled] = useState(false)

  // Function to smoothly scroll to top using react-scroll
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true
    });
  };

  // Listen to scroll once on mount, clean up on unmount
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // List of in‑page scroll targets
  const navItems = [
    { name: 'Projects', target: 'projects' },
    { name: 'Experience', target: 'experience' },
    { name: 'Contact', target: 'contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-gray-900/80'
          : 'backdrop-blur-lg bg-gray-900/40'
      }`}
    >
      <div className="px-4 w-full">
        <div className="flex items-center justify-between h-16 max-w-[2000px]   mx-auto">
          {/* Logo: scrolls to top (to="home"), sized & colored here */}
          <div
            onClick={scrollToTop}
            className="cursor-pointer"
          >
            <IconLogo className="h-12 w-12 mt-2 pl-1 text-emerald-400 hover:scale-[1.05]" />
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.target}
                to={item.target}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                className="text-gray-400 hover:text-emerald-400 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="/CV.pdf"
              download
              className="px-4 py-2 bg-emerald-400/90 hover:bg-emerald-400 text-gray-900 font-semibold rounded transition-colors duration-300"
            >
              Get CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden mr-4 relative w-10 h-10 focus:outline-none z-[100]"
          >
            <div className="absolute w-4 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <span
                className={`absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-4 bg-white transform transition duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0 translate-x-3' : ''
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-8 bg-white transform transition duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* backdrop to close menu when clicking outside */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* menu items */}
        <div
          className={`relative h-screen flex flex-col justify-center bg-gray-900 items-center gap-8 transform transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 -translate-y-4'
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.target}
              to={item.target}
              spy={true}
              smooth={true}
              offset={-70}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-medium text-gray-100 hover:text-emerald-400 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/CV.pdf"
            download
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-emerald-400/90 hover:bg-emerald-400 text-gray-900 font-semibold rounded-lg transition-colors duration-300"
          >
            Get CV
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
