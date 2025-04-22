import { cn } from '@/util/cn';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

const SidebarOverlay = () => {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <AnimatePresence>
      {/* full-size black background when sidebar is hovered */}
      <div
        className={cn(
          'pointer-events-none fixed inset-0 z-20 bg-black transition-all duration-300',
          isExtended ? 'opacity-60' : 'opacity-0',
        )}
      ></div>
      {/* sidebar wrapper */}
      <motion.div
        initial={{ translateX: '-100%' }}
        animate={{ translateX: 0 }}
        transition={{ duration: 0.4, delay: 1.1, ease: 'easeIn' }}
        className="absolute top-0 z-30 h-full w-8 cursor-pointer bg-gray-900 md:w-16"
        onClick={() => setIsExtended(!isExtended)}
      >
        {/* sidebar closed state */}
        <motion.div
          className={cn('rotate-90 transform transition-all duration-300')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
        >
          <ul className="mt-40 flex w-screen items-center justify-start text-xs text-white transition-all duration-300 md:text-sm">
            <li>
              <div className="animate-pulser size-5 rounded-full bg-yellow-300"></div>
            </li>
            <li className="mr-20 ml-8 tracking-wider">
              Freelance - &apos;19 - NOW
            </li>
            <li className="mr-20 tracking-wider">
              Dept Agency - &apos;17-&apos;18
            </li>
            <li className="mr-16 tracking-wider">
              Hoppinger - &apos;10-&apos;17
            </li>
          </ul>
        </motion.div>

        {/* sidebar extended state */}
        <motion.div
          className={cn(
            'text-off-white fixed inset-0 h-auto w-0 bg-gray-900 shadow-md md:py-14 lg:h-full',
            { 'w-full px-10 py-10': isExtended },
          )}
          animate={isExtended ? 'open' : 'closed'}
          variants={{
            closed: {
              width: '0rem',
              rotateY: 0,
              scale: 1,
              transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              },
            },
            open: {
              width: '100vw',
              rotateY: 0,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              },
            },
          }}
          style={{
            transformOrigin: 'left center',
            perspective: 1000,
          }}
          whileHover={!isExtended ? { scale: 1.05, rotateY: 5 } : {}}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={cn(
              'absolute top-3 right-3 hidden size-10 stroke-white',
              {
                block: isExtended,
              },
            )}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExtended ? 1 : 0 }}
            transition={{ duration: 0.05, ease: 'easeIn', delay: 0.4 }}
            className="min-w-[400px] border-l-10 border-white pl-30"
          >
            <h1 className="text-3xl font-bold md:text-4xl">Paul Huisman</h1>
            <div className="logo-bar mt-2 h-3 w-22 bg-yellow-300"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isExtended ? 1 : 0 }}
            transition={{ duration: 0.3, ease: 'easeIn', delay: 0.4 }}
            className="mt-14 pl-32"
          >
            <h2 className="mb-14 text-xs tracking-wider uppercase">
              curriculum vitae
            </h2>
            <ul className="mr-6 grid grid-cols-2 gap-x-0 gap-y-24">
              <li className="lg:max-w-[400px]">
                <h3 className="font-montserrat text-base font-bold uppercase">
                  Freelance Frontend Engineer
                </h3>
                <div className="mb-2 text-xs italic">2019 - NOW</div>
                <p className="font-inter text-sm text-gray-400 italic">
                  Building beautiful frontend applications where the user is at
                  the center of attention, developing projects for RTL, New10,
                  Ring, Zoncoalitie, AUrate, Stager, among others.
                </p>
              </li>
              <li className="lg:max-w-[400px]">
                <h3 className="font-montserrat text-base font-bold uppercase">
                  Senior PHP Developer at Dept Agency
                </h3>
                <div className="mb-2 text-xs italic">2017 - 2018</div>
                <p className="font-inter text-sm text-gray-400 italic">
                  Developing web applications for a whole range of clients, from
                  small to large. Leading team of developers and working closely
                  together with creatives.
                </p>
              </li>
              <li className="lg:max-w-[400px]">
                <h3 className="font-montserrat text-base font-bold uppercase">
                  Lead Developer at Hoppinger
                </h3>
                <div className="mb-2 text-xs italic">2014 - 2017</div>
                <p className="font-inter text-sm text-gray-400 italic">
                  As a lead developer I was responsible for the final technical
                  product. Leading the developers in my team and working closely
                  together with the internal project manager and the product
                  owner (client) to get the best result possible.
                </p>
              </li>
              <li className="lg:max-w-[400px]">
                <h3 className="font-montserrat text-base font-bold uppercase">
                  Full Stack Developer at Hoppinger
                </h3>
                <div className="mb-2 text-xs italic">2011 - 2014</div>
                <p className="font-inter text-sm text-gray-400 italic">
                  Starting off as a young web developer after my graduation,
                  first as a front-end developer, later focussing on backend.
                </p>
              </li>
              <li className="lg:max-w-[400px]">
                <h3 className="font-montserrat text-base font-bold uppercase">
                  Front-end Developer at Campagne Rotterdam
                </h3>
                <div className="mb-2 text-xs italic">2009 - 2010</div>
                <p className="font-inter text-sm text-gray-400 italic">
                  Part-time working as a front-end developer.
                </p>
              </li>
              <li className="mb-0">
                <h3 className="font-montserrat text-base font-bold uppercase">
                  BACHELOR OF INFORMATION AND COMMUNICATION TECHNOLOG
                </h3>
                <div className="mb-2 text-xs italic">2005 - 2010</div>
                <p className="font-inter text-sm text-gray-400 italic">
                  Bachelor studies at the Hogeschool Rotterdam
                </p>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SidebarOverlay;
