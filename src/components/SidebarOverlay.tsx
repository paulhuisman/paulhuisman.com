import { useEffect, useRef } from 'react';
import { animate } from 'motion';

const SidebarOverlay = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarRef.current) {
      animate(
        sidebarRef.current,
        { translate: '0' },
        { ease: 'anticipate', duration: 0.3, delay: 0.3 },
      );
    }
  }, []);

  return (
    <div className="relative group cursor-pointer " data-sidebar-overlay>
      <div className="fixed w-screen h-screen bg-black opacity-0 z-20 group-hover:opacity-60 transition-all duration-300 pointer-events-none"></div>
      {/* sidebar */}
      <div
        ref={sidebarRef}
        data-sidebar
        className="absolute z-10 top-0 left-0 bg-gray-900 w-12 md:w-16  h-screen group-hover:z-40 group-hover:w-full md:group-hover:w-[468px] transition-all ease-in duration-200"
      >
        {/* rotated Text (visible in the closed state) */}
        <div className="transform rotate-90 flex flex-col mt-64 group-hover:hidden group-hover:opacity-0">
          <ul className="text-white flex align-middle gap-12 text-sm opactiy-100 transition-all duration-300 w-screen">
            <li>
              <div className="size-5 bg-yellow-500 rounded-full animate-pulse"></div>
            </li>
            <li>Freelance - &apos;18 - NOW</li>
            <li>Dept Agency - &apos;17-&apos;18</li>
            <li>Hoppinger - &apos;10-&apos;17</li>
          </ul>
        </div>
        {/* sidebar Content (optional, for expanded state) */}
        <div className="transition-opacity fixed top-0 text-white px-10 py-10 md:py-14">
          <div
            className=" pl-32 opacity-0 group-hover:opacity-100 delay-100 border-l-10 border-white"
            // style={{
            //   opacity: 0,
            //   transform: 'translateY(-20px)',
            //   animation: 'fadeIn 0.3s ease-in 0.5s forwards',
            // }}
          >
            <h1 className="text-3xl md:text-4xl text-white font-bold">
              Paul Huisman
            </h1>
            <div className="logo-bar h-3 w-22 bg-yellow-300 mt-2"></div>
          </div>
          <div className="mt-12 opacity-0 group-hover:opacity-100 delay-50">
            <h2 className="text-3xl mb-4">curriculum vitae</h2>
            <ul>
              <li className="mb-4">Home</li>
              <li className="mb-4">About</li>
              <li className="mb-4">Services</li>
              <li className="mb-4">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarOverlay;
