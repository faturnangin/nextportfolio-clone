import React from 'react'
import Link from 'next/link'
import { ButtonIcon } from '../components'
export default function Expertise() {
  return (
    <section id='hero' className='mt-32'>
        <div className="container mx-auto">
            <div className='mx-6 md:mx-12 lg:mx-24'>
            <div className="lg:flex flex-wrap items-center justify-center md:justify-between w-full">
                <div className='md:w-1/2'>
                    <h1 className="sm:mx-auto font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-4xl lg:w-auto lg:text-left dark:text-white">Hi!👋🏻 I&apos;m <br className="lg:block hidden"/> <span className="xl:text-7xl md:text-6xl sm:text-5xl text-4xl relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-sky-400 dark:to-slate-300">Fatur Nangin</span></h1>
                    <div className="relative mt-4 md:mt-0 space-y-4 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto">
                    <p className="sm:text-lg text-gray-700 dark:text-gray-300">Visual Enthusiast, Fullstack Developer</p>
                    <p className="sm:text-lg text-gray-500 dark:text-gray-100">
                        a tech&design-savvy who ❤️ bringing creative ideas to life.
                    </p>
                    <div className='flex items-center justify-center md:justify-start'>
                        <div className='mr-2 h-2 w-2 inline-block rounded-full bg-red-500 ring-slate-200 ring-2 animate-ping'></div>
                        <span className="block font-semibold text-gray-500 dark:text-gray-400">Currently Available for Hiring. </span>
                    </div>
                    <div className="grid grid-cols-2 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                       <ButtonIcon text='Resume' iconsrc="/docs.png" link='/resume.pdf' />
                       <ButtonIcon text='Contact' iconsrc="/connect.png" link="mailto:workwithnangin@gmail.com" />
                    </div>

                    <div className="dark:text-gray-300">
                        🤙🏻
                        <span>Other integrations :</span> 
                        <a href="https://github.com/faturnangin" className="font-semibold text-gray-700 dark:text-gray-200">GitHub,</a>
                        <a href="https://www.instagram.com/nangin.tech" className="font-semibold text-gray-700 dark:text-gray-200">Instagram</a>
                    </div>
                    <div className="flex gap:2 md:gap-4 justify-between items-center">
                        <span className='font-semibold text-gray-700 dark:text-gray-200 hidden md:block'>Tech Stack :</span>
                        <img src="/typescript.svg" className="h-6 sm:h-7 w-auto lg:h-8 grayscale hover:grayscale-0" alt="" />
                        <img src="/react.svg" className="h-6 sm:h-7 w-auto lg:h-8 grayscale hover:grayscale-0" alt="" />
                        <img src="/nextjs.svg" className="h-6 sm:h-7 w-auto lg:h-8 dark:invert opacity-50 dark:hover:invert-0 hover:opacity-100" alt="" />
                        <img src="/mongo.svg" className="h-6 sm:h-7 w-auto lg:h-8 grayscale hover:grayscale-0" alt="" />
                        <img src="/tailwindcss.svg" className="h-6 sm:h-7 w-auto lg:h-8 grayscale hover:grayscale-0" alt="" />
                        <img src="/figma.svg" className="h-6 sm:h-7 w-auto lg:h-8 grayscale hover:grayscale-0" alt="" />
                    </div>
                </div>
                
                </div>
                <div className="mt-4 md:mt-0 md:w-1/2 relative flex justify-center md:justify-end">
                    <div className="absolute lg:right-16 lg:top-16 h-80 w-80 rounded-full bg-gradient-to-r from-blue-500 to-cyan-900 blur-3xl animate-pulse"></div>
                    <img src="/hero.png" className="relative max-h-80 lg:max-h-[480px] duration-300 hover:rotate-3" alt="faturnangin"/>
                </div>
                
            </div>
            </div>
        </div>
        </section>
  )
}
