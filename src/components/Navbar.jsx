import React, { useState, useEffect } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import IconLogo from './logo'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000,
      smooth: true
    });
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Projects', target: 'projects' },
    { name: 'Experience', target: 'experience' },
    { name: 'Contact', target: 'contact' },
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-xl bg-opacity-80'
          : 'backdrop-blur-lg bg-opacity-40'
      } `}
    >
      <div className="px-4 w-full">
        <div className="flex items-center justify-between h-16 max-w-[2000px]">
        <div
            onClick={scrollToTop}
            className="cursor-pointer"
          >
            <IconLogo className="h-12 w-12 mt-2 pl-1 text-gray-300 hover:scale-[1.05]" />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.target}
                activeClass="!text-white"
                to={item.target}
                spy={true}
                smooth={true}
                offset={-70}
                className="relative cursor-pointer text-gray-300 hover:text-gray-100 transition-all duration-300 group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <a
              href="/WondwosenAsegid.pdf"
              download
              className="px-4 py-2 bg-gray-300 hover:bg-gray-100 text-gray-900 font-semibold rounded transition-colors duration-300"
            >
              Get CV
            </a>
          </div>

          {/* Modern hamburger button */}
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
        <div
          className="absolute inset-0 bg-darkblue/95"
          onClick={() => setIsMenuOpen(false)}
        ></div>

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
              className="text-2xl font-medium text-gray-100 hover:text-gray-300 transition-all duration-300"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/WondwosenAsegid.pdf"
            download
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-gray-300 hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors duration-300"
          >
            Get CV
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar