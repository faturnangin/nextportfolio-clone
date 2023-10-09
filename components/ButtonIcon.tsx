import React from 'react'
import Link from 'next/link';
export default function ButtonIcon({text, iconsrc, link}:{text:string; iconsrc:string; link:string}) {
  return (
    <Link href={link} className="p-2 md:px-4 border border-gray-200 bg-transparent dark:bg-gray-800 dark:border-gray-700 rounded-xl duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-blue-600/20 dark:hover:border-cyan-300/30" locale={false}>
        <div className="flex items-center justify-center space-x-2">
            <img className="w-7 h-7" src={iconsrc} alt="resume" width="128" height="128"/>
            <span className="font-medium block dark:text-white">{text}</span>
        </div>
    </Link>
  )
}
