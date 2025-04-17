import { motion } from 'motion/react';

const SidebarOverlay = () => {
  return (
    <div className="group absolute top-0 left-0 h-full cursor-pointer">
      <div className="pointer-events-none fixed inset-0 z-20 bg-black opacity-0 transition-all duration-300 group-hover:opacity-60"></div>
      {/* sidebar */}
      <motion.div
        initial={{ opacity: '0', translateX: '-100%' }}
        animate={{ opacity: '1', translateX: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: 'anticipate' }}
        className="absolute top-0 left-0 z-30 h-full w-12 bg-gray-900 transition-all duration-200 ease-in group-hover:z-40 group-hover:w-full md:w-16 md:group-hover:w-[544px] xl:group-hover:w-[654px]"
      >
        {/* rotated Text (visible in the closed state) */}
        <div className="flex h-full rotate-90 transform flex-col justify-center align-middle whitespace-nowrap group-hover:hidden group-hover:opacity-0">
          <ul className="opactiy-100 flex w-screen gap-12 align-middle text-sm text-white transition-all duration-300">
            <li>
              <div className="animate-pulser size-5 rounded-full bg-yellow-300"></div>
            </li>
            <li>Freelance - &apos;18 - NOW</li>
            <li>Dept Agency - &apos;17-&apos;18</li>
            <li>Hoppinger - &apos;10-&apos;17</li>
          </ul>
        </div>
        {/* sidebar Content (optional, for expanded state) */}
        <div className="text-off-white fixed top-0 px-10 py-10 md:py-14">
          <div className="min-w-[400px] border-l-10 border-white pl-30 opacity-0 transition-opacity delay-50 ease-in group-hover:opacity-100 xl:pl-50">
            <h1 className="text-3xl font-bold md:text-4xl">Paul Huisman</h1>
            <div className="logo-bar mt-2 h-3 w-22 bg-yellow-300"></div>
          </div>
          <div className="mt-14 min-w-[400px] pl-32 opacity-0 transition-opacity delay-50 ease-in group-hover:opacity-100 xl:pl-52">
            <h2 className="mb-14 text-xs tracking-wider uppercase">
              curriculum vitae
            </h2>
            <ul className="mr-6">
              <li className="mb-10">
                <h3 className="font-montserrat text-base uppercase">
                  Freelance Frontend Engineer
                </h3>
                <div className="mb-2 text-xs italic">2019 - NOW</div>
                <p className="font-inter text-sm text-gray-400 italic">
                  Building beautiful frontend applications where the user feels
                  king.
                </p>
              </li>
              <li className="mb-10">
                <h3 className="font-montserrat text-base uppercase">
                  Senior PHP Developer at Dept Agency
                </h3>
                <div className="mb-2 text-xs italic">2017 - 2018</div>
                <p className="font-inter text-sm text-gray-400 italic">
                  Developing web applications for a whole range of clients, from
                  small to large. Leading team of developers and working closely
                  together with creatives.
                </p>
              </li>
              <li className="mb-8">
                <h3 className="font-montserrat text-base uppercase">
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
              <li className="mb-8">
                <h3 className="font-montserrat text-base uppercase">
                  Full Stack Developer at Hoppinger
                </h3>
                <div className="mb-2 text-xs italic">2011 - 2014</div>
                <p className="font-inter text-sm text-gray-400 italic">
                  Starting off as a young web developer after my graduation,
                  first as a front-end developer, later focussing on backend.
                </p>
              </li>
              <li className="mb-8">
                <h3 className="font-montserrat text-base uppercase">
                  Front-end Developer at Campagne Rotterdam
                </h3>
                <div className="mb-2 text-xs italic">2009 - 2010</div>
                <p className="font-inter text-sm text-gray-400 italic">
                  Part-time working as a front-end developer.
                </p>
              </li>
              <li className="mb-0">
                <h3 className="font-montserrat text-base uppercase">
                  BACHELOR OF INFORMATION AND COMMUNICATION TECHNOLOG
                </h3>
                <div className="mb-2 text-xs italic">2005 - 2010</div>
                <p className="font-inter text-sm text-gray-400 italic">
                  Bachelor studies at the Hogeschool Rotterdam
                </p>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SidebarOverlay;
