import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { TitleText,TypingText } from './CustomText';
export default function Portfolio() {
  return (
    <section id="portfolio">
    <div className="container mx-auto">
    <div className='px-6 md:px-12 lg:px-24 py-6'>
      <div>
        <TitleText
          title="My Previous Work."
          textStyles="text-center"
        />
        <TypingText title="| Check out my portfolio page for details" textStyles="text-center mt-2" />
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
        <div className='flex flex-col col-span-1'>
          <div className="aspect-square relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 transition duration-300 hover:border-cyan-400 dark:hover:border-cyan-300/30 dark:border-gray-600 shadow-xl hover:translate-y-4">
            <img className='aspect-square w-full h-full' src="/uxmeter.png" alt="" />
            <div className='absolute items-center bottom-4 left-4'>
              <Marquee className='h-10' gradient={true} gradientWidth={50} direction='right'>
              <span className='rounded-3xl p-2 mx-2 text-slate-50 font-semibold border bg-cyan-700 bg-opacity-80 drop-shadow-xl'>Typescript</span>
              <span className='rounded-3xl p-2 mx-2 text-slate-50 font-semibold border bg-gray-700 bg-opacity-80 drop-shadow-xl'>NextJS</span>
              <span className='rounded-3xl p-2 mx-2 text-slate-50 font-semibold border bg-orange-700 bg-opacity-80 drop-shadow-xl'>MySQL</span>
              <span className='rounded-3xl p-2 mx-2 text-slate-50 font-semibold border bg-cyan-700 bg-opacity-80 drop-shadow-xl'>TailwindCSS</span>
              </Marquee>
            </div>
          </div>
          <div className='flex justify-between items-center my-4 border border-gray-100 transition duration-300 hover:border-cyan-400 dark:hover:border-cyan-300/30 rounded-3xl p-4'>
            <span className='text-xl font-semibold text-gray-800 transition dark:text-white'>UX Meter</span>
            <Link href='http://uxmeter.vercel.app'><img className='bg-gray-400 dark:bg-gray-800 rounded-full hover:bg-cyan-700 dark:hover:bg-cyan-700 hover:rotate-45 transition duration-300' src="/arrowcircle.svg" alt="link" /></Link>
          </div>
        </div>

        <div className='flex flex-col col-span-1'>
          <div className="aspect-square relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 transition duration-300 hover:border-cyan-400 dark:hover:border-cyan-300/30 dark:border-gray-600 shadow-xl hover:translate-y-4">
            <img className='aspect-square w-full h-full' src="/grahabaja.png" alt="" />
            <div className='absolute items-center bottom-4 left-4'>
              <Marquee className='h-10' gradient={true} gradientWidth={50} direction='right'>
              <span className='rounded-3xl p-2 mx-2 text-slate-50 font-semibold border bg-sky-700 bg-opacity-80 drop-shadow-xl'>Object-oriented PHP</span>
              <span className='rounded-3xl p-2 mx-2 text-slate-50 font-semibold border bg-indigo-700 bg-opacity-80 drop-shadow-xl'>Bootstrap</span>
              <span className='rounded-3xl p-2 mx-2 text-slate-50 font-semibold border bg-orange-700 bg-opacity-80 drop-shadow-xl'>MySQL</span>
              </Marquee>
            </div>
          </div>
          <div className='flex justify-between items-center my-4 border border-gray-100 transition duration-300 hover:border-cyan-400 dark:hover:border-cyan-300/30 rounded-3xl p-4'>
            <span className='text-xl font-semibold text-gray-800 transition dark:text-white'>Graha Baja Website</span>
            <Link href='http://www.grahabaja.biz.id'><img className='bg-gray-400 dark:bg-gray-800 hover:bg-cyan-700 dark:hover:bg-cyan-700 hover:rotate-45 transition duration-300 rounded-full' src="/arrowcircle.svg" alt="link" /></Link>
          </div>
        </div>
      </div>
    </div>
    </div>
    </section>                               
  );
}
