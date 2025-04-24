import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/util/cn';

const SidebarOverlay = () => {
  const [hasScroll, setHasScroll] = useState(false);
  const [isExtended, setIsExtended] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // disable scroll when sidebar is extended
  useEffect(() => {
    if (isExtended) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isExtended]);

  // close on esc
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isExtended) {
        setIsExtended(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExtended]);

  // close scroll when sidebar is closed
  useEffect(() => {
    if (!isExtended) setHasScroll(false);
  }, [isExtended]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <AnimatePresence>
      {/* full-size black background when sidebar is hovered */}

      <div
        className={cn(
          'fixed inset-0 z-20 hidden bg-black opacity-0 transition-all duration-300',
          { 'block opacity-60': isExtended },
        )}
        onClick={() => setIsExtended(false)}
      ></div>

      {/* sidebar wrapper */}
      <motion.div
        key="sidebar-wrapper"
        initial={{ translateX: '-100%' }}
        animate={{ translateX: 0 }}
        transition={{
          duration: 0.4,
          delay: hasMounted ? 0 : 1.1,
          ease: 'easeIn',
        }}
        className={cn(
          'fixed top-0 z-30 h-dvh w-8 bg-gray-900 transition-all duration-150 ease-in hover:pt-[2px] lg:h-full lg:w-14 hover:lg:w-15 xl:w-14',
          {
            'cursor-pointer': !isExtended,
          },
        )}
        onClick={() => setIsExtended(true)}
      >
        {/* sidebar closed state */}
        <motion.div
          className={cn('rotate-90 transform transition-all duration-300')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeIn' }}
        >
          <ul className="mt-41 flex h-5 w-screen items-center justify-start text-xs text-white transition-all duration-300 md:mt-30 md:text-sm lg:mt-40 lg:h-auto">
            <li>
              <div className="animate-pulser size-3.5 rounded-full bg-yellow-300 lg:size-5"></div>
            </li>
            <li className="mr-8 ml-8 h-4 tracking-wider text-nowrap lg:mr-10 lg:h-auto lg:text-wrap">
              Freelance - &apos;19 - NOW
            </li>
            <li className="mr-8 ml-8 h-4 tracking-wider text-nowrap lg:mr-10 lg:h-auto lg:text-wrap">
              Dept Agency - &apos;17-&apos;18
            </li>
            <li className="ml-8 h-4 tracking-wider text-nowrap lg:ml-10 lg:h-auto lg:text-wrap">
              Hoppinger - &apos;10-&apos;17
            </li>
          </ul>
        </motion.div>

        {/* sidebar extended state */}
        <motion.div
          className={cn(
            'text-off-white absolute inset-0 h-auto w-0 overflow-y-hidden bg-gray-900 shadow-md lg:fixed lg:h-full',
            {
              'w-auto overflow-x-hidden px-10 py-10 pb-20 md:py-14 lg:overflow-y-hidden lg:py-14 lg:pb-0':
                isExtended,
              'overflow-y-scroll': isExtended && hasScroll,
            },
          )}
          onAnimationComplete={() => {
            if (isExtended) {
              setTimeout(() => setHasScroll(true), 50);
            }
          }}
          animate={isExtended ? 'open' : 'closed'}
          variants={{
            closed: {
              width: '0',
              transition: {
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
              },
            },
            open: {
              width: isMobile ? '100vw' : '63vw',
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
          {isExtended && (
            <>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: 'easeIn', delay: 0.4 }}
                className="group pointer-events-auto absolute top-5 right-5 z-50 cursor-pointer transition-all duration-200 hover:rounded-full hover:bg-amber-50"
                aria-label="Close Sidebar"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExtended(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10 stroke-white transition-all duration-200 group-hover:stroke-gray-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isExtended ? 1 : 0 }}
                transition={{ duration: 0.25, ease: 'easeIn', delay: 0.2 }}
                className="min-w-[400px] border-white lg:border-l-10 lg:pl-30"
              >
                <h1 className="text-3xl font-bold md:text-4xl">Paul Huisman</h1>
                <div className="logo-bar mt-2 h-3 w-22 bg-yellow-300"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isExtended ? 1 : 0,
                  // x: isExtended ? 0 : -20,
                }}
                transition={{ duration: 0.3, ease: 'easeIn', delay: 0.35 }}
                className="mt-14 min-w-[80vw] lg:min-w-[54vw] lg:pl-32"
              >
                <h2 className="mb-14 text-xs tracking-wider uppercase">
                  curriculum vitae
                </h2>
                <ul className="mr-6 grid gap-x-0 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-y-24">
                  <li className="lg:max-w-[400px]">
                    <h3 className="font-montserrat text-base font-bold uppercase">
                      Freelance Frontend Engineer
                    </h3>
                    <div className="mb-2 text-xs italic">2019 - NOW</div>
                    <p className="font-inter text-sm text-gray-400 italic">
                      Building beautiful frontend applications where the user is
                      at the center of attention, developing projects for RTL,
                      New10, Ring, Zoncoalitie, AUrate, Stager, among others.
                    </p>
                  </li>
                  <li className="lg:max-w-[400px]">
                    <h3 className="font-montserrat text-base font-bold uppercase">
                      Senior PHP Developer at Dept Agency
                    </h3>
                    <div className="mb-2 text-xs italic">2017 - 2018</div>
                    <p className="font-inter text-sm text-gray-400 italic">
                      Developing web applications for a whole range of clients,
                      from small to large. Leading team of developers and
                      working closely together with creatives.
                    </p>
                  </li>
                  <li className="lg:max-w-[400px]">
                    <h3 className="font-montserrat text-base font-bold uppercase">
                      Lead Developer at Hoppinger
                    </h3>
                    <div className="mb-2 text-xs italic">2014 - 2017</div>
                    <p className="font-inter text-sm text-gray-400 italic">
                      As a lead developer I was responsible for the final
                      technical product. Leading the developers in my team and
                      working closely together with the internal project manager
                      and the product owner (client) to get the best result
                      possible.
                    </p>
                  </li>
                  <li className="lg:max-w-[400px]">
                    <h3 className="font-montserrat text-base font-bold uppercase">
                      Full Stack Developer at Hoppinger
                    </h3>
                    <div className="mb-2 text-xs italic">2011 - 2014</div>
                    <p className="font-inter text-sm text-gray-400 italic">
                      Starting off as a young web developer after my graduation,
                      first as a front-end developer, later focussing on
                      backend.
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
                  <li className="mb-12 lg:mb-4">
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
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SidebarOverlay;
