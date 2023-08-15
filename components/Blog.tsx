import React from 'react'
import { TitleText, TypingText } from './CustomText'
import { blogConst } from '@/constants'
export default function Blog() {
    return (
    <section id='blog' className='mt-16'>
        <div className="container mx-auto">
        <div className='mx-6 md:mx-12 lg:mx-24'>
        <div className='mb-16'>
        <TitleText
          title="Blog."
          textStyles="text-center"
        />
        <TypingText title="| I'm a journalist at ❤️" textStyles="text-center mt-2" />
        </div>
        {blogConst.map((item,index)=>(
          <div key={index} className="mb-4 flex relative md:flex-row flex-col gap-4 p-6 rounded-2xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-xl dark:shadow-gray-600/30">
          <img
              src={item.img}
              alt="thumbnail"
              className="hidden sm:block aspect-square max-h-56 rounded-2xl object-cover"
              />
              <div className="w-full flex justify-between items-center gap-4 divide-x divide-gray-200 dark:divide-gray-700">
              <div className="flex-1 flex flex-col">
                  <h4 className="text-lg md:text-2xl font-semibold">
                  {item.title}
                  </h4>
                  <p className="mt-2 md:mt-4 font-normal text-justify text-secondary-white text-ellipsis break-words overflow-y-scroll md:overflow-hidden max-h-24 sm:max-h-full">
                  {item.desc}
                  </p>
              </div>
  
              <div
                  className="lg:flex hidden items-center justify-center w-[100px] h-[100px]"
              >
                  <img
                  src="/right-arrow.svg"
                  alt="arrow"
                  className="invert object-contain hover:translate-x-2 transition-transform duration-500"
                  />
              </div>
              </div>
          </div>
        ))}

        </div>
        </div>
    </section>
  )
}
