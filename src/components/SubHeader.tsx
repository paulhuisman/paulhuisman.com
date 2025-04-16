'use client';

import { motion } from 'motion/react';
import { AnimatedText } from './AnimatedText';

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const SubHeader = () => {
  return (
    <section className="container mx-auto px-8 md:px-12 py-10 md:py-16">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <AnimatedText
            once
            text="Senior web developer with code & people skills."
            el="h2"
            staggerChildren={0.05}
            className="text-3xl font-montserrat md:text-8xl font-bold mb-4 translate-y-3 block -mt-10"
            animation={{
              hidden: {
                opacity: 0,
                y: 10,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.05,
                },
              },
            }}
          />
        </div>
        <div className="w-full md:w-1/3 md:ml-auto md:mr-[2px] md:max-w-[460px]">
          <motion.div
            className="experience-block bg-yellow-300 border-b-[20px] border-black p-8 translate-x-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeIn', duration: 0.3, delay: 0.6 }}
          >
            <h4 className="text-base font-bold mb-4">
              EXPERIENCE{' '}
              <span className="text-xs italic pl-1 font-normal inline-block">
                (15+ years)
              </span>
            </h4>

            <motion.ul
              className="grid grid-cols-2 gap-2 text-sm"
              initial="hidden"
              animate="visible"
              variants={listVariants}
            >
              {[
                'React',
                'PHP',
                'Next.js',
                'Test-driven development',
                'TypeScript',
                'Rails',
                'Tailwind',
                'RESTful API design',
                'Design systems/tokens',
              ].map((tech) => (
                <motion.li key={tech} variants={itemVariants}>
                  {tech}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubHeader;
