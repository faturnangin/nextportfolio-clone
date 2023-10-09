'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '@/utils/motion';
import { TypingTextParams } from '@/types/interfaces';

export const TypingText = ({ title, textStyles }:TypingTextParams) => (
  <motion.p
    variants={textContainer}
    initial="hidden"
    whileInView="show"
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }:TypingTextParams) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`text-2xl font-bold text-gray-800 dark:text-white md:text-3xl ${textStyles}`}
  >
    {title}
  </motion.h2>
);
