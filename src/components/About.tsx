'use client';

import { motion, useInView } from 'motion/react';
import { AnimatedText } from './AnimatedText';
import { useRef } from 'react';

interface AboutProps {
  content?: string;
  image?: string;
}

const About = ({ content, image }: AboutProps) => {
  console.log('🚀 ~ About ~ content:', content);
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true });

  return (
    <motion.section
      className="container mx-auto px-8 md:px-12 py-10 md:py-16 opacity-0 translate-y-4"
      ref={sectionRef} // Attach the ref to the section element
      initial={{ opacity: 0, y: 20 }} // Initial state (invisible and offset)
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }} // When in view, fade in
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }} // Fade-in animation duration and easing
    >
      <h2 className="text-4xl font-bold mb-8 font-montserrat">About</h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-7/12 mb-8 md:mb-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content && (
              <div
                dangerouslySetInnerHTML={{ __html: content }}
                className="prose"
              />
            )}
          </div>
        </div>
        <div className="w-full md:w-4/12 md:ml-auto">
          {image && (
            <img
              src={image}
              alt="Paul Huisman"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
