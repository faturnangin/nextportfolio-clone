'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { footerVariants } from '../utils/motion';
import { ButtonIcon } from '../components';
const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`mt-16 text-gray-800 dark:text-white`}
  >
    <div className="container mx-auto">
    <div className='mx-6 md:mx-12 lg:mx-24'>
    
    <div className="flex mx-auto flex-wrap items-center justify-between w-full">
            <h4 className="font-bold md:text-2xl text-2xl">
            Get In Touch
            </h4>
            <Link href='mailto:workwithnangin@gmail.com' className="flex items-center h-fit py-2 px-4 bg-cyan-700 rounded-xl gap-[12px]">
            <img
                src="/mail.svg"
                alt="mail"
                className="w-[24px] h-[24px] object-contain"
                />
            <span className="font-normal text-white text-[16px]">Connect</span>
            </Link>
    </div>

    <div className="flex flex-col mb-4">
        <div className="my-4 h-[2px] bg-sky-800 dark:bg-white opacity-50" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="text-2xl">
            Fatur Nangin
          </h4>
          <p className="font-normal text-[14px] opacity-80">
            Made with ❤️ using NextJS & TailwindCSS in 2023.
          </p>
          <div className="flex gap-4 invert dark:invert-0 opacity-50">
            <a href="https://www.linkedin.com/in/nangin/">
              <img src="/linkedin.svg" alt="linkedin" className="w-[24px] h-[24px] object-contain cursor-pointer"/>
            </a>
            <a href="https://instagram.com/nangin.tech">
              <img src="/instagram.svg" alt="instagram" className="w-[24px] h-[24px] object-contain cursor-pointer"/>
            </a>
          </div>
        </div>
      </div>
    </div>

    </div>
  </motion.footer>

  );

export default Footer;
