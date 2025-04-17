'use client';

import { motion, useInView } from 'motion/react';
import { AnimatedText } from '../AnimatedText';
import { useRef } from 'react';
import Container from '../Container';

interface AboutProps {
  content?: string;
  image?: string;
}

const About = ({ content, image }: AboutProps) => {
  const sectionRef = useRef(null);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: '0px 0px -300px 0px',
  });

  return (
    <Container revealOnScroll margin="0px 0px -300px 0px">
      <h2 className="font-montserrat mb-8 text-4xl font-bold">About</h2>
      <div className="flex flex-col md:flex-row">
        <div className="mb-8 w-full md:mb-0 md:w-7/12">
          <div className="grid grid-cols-1 gap-10 text-gray-900 md:mr-40 md:grid-cols-2">
            <div className="leading-relaxed">
              I've been working in web development since 2008, and I have a real
              passion for writing clean code and collaborating with others. One
              of my key strengths is taking a client's vision and turning it
              into a realistic plan for the development team to follow. I find
              it deeply rewarding to help clients understand the development
              process and work together to create products that are truly
              user-centered.
            </div>
            <div className="leading-relaxed">
              When I first started out, I focused primarily on front-end
              development. While I enjoyed it, I craved a new challenge, so I
              switched over to back-end development. After several years, I
              found myself returning to front-end development because of the
              wide variety of exciting frameworks and the headless stack
              principle. Nowadays, I work on all sorts of projects with
              different stacks, and I'm always eager to learn a new language or
              framework if it means delivering the best possible results for my
              clients.
            </div>
          </div>
        </div>
        <div className="top-0 right-0 w-full md:absolute md:max-w-[400px]">
          {image && (
            <img src={image} alt="Paul Huisman" className="h-auto w-full" />
          )}
        </div>
      </div>
    </Container>
  );
};

export default About;
