import React from 'react'
import { TitleText,TypingText } from './CustomText';
export default function Portfolio() {
  return (
    <section id="portfolio" className='mt-16'>
    <div className="container mx-auto">
    <div className='mx-6 md:mx-12 lg:mx-24'>
      <div>
        <TitleText
          title="My Previous Work."
          textStyles="text-center"
        />
        <TypingText title="| Check out my portfolio page for" textStyles="text-center mt-2" />
      </div>
      <div className="mt-16 grid gap-8 sm:w-2/3 mx-auto md:w-full md:grid-cols-3 lg:grid-cols-3">
        
        <div className="md:col-span-2 overflow-hidden rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/V3fkav47yx8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
          {/* <iframe className="w-full h-full aspect-video" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> */}
          <iframe
            className="w-full h-full aspect-video"
            src="https://www.youtube.com/embed/V3fkav47yx8"
            title="YouTube video player"
            width="560"
            height="315"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>

        <div className="rounded-3xl aspect-square md:aspect-auto group relative overflow-hidden flex items-center justify-center bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <img
            className="mx-auto h-full w-auto grayscale-0 object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale"
            src="/setup.jpeg"
            alt="latest-project"
            width="640"
            height="805"
          />
          <div className="absolute bottom-0 inset-x-0 h-max mt-auto px-8 py-4 dark:bg-gray-800 bg-cyan-700">
            <div className='w-full text-center'>
              <h4 className="text-xl font-semibold text-white">Latest Project</h4>
              <span className="block text-sm text-gray-100">Graha Baja Company Site</span>
            </div>
            </div>
        </div>

      </div>
    </div>
    </div>
    </section>                               
  );
}
