'use client';

import { motion, useInView } from 'motion/react';
import { AnimatedText } from '../AnimatedText';
import { useRef } from 'react';
import Container from '../Container';

const About = () => {
  const elementRef = useRef(null);
  const margin = '0px 0px -300px 0px';
  const isInView = useInView(elementRef, {
    once: true,
    margin,
  });

  return (
    <Container revealOnScroll margin={margin}>
      <motion.h2
        className="font-montserrat mb-8 text-4xl font-bold xl:text-5xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        About
      </motion.h2>
      <div className="relative flex flex-col md:flex-row" ref={elementRef}>
        <div className="mb-8 w-full md:mb-0 md:w-7/12">
          <div className="grid grid-cols-1 gap-y-8 text-gray-900 md:mr-32 md:gap-12 lg:grid-cols-2 lg:gap-y-0">
            <motion.div
              className="leading-relaxed md:mr-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              I've been working in web development since 2008, and I have a real
              passion for writing clean code and collaborating with others. One
              of my key strengths is taking a client's vision and turning it
              into a realistic plan for the development team to follow. I find
              it deeply rewarding to help clients understand the development
              process and work together to create products that are truly
              user-centered.
            </motion.div>
            <motion.div
              className="leading-relaxed md:mr-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              When I first started out, I focused primarily on front-end
              development. While I enjoyed it, I craved a new challenge, so I
              switched over to back-end development. After several years, I
              found myself returning to front-end development because of the
              wide variety of exciting frameworks and the headless stack
              principle. Nowadays, I work on all sorts of projects with
              different stacks, and I'm always eager to learn a new language or
              framework if it means delivering the best possible results for my
              clients.
            </motion.div>
          </div>
        </div>
        <motion.div
          className="top-0 right-0 w-full md:absolute md:max-w-[400px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
        >
          <img
            src="/assets/paul2.jpg"
            alt="Paul Huisman"
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </Container>
  );
};

export default About;
