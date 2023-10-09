import React from 'react'
import { TitleText } from '@/components/CustomText'
import { blogConst } from '@/constants'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Blog - Fatur Nangin',
  description: 'Blog Page',
}

export default function BlogPage() {
  function formatDate(inputDate:number) {
    const inputDateStr = inputDate.toString(); // Convert number to string
    const day = inputDateStr.substring(0, 2);
    const month = inputDateStr.substring(2, 4);
    const year = inputDateStr.substring(4);
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
      return `${months[parseInt(month, 10) - 1]} ${day} ${year}`;
    }
  return (
    <div className="container mx-auto mt-16">
    <div className='mx-6 md:mx-12 lg:mx-24'>
        <div> <TitleText title="Blog." textStyles=""/></div>
        <div className="w-full">
            {blogConst.map((item,index)=>(
              <div key={index} className="mt-16 group relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 dark:hover:bg-gray-800/50 border border-gray-100 dark:border-gray-700 shadow-2xl sm:gap-8 sm:flex transition duration-300">
              <div className="rounded-3xl overflow-hidden transition-all duration-500 group-hover:rounded-xl">
              <img
                  src={item.img}
                  alt="art cover"
                  className="lg:max-h-64 object-cover transition duration-500 group-hover:scale-105"
              />
              </div>
              <div className="sm:p-2 sm:pl-0 sm:w-4/6">
              <span className="mt-4 mb-2 inline-block font-medium text-gray-400 dark:text-gray-500 sm:mt-0">{formatDate(item.time)}</span>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                  {item.title}
              </h3>
              <p className="my-6 text-gray-600 dark:text-gray-300">
                  {item.desc}
              </p>
  
              <div className="flex gap-4">
                  <p className="px-3 py-1 rounded-full border border-gray-100 text-sm font-medium text-primary transition duration-300 hover:border-transparent hover:bg-primary hover:text-white dark:border-gray-700 dark:text-gray-300">
                  Personal
                  </p>
              </div>
              </div>
  
              </div>
            ))}
        </div>
    </div>
    </div>
  )
}


