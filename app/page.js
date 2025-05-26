'use client'
import Image from "next/image";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode,setDarkMode]=useState(false);
  useEffect(()=>{
    if(localStorage.theme==='dark' || !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme:dark)').matches){
      setDarkMode(true);
    }else{
      setDarkMode(false);
    }
  },[])
  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark');
      localStorage.theme='dark';
    }else{
      document.documentElement.classList.remove('dark');
      localStorage.theme='';
    }
  },[isDarkMode])
  return (
   <>
    <NavBar isDarkMode={isDarkMode} setDarkMode={setDarkMode}/>
    <Header isDarkMode={isDarkMode}/>
    <About isDarkMode={isDarkMode}/>
    <Work isDarkMode={isDarkMode}/>
    <Contact isDarkMode={isDarkMode}/>
    <Footer isDarkMode={isDarkMode}/>
   </>
  );
}
