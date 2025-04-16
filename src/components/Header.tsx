'use client';

import { motion } from 'motion/react';
import { AnimatedText } from './AnimatedText';

const Header = () => {
  return (
    <header className="relative">
      <div className="w-full grid grid-cols-29 absolute z-0 top-0">
        {Array.from(Array(29 * 7)).map((_, i) => (
          <motion.div
            key={i}
            style={{
              scale: 1,
            }}
            className="aspect-square border-[1px] border-gray-200/50"
            whileHover={{
              scale: 1.7,
              backgroundColor: 'oklch(90.5% 0.182 98.111)',
              opacity: 0,
              shadow: '1px 1px 1px rgba(0, 0, 0, 0.5)',
            }}
            transition={{ duration: 0.5, delay: 0, ease: 'easeInOut' }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 md:px-12 py-10 md:py-14 ml-32">
        <div className="flex flex-col-reverse transition-all md:flex-row justify-between w-full">
          <div className="z-10 ml-[2px]">
            <motion.h1
              className="block text-3xl md:text-4xl text-black font-bold"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: 'easeIn', duration: 0.3, delay: 0.5 }}
            >
              Paul Huisman
            </motion.h1>
            <motion.div
              className="logo-bar h-3  bg-black mt-2"
              initial={{ width: 0 }}
              animate={{ width: '5.5rem' }}
              transition={{ ease: 'easeIn', duration: 0.3, delay: 0.9 }}
            ></motion.div>
          </div>

          <div className="font-inter mx-[4px] p-0 md:p-2  mb-8 md:mb-0 z-10 flex justify-between w-full md:w-auto md:block">
            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: 'easeIn', duration: 0.3, delay: 0.6 }}
            >
              <div className="size-7 rounded-full flex align-middle pt-[5px] justify-center shadow-md bg-yellow-300 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 stroke-[1.5]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <h4 className="text-base font-bold text-black mb-2.5 text-end">
                GET IN TOUCH
              </h4>
            </motion.div>
            <motion.ul
              className="text-black text-sm text-end w-auto"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: 'easeIn', duration: 0.3, delay: 0.8 }}
            >
              <li className="mb-2 relative group">
                <a
                  href="mailto:paul@paulhuisman.com"
                  className="relative inline-block"
                >
                  Send mail{' '}
                  <span className="absolute left-0 -bottom-[1px] h-[3px] bg-black transition-all duration-300 ease-in w-0 group-hover:w-full"></span>
                </a>
              </li>
              <li className="mb-2 relative group">
                <a
                  href="https://www.linkedin.com/in/paulhuisman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block"
                >
                  Check LinkedIn
                  <span className="absolute left-0 -bottom-[1px] h-[3px] bg-black transition-all duration-300 ease-in w-0 group-hover:w-full"></span>
                </a>
              </li>
              <li className="hidden relative md:inline-block group">
                <a
                  href="/files/CV-PaulHuisman.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="relative inline-block"
                >
                  Download CV
                  <span className="absolute left-0 -bottom-[1px] h-[3px] bg-black transition-all duration-300 ease-in w-0 group-hover:w-full"></span>
                </a>
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
