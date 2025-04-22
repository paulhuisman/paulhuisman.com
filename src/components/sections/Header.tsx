'use client';

import { motion } from 'motion/react';
import useIsClient from '@/hooks/useIsClient';
import useBreakpointValue from '@/hooks/useBreakpointValue';
import Container from '../Container';

const Header = () => {
  const isClient = useIsClient();

  const cols = useBreakpointValue({
    default: 20,
    lg: 29,
    xl: 32,
  });
  const rows = useBreakpointValue({
    default: 7,
    lg: 10,
    xl: 9,
  });

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: 0.85,
        staggerChildren: 0.05,
      },
    },
  };
  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  };

  const tileVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.08, // stagger by index
      },
    }),
  };

  if (!isClient) return null; // optional fallback (or loading UI)

  return (
    <header className="relative">
      <div className="absolute top-0 z-0 grid w-full grid-cols-20 lg:grid-cols-29 xl:grid-cols-32">
        {Array.from(Array(cols * rows)).map((_, i) => (
          <motion.div
            key={`tile-${i}`}
            custom={Math.floor(i / cols)}
            variants={tileVariants}
            initial="hidden"
            animate="visible"
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

      <Container className="xl:py-[54px] xl:pb-40">
        <div className="flex w-full flex-col-reverse justify-between transition-all md:flex-row">
          <div className="z-10">
            <motion.h1
              className="block text-3xl font-bold text-black md:text-4xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: 'easeIn', duration: 0.25, delay: 0.5 }}
            >
              Paul Huisman
            </motion.h1>
            <motion.div
              className="logo-bar mt-[10px] h-3 bg-black"
              initial={{ width: 0 }}
              animate={{ width: '5.5rem' }}
              transition={{ ease: 'easeIn', duration: 0.25, delay: 0.8 }}
            ></motion.div>
          </div>

          <div className="font-inter z-10 mx-[4px] mb-8 flex w-full justify-between p-0 md:mb-0 md:block md:w-auto md:p-2">
            <motion.div
              className="flex gap-2 align-middle"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: 'easeIn', duration: 0.25, delay: 0.5 }}
            >
              <div className="group hidden size-7 justify-center rounded-full bg-yellow-300 pt-[5px] align-middle shadow-md md:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="size-[18px] stroke-gray-900 stroke-[1.5]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
              </div>
              <h4 className="mb-2.5 text-base font-bold text-black">
                GET IN TOUCH
              </h4>
            </motion.div>
            <motion.ul
              className="w-auto text-end text-sm text-black"
              // initial={{ opacity: 0, y: -10 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ ease: 'easeIn', duration: 0.3, delay: 0.8 }}
              initial="hidden"
              animate="visible"
              variants={listVariants}
            >
              <motion.li
                key="mail"
                variants={linkVariants}
                className="group relative mb-2"
              >
                <a
                  href="mailto:paul@paulhuisman.com"
                  className="relative inline-block"
                >
                  Send mail{' '}
                  <span className="absolute -bottom-[1px] left-0 h-[3px] w-0 bg-black transition-all duration-300 ease-in group-hover:w-full"></span>
                </a>
              </motion.li>
              <motion.li
                key="linkedin"
                variants={linkVariants}
                className="group relative mb-2"
              >
                <a
                  href="https://www.linkedin.com/in/paulhuisman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block"
                >
                  Check LinkedIn
                  <span className="absolute -bottom-[1px] left-0 h-[3px] w-0 bg-black transition-all duration-300 ease-in group-hover:w-full"></span>
                </a>
              </motion.li>
              <motion.li
                key="cv"
                variants={linkVariants}
                className="group relative hidden md:inline-block"
              >
                <a
                  href="/files/CV-PaulHuisman.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="relative inline-block"
                >
                  Download CV
                  <span className="absolute -bottom-[1px] left-0 h-[3px] w-0 bg-black transition-all duration-300 ease-in group-hover:w-full"></span>
                </a>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
