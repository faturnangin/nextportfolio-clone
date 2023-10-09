"use client"
import { motion } from 'framer-motion';
import { navVariants } from '@/utils/motion';
import Link from 'next/link';
import { ThemeButton } from '../components';
import { Pacifico } from 'next/font/google';
import { useRef, useEffect } from 'react';
import { navConst } from '@/constants';

const Navbar = () => {
  const mobileNav = useRef<HTMLUListElement>(null);
  const toggleNav = () => {
    const nav = mobileNav.current;
    if(nav){
      nav.classList.toggle('hidden');
    }
  }

  const nav = useRef<HTMLElement>(null);
  
  useEffect(()=>{
    function handleScroll(){
      const navPos = nav.current?.offsetTop;
      if(window.scrollY > navPos!){
        nav.current?.classList.add('fixed');
        nav.current?.classList.add('border-b');
      }else{
        nav.current?.classList.remove('fixed');
        nav.current?.classList.remove('border-b');
    }}
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <motion.nav
    ref={nav}
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className='flex items-center top-0 left-0 w-full border-gray-300 dark:border-gray-800 bg-white bg-opacity-50 backdrop-blur-2xl dark:bg-gray-900/30 h-16 z-50'>
        {/* <div className="absolute w-[50%] inset-0 gradient-01 -z-50" /> */}
        <div className="container mx-auto">

        <div className="px-6 md:px-12 lg:px-24 flex items-center justify-between dark:text-white">
          
          <button className='h-10 w-10 flex items-center justify-center bg-transparent dark:bg-gray-800/30 p-2 border border-gray-400 dark:border-gray-700 rounded-xl md:hidden' onClick={toggleNav}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-slate-100 text-slate-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
            </svg>
            <ul ref={mobileNav} className='hidden fixed left-6 top-16 space-y-4'>
              {navConst.map((item,index)=> (
                <li key={index} className='p-2 border border-gray-200 bg-slate-50/95 dark:bg-gray-800/90 dark:border-gray-700 rounded-2xl hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30 text-center'><Link href={item.link}>{item.name}</Link></li>
              ))}
            </ul>
          </button>
          
          <div className='flex justify-center items-center p-2 border border-gray-400 dark:border-gray-600 rounded-xl h-10 w-10 hover:opacity-50'>
            <Link href="/"><img className='h-8 w-8' src="/icon.svg" alt="" /></Link>
          </div>

          <div className="hidden md:flex md:justify-end md:items-center md:gap-8 font-semibold dark:text-slate-50">
            <Link href='/' className='text-base font-normal p-2 border border-gray-400 dark:border-gray-600 rounded-xl h-10 bg-transparent flex justify-center items-center hover:opacity-50'>Home</Link>
            <Link href='/portfolio' className='text-base font-normal p-2 border border-gray-400 dark:border-gray-600 rounded-xl h-10 bg-transparent flex justify-center items-center hover:opacity-50'>Portfolio</Link>
            <Link href='/blog' className='text-base font-normal p-2 border border-gray-400 dark:border-gray-600 rounded-xl h-10 bg-transparent flex justify-center items-center hover:opacity-50'>Insight</Link>
            <ThemeButton/>
          </div>
          
          <div className='md:hidden flex justify-end'>
            <ThemeButton/>
          </div>
        </div>
      </div>
    </motion.nav>
    )
  };

export default Navbar;

