'use client';

import { motion } from 'motion/react';
import { AnimatedText } from '../AnimatedText';
import Container from '../Container';

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.1,
      staggerChildren: 0.1,
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
    <Container className="xl:pr-3">
      <div className="flex flex-col gap-10 md:flex-row">
        <div className="mb-8 w-full md:mb-0 md:w-1/2">
          <AnimatedText
            once
            text="Senior web developer with code & people skills."
            el="h2"
            staggerChildren={0.05}
            className="font-montserrat -mt-10 mb-4 block translate-y-3 text-4xl font-bold md:text-6xl lg:text-7xl xl:text-8xl"
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
        <div className="w-full md:mr-[3px] md:ml-auto md:w-1/3 xl:max-w-[462px]">
          <motion.div
            className="translate-x-0 bg-yellow-300 p-8 xl:mt-0.5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeIn', duration: 0.3, delay: 1 }}
          >
            <h4 className="mb-4 text-base font-bold">
              EXPERIENCE{' '}
              <span className="inline-block pl-1 text-xs font-normal italic">
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
                'Ruby on Rails',
                'TypeScript',
                'Test-driven development',
                'Vue.js',
                'API design',
                'Tailwind',
                'Terraform',
                'Animation / motion',
                '',
                'Design systems / tokens',
              ].map((tech) => (
                <motion.li key={tech} variants={itemVariants}>
                  {tech}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
          <motion.div
            className="logo-bar bg-black"
            initial={{ height: 0 }}
            animate={{ height: '20px' }}
            transition={{ ease: 'easeIn', duration: 0.3, delay: 1 }}
          ></motion.div>
        </div>
      </div>
    </Container>
  );
};

export default SubHeader;
