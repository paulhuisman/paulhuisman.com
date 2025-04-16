'use client';

import { motion } from 'motion/react';

const Header = () => {
  return (
    <header className="relative">
      <div className="w-full grid grid-cols-29 h-1/2 absolute z-0 top-0 max-h-[200px]">
        {Array.from(Array(29 * 7)).map((_, i) => (
          <motion.div
            key={i}
            className="aspect-square border-[1px] border-gray-200/50"
            whileHover={{
              scale: 1.1,
              backgroundColor: 'oklch(90.5% 0.182 98.111)',
              opacity: 0.1,
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>

      <div className="container mx-auto px-8 md:px-12 py-10 md:py-14">
        <div className="flex flex-col-reverse transition-all md:flex-row justify-between w-full">
          <motion.div
            className="z-10 ml-[2px]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeIn', duration: 0.3, delay: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl text-black font-bold">
              Paul Huisman
            </h1>
            <div className="logo-bar h-3 w-22 bg-black mt-2"></div>
          </motion.div>

          <motion.div
            className="font-poppins mx-[4px] p-0 md:p-2  mb-8 md:mb-0 z-10 flex justify-between w-full md:w-auto md:block"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeIn', duration: 0.3, delay: 0.5 }}
          >
            <h4 className="text-base font-bold text-black mb-2.5 text-end">
              GET IN TOUCH
            </h4>
            <ul className="text-black text-xs text-end">
              <li className="mb-2">
                <a
                  href="mailto:paul@paulhuisman.com"
                  className="hover:underline"
                >
                  Send mail
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/in/paulhuisman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Check LinkedIn
                </a>
              </li>
              <li className="hidden md:block">
                <a
                  href="/files/CV-PaulHuisman.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="hover:underline"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;
