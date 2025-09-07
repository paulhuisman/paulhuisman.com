'use client';

import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';
import { motion } from 'motion/react';

type Project = {
  data: {
    title: string;
    role: string;
    period: string;
    description: string;
    url: string;
    order: number;
    images: string[];
  };
};

const Projects = ({ projects }: { projects: Project[] }) => {
  const sortedProjects = [...projects].sort(
    (a, b) => a.data.order - b.data.order,
  );

  return (
    <Container
      className="mt-20 lg:mt-48 lg:pr-0"
      margin="0px 0px -280px 0px"
      revealOnScroll
    >
      <h2 className="font-montserrat mb-10 text-4xl font-bold xl:text-5xl">
        Projects
      </h2>
      <motion.div
        className="grid grid-cols-1 items-stretch gap-8 gap-y-10 md:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.35,
            },
          },
        }}
      >
        {sortedProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <ProjectCard
              key={index}
              title={project.data.title}
              role={project.data.role}
              period={project.data.period}
              description={project.data.description}
              url={project.data.url}
              images={project.data.images}
            />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
};

export default Projects;
