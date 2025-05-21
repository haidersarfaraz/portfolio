import { assets } from '@/assets/assets'
import Image from 'next/image'
import { document } from 'postcss';
import React, { useEffect, useRef, useState } from 'react'

const NavBar = () => {

    const [isScroll,setIsScroll]=useState(false);
    const sideMenu=useRef();
    const [isOpen, setIsOpen] = React.useState(false);
    const openMenu=()=>{
        sideMenu.current.style.transform='translateX(-16rem)'
    }

    const closeMenu=()=>{
        sideMenu.current.style.transform='translateX(16rem)'
    }

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(scrollY>50){
                setIsScroll(true);
            }else{
                setIsScroll(false);
            }
        })
    },[])

    const toggleDarkMode = () => {
        if (document.body.classList.contains('dark')) {
          document.body.classList.remove('dark');
        } else {
          document.body.classList.add('dark');
        }
      };
      
  return (
    <>
        
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
        <Image src={assets.header_bg_color} alt="" className='w-full'/>
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : "" }`}>
        <a href='#top'>
            <Image src={assets.Sarfaraz} alt="" className='w-50 cursor-pointer mr-12 ' />
        </a>
        <ul className={`hidden lg:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"}  ` }>
            <li><a className='font-ovo' href='#top'>Home</a></li>
            <li><a className='font-ovo' href='#about'>About me</a></li>
            {/* <li><a className='font-ovo' href='#services'>Services</a></li> */}
            <li><a className='font-ovo' href='#work'>Project</a></li>
            <li><a className='font-ovo' href='#contact'>Contact</a></li>

        </ul>
        <div className='flex items-center gap-4'>
            <button onClick={toggleDarkMode}>
                <Image src={assets.moon_icon} alt='' className='w-6'/>
            </button>
            <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-5 font-ovo'>Contact <Image src={assets.arrow_icon} alt='' className='w-3'/></a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={assets.menu_black} alt='' className='w-6 cursor-pointer'/>
            </button>
        </div>

        {/* SMall Screen */}
        <ul ref={sideMenu} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt='' className='w-5 cursor-pointer'/>
            </div>
            <li><a className='font-ovo' onClick={closeMenu}  href='#top'>Home</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href='#about'>About me</a></li>
            {/* <li><a className='font-ovo' onClick={closeMenu} href='#services'>Services</a></li> */}
            <li><a className='font-ovo' onClick={closeMenu} href='#work'>Project</a></li>
            <li><a className='font-ovo' onClick={closeMenu} href='#contact'>Contact</a></li>
        </ul>
    </nav>
</>



    )

    
}

export default NavBar