"use client"
import { motion } from 'framer-motion';
import { navVariants } from '@/utils/motion';
import Link from 'next/link';
import { ThemeButton } from '../components';
import { Pacifico } from 'next/font/google';
import { useRef } from 'react';
import { navConst } from '@/constants';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
})

const Navbar = () => {
  const mobileNav = useRef<HTMLUListElement>(null);
  const toggleNav = () => {
    const nav = mobileNav.current;
    if(nav){
      nav.classList.toggle('hidden');
    }
  }

  return(
    <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className='fixed flex items-center top-0 left-0 w-full border-b border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit h-16 z-50'>
        <div className="absolute w-[50%] inset-0 gradient-01 -z-50" />
        <div className="container mx-6 md:mx-12 lg:mx-24 max-w-full">
        <div className="flex items-center justify-between w-full dark:text-white">
        <Link href="/">
          <span className={`${pacifico.className} text-2xl cursor-pointer`}>faturnangin</span>
        </Link>
          <ul>
            <div className="hidden md:flex md:items-center md:gap-12 text-base font-semibold dark:text-slate-50">
            {navConst.map((item, index)=>(
              <li key={index} className="text-md  hover:text-blue-500"><Link href={item.link}>{item.name}</Link></li>
            ) )}
            <li>
            <ThemeButton/>
            </li>
            </div>
          </ul>
  
          <button className='bg-transparent dark:bg-gray-800/30 p-2 border border-gray-400 dark:border-gray-700 rounded-2xl md:hidden' onClick={toggleNav}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:text-slate-100 text-slate-800">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>
          <ul ref={mobileNav} className='hidden fixed right-6 top-16 space-y-4'>
            {navConst.map((item,index)=> (
              <li key={index} className='p-2 border border-gray-200 bg-slate-50/95 dark:bg-gray-800/90 dark:border-gray-700 rounded-2xl hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30 text-center'><Link href={item.link}>{item.name}</Link></li>
            ))}
          </ul>
          </button>
          
        </div>
      </div>
    </motion.nav>
    )
  };

export default Navbar;

