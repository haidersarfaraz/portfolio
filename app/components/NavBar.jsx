import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const NavBar = ({ isDarkMode, setDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenu = useRef();

  const openMenu = () => {
    sideMenu.current.style.transform = 'translateX(0)';
  };

  const closeMenu = () => {
    sideMenu.current.style.transform = 'translateX(100%)';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Light-mode background image */}
      <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="" className='w-full' />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-300
        ${isScroll
          ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
          : "bg-transparent"
        }`}>
        
        <a href='#top'>
          <Image
            src={isDarkMode ? assets.logo_dark : assets.Sarfaraz}
            alt="logo"
            className='w-28 cursor-pointer mr-12'
          />
        </a>

        <ul className={`hidden lg:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 transition duration-300
          ${isScroll ? "" : "bg-white bg-opacity-50 shadow-sm  dark:bg-darkTheme dark:bg-opacity-50"}`}>
          <li><a className='font-ovo' href='#top'>Home</a></li>
          <li><a className='font-ovo' href='#about'>About me</a></li>
          <li><a className='font-ovo' href='#work'>Project</a></li>
          <li><a className='font-ovo' href='#contact'>Contact</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button onClick={() => setDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
          </button>

          <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-5 font-ovo dark:border-white/50'>
            Contact
            <Image src={isDarkMode? assets.arrow_icon_dark:assets.arrow_icon} alt='' className='w-3' />
          </a>

          <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={isDarkMode?assets.menu_white: assets.menu_black} alt='' className='w-6 cursor-pointer' />
          </button>
        </div>

        {/* Mobile Side Menu */}
        <ul
          ref={sideMenu}
          className='flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'
        >
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode? assets.close_white:assets.close_black} alt='' className='w-5 cursor-pointer' />
          </div>
          <li><a className='font-ovo' onClick={closeMenu} href='#top'>Home</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href='#about'>About me</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href='#work'>Project</a></li>
          <li><a className='font-ovo' onClick={closeMenu} href='#contact'>Contact</a></li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
