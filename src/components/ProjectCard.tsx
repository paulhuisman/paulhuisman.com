'use client';

import React from 'react';

type ProjectCardProps = {
  title: string;
  role: string;
  period: string;
  description: string;
  url?: string;
};

const ProjectCard = ({
  title,
  role,
  period,
  description,
  url,
}: ProjectCardProps) => {
  return (
    <div className="mb-8 flex gap-8">
      <div className="mt-2 block h-5 w-20 flex-shrink-0 bg-black"></div>
      <div className="text-gray-900 md:mr-32">
        <h3 className="font-montserrat mb-2 text-3xl font-bold">{title}</h3>
        <h4 className="mb-4 text-sm text-gray-600">
          {role} | {period}
        </h4>
        <p className="mb-5">{description}</p>
        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-off-white rounded-md bg-gray-900 px-4 py-2 text-sm font-bold transition-all ease-in hover:bg-gray-700"
          >
            View the work
          </a>
        ) : (
          <p className="text-sm text-gray-500 italic">Internal application</p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
