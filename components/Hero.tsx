import React from 'react'
import { ButtonIcon } from '../components'
import localFont from 'next/font/local'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const clashDisplay = localFont({src: './ClashDisplay-Variable.woff2'})
export default function Hero() {
  return (
    <section id='hero'>
        <div className="container mx-auto">
            <div className='px-6 md:px-12 lg:px-24 py-6'>
                <div className='flex flex-col h-full justify-center'>

                    <div className='p-4 bg-white dark:bg-gray-800 flex flex-wrap rounded-3xl items-center justify-between border border-gray-100 dark:border-gray-600 hover:border-cyan-400 dark:hover:border-cyan-300/30 transition duration-300 shadow-md dark:shadow-none shadow-gray-600/30'>
                        
                        <div className='w-full md:w-[65%] flex flex-col space-y-4 rounded-xl p-4 '>
                            <div className=''>
                            <span className={`block text-base font-medium p-2 rounded-full border bg-gray-50 dark:bg-gray-700 w-fit lg:text-lg`}>Hi👋🏻, I&apos;m Nangin</span>
                            <span className={`${clashDisplay.className} mt-2 block text-start text-4xl md:text-4xl lg:text-6xl font-bold tracking-normal text-gray-900 dark:text-white`}>I transform ideas into engaging <span className='bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400'>digital experiences.</span></span>
                            </div>
                            <span className={`block font-medium text-gray-500 dark:text-gray-400 text-center md:text-start`}>1+ YoE Visual Designer & Fullstack Developer. </span>

                            <div className='flex items-center justify-center md:justify-start'>
                                <div className='mr-2 h-2 w-2 inline-block rounded-full bg-red-500 ring-slate-200 ring-2 animate-ping'></div>
                                <span className="block font-semibold text-gray-500 dark:text-gray-200">Currently Available for Hiring. </span>
                            </div>
                            <div className='flex justify-center md:justify-start space-x-2'>
                                <ButtonIcon text='Resume' iconsrc='/docs.png' link=''/>
                                <ButtonIcon text='Contact' iconsrc='/connect.png' link='mailto:workwithnangin@gmail.com'/>
                            </div>
                        </div>

                        <div className='w-full md:w-[35%] flex justify-center'>
                            <Image src='/headshot.png' alt='fatur' width={500} height={500}/>
                            {/* <img className='' src="/headshot.png" alt="" /> */}
                        </div>
                    </div>
                    
                    <div className='my-2 p-4 bg-white dark:bg-gray-800 flex rounded-3xl items-center justify-center border border-gray-100 dark:border-gray-600 transition duration-300 hover:border-cyan-400 dark:hover:border-cyan-300/30 shadow-md dark:shadow-none shadow-gray-600/30'>
                    <Marquee autoFill={true} pauseOnHover={true}>
                        <div className='p-2 mx-4 grayscale hover:grayscale-0 flex items-center justify-center divide-x-2 space-x-2 rounded-3xl border border-gray-100 dark:border-gray-600'>
                            <img className='h-8' src="/typescript.svg" alt="" />
                            <span className={`${clashDisplay.className} font-medium px-2`}>Typescript</span>
                        </div>
                        <div className='p-2 mx-4 grayscale hover:grayscale-0 flex items-center justify-center divide-x-2 space-x-2 rounded-3xl border border-gray-100 dark:border-gray-600'>
                            <img className='h-8' src="/react.svg" alt="" />
                            <span className={`${clashDisplay.className} font-medium px-2`}>React</span>
                        </div>
                        <div className='p-2 mx-4 grayscale hover:grayscale-0 flex items-center justify-center divide-x-2 space-x-2 rounded-3xl border border-gray-100 dark:border-gray-600'>
                            <img className='h-8' src="/tailwindcss.svg" alt="" />
                            <span className={`${clashDisplay.className} font-medium px-2`}>TailwindCSS</span>
                        </div>
                        <div className='p-2 mx-4 grayscale hover:grayscale-0 flex items-center justify-center divide-x-2 space-x-2 rounded-3xl border border-gray-100 dark:border-gray-600'>
                            <img className='h-8' src="/figma.svg" alt="" />
                            <span className={`${clashDisplay.className} font-medium px-2`}>Figma</span>
                        </div>
                        <div className='p-2 mx-4 grayscale hover:grayscale-0 flex items-center justify-center divide-x-2 space-x-2 rounded-3xl border border-gray-100 dark:border-gray-600'>
                            <img className='h-8' src="/mongo.svg" alt="" />
                            <span className={`${clashDisplay.className} font-medium px-2`}>MongoDB</span>
                        </div>
                    </Marquee>
                    </div>

                    
                </div>
            </div>
        </div>
    </section>
  )
}
