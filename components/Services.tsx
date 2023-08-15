import React from 'react'
import { TitleText, TypingText } from './CustomText';
import { serviceConst } from '@/constants';
export default function Services() {
  return (
    <section id="services" className='mt-16'>
    <div className="container mx-auto">
    <div className='mx-6 md:mx-12 lg:mx-24'>
      <div>
        <TitleText
          title="Transforming Ideas into Engaging Digital Experiences."
          textStyles="text-center"
        />
        <TypingText title="| That's what i do in a nutshell" textStyles="text-center mt-2" />
      </div>
      <div className="mt-16 grid gap-8 sm:w-2/3 mx-auto md:w-full md:grid-cols-2 lg:grid-cols-3">
        
        {serviceConst.map((item,index)=>(
          <div key={index} className="p-8 py-6 md:py-12 sm:p-12 rounded-2xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-xl dark:shadow-gray-600/30 hover:animate-wiggle">
            <div className="space-y-6 md:space-y-12 text-center">
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
