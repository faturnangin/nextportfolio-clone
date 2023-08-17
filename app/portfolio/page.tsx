import React from 'react'
import { TitleText } from '@/components/CustomText'
import { serviceConst } from '@/constants'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Portfolio - Fatur Nangin',
    description: 'Portfolio Page',
  }

export default function PortfolioPage() {
  return (
    <div className="container mx-auto mt-32">
    <div className='mx-6 md:mx-12 lg:mx-24'>
        <div> <TitleText title="Portfolio." textStyles=""/>
        <div
            className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-2xl border border-gray-100 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4"
        >
            {serviceConst.map((item,index)=>(
                <div key={index} className="group relative bg-white dark:bg-gray-800 dark:hover:bg-gray-800/50 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                <div className="relative space-y-8 py-12 p-8">
                    <img
                    src={item.img}
                    className="w-12"
                    width="512"
                    height="512"
                    alt="burger illustration"
                    />
    
                    <div className="space-y-2">
                    <h5
                        className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary"
                    >
                        {item.title}
                    </h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        {item.desc}
                    </p>
                    </div>
                    <a href="#" className="flex items-center justify-between group-hover:text-primary">
                    <span className="text-sm">Explore</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>                
                    </a>
                </div>
                </div>
            ))}

            <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10"
            >
            <div
                className="relative h-full space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800"
            >
                <img
                src="/idea.png"
                className="w-12"
                width="512"
                height="512"
                alt="burger illustration"
                />

                <div className="space-y-2">
                <h5
                    className="text-xl font-medium text-gray-700 dark:text-white transition group-hover:text-primary"
                >
                    More stuff are coming!
                </h5>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    Don&apos;t seems to like what you see here? I&apos;ts okay because i&apos;ll never stop learning, we all start somewhere 😎
                </p>
                </div>
            </div>
            </div>
            </div>
                
        </div>
    </div>
    </div>
  )
}



                                  