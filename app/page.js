'use client'
import Image from "next/image";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
   <>
    <NavBar/>
    <Header/>
    <About/>
    <Work/>
    <Contact/>
    <Footer/>
   </>
  );
}
