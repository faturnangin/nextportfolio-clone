import React from 'react'
import { TitleText, TypingText } from './CustomText';
import { serviceConst } from '@/constants';
export default function Services() {
  return (
    <section id="services">
    <div className="container mx-auto">
    <div className='px-6 md:px-12 lg:px-24 py-6'>
      <div>
        <TitleText
          title="Expertise"
          textStyles="text-center"
        />
        <TypingText title="| What i do in a nutshell" textStyles="text-center mt-2" />
      </div>
      <div className="mt-16 grid gap-8 sm:w-2/3 mx-auto md:w-full md:grid-cols-2 lg:grid-cols-3">
        
        {serviceConst.map((item,index)=>(
          <div key={index} className="p-4 md:p-6 rounded-3xl bg-white dark:bg-gray-800 border border-gray-100 transition duration-300 hover:border-cyan-400 dark:hover:border-cyan-300/30 dark:border-gray-600 shadow-xl hover:rotate-1">
            <div className="space-y-2 md:space-y-6 text-center">
              <img
                src={item.img}
                className="w-16 mx-auto"
                width="512"
                height="512"
                alt="burger illustration"
              />
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 transition dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </section>
                                  
  )
}
