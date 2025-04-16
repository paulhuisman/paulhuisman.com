import { motion } from 'motion/react';

const SidebarOverlay = () => {
  return (
    <div className="relative group cursor-pointer">
      <div className="absolute w-screen h-screen bg-black opacity-0 z-20 group-hover:opacity-60 transition-all duration-300 pointer-events-none"></div>
      {/* sidebar */}
      <motion.div
        initial={{ opacity: '0', translateX: '-100%' }}
        animate={{ opacity: '1', translateX: 0 }}
        transition={{ duration: 0.3, delay: 0.2, ease: 'anticipate' }}
        className="absolute z-10 top-0 left-0 bg-gray-900 w-12 md:w-16 h-screen group-hover:z-40 group-hover:w-full md:group-hover:w-[544px] transition-all ease-in duration-200"
      >
        {/* rotated Text (visible in the closed state) */}
        <div className="transform rotate-90 flex flex-col align-middle justify-center h-screen group-hover:hidden group-hover:opacity-0">
          <ul className="text-white flex align-middle gap-12 text-sm opactiy-100 transition-all duration-300 w-screen">
            <li>
              <div className="size-5 bg-yellow-300 rounded-full animate-pulser"></div>
            </li>
            <li>Freelance - &apos;18 - NOW</li>
            <li>Dept Agency - &apos;17-&apos;18</li>
            <li>Hoppinger - &apos;10-&apos;17</li>
          </ul>
        </div>
        {/* sidebar Content (optional, for expanded state) */}
        <div className="fixed top-0 text-off-white px-10 py-10 md:py-14">
          <div className="pl-30 opacity-0 group-hover:opacity-100 min-w-[400px] transition-opacity delay-50 ease-in border-l-10 border-white">
            <h1 className="text-3xl md:text-4xl font-bold">Paul Huisman</h1>
            <div className="logo-bar h-3 w-22 bg-yellow-300 mt-2"></div>
          </div>
          <div className="pl-32 mt-14 opacity-0 group-hover:opacity-100 min-w-[400px] transition-opacity ease-in delay-50">
            <h2 className="text-xs tracking-wider uppercase mb-14">
              curriculum vitae
            </h2>
            <ul className="mr-6">
              <li className="mb-10">
                <h3 className="uppercase text-base font-montserrat">
                  Freelance Frontend Engineer
                </h3>
                <div className="text-xs mb-2 italic">2019 - NOW</div>
                <p className="text-gray-400 text-sm italic font-inter">
                  Building beautiful frontend applications where the user feels
                  king.
                </p>
              </li>
              <li className="mb-10">
                <h3 className="uppercase text-base font-montserrat">
                  Senior PHP Developer at Dept Agency
                </h3>
                <div className="text-xs mb-2 italic">2017 - 2018</div>
                <p className="text-gray-400 text-sm italic font-inter">
                  Developing web applications for a whole range of clients, from
                  small to large. Leading team of developers and working closely
                  together with creatives.
                </p>
              </li>
              <li className="mb-8">
                <h3 className="uppercase text-base font-montserrat">
                  Lead Developer at Hoppinger
                </h3>
                <div className="text-xs mb-2 italic">2014 - 2017</div>
                <p className="text-gray-400 text-sm italic font-inter">
                  As a lead developer I was responsible for the final technical
                  product. Leading the developers in my team and working closely
                  together with the internal project manager and the product
                  owner (client) to get the best result possible.
                </p>
              </li>
              <li className="mb-8">
                <h3 className="uppercase text-base font-montserrat">
                  Full Stack Developer at Hoppinger
                </h3>
                <div className="text-xs mb-2 italic">2011 - 2014</div>
                <p className="text-gray-400 text-sm italic font-inter">
                  Starting off as a young web developer after my graduation,
                  first as a front-end developer, later focussing on backend.
                </p>
              </li>
              <li className="mb-8">
                <h3 className="uppercase text-base font-montserrat">
                  Front-end Developer at Campagne Rotterdam
                </h3>
                <div className="text-xs mb-2 italic">2009 - 2010</div>
                <p className="text-gray-400 text-sm italic font-inter">
                  Part-time working as a front-end developer.
                </p>
              </li>
              <li className="mb-0">
                <h3 className="uppercase text-base font-montserrat">
                  BACHELOR OF INFORMATION AND COMMUNICATION TECHNOLOG
                </h3>
                <div className="text-xs mb-2 italic">2005 - 2010</div>
                <p className="text-gray-400 text-sm italic font-inter">
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
