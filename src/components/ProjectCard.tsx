'use client';

import { useState } from 'react';
import Lightbox from './Lightbox'; // Import Lightbox component
import { CubeIcon, PhotoIcon } from '@heroicons/react/24/solid';

type ProjectCardProps = {
  title: string;
  role: string;
  period: string;
  description: string;
  url?: string;
  images?: string[];
};

const ProjectCard = ({
  title,
  role,
  period,
  description,
  url,
  images = [],
}: ProjectCardProps) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Function to close the lightbox
  const closeLightbox = () => setLightboxIndex(null);

  // Function to show the lightbox with a specific image index
  const showLightbox = (index: number) => setLightboxIndex(index);

  return (
    <div className="relative flex h-full flex-col gap-4 rounded-lg bg-white p-5 shadow-xs transition-all ease-in lg:flex-row lg:gap-8 lg:p-10">
      <div className="mt-2 hidden h-5 w-20 flex-shrink-0 bg-black"></div>
      <div className="text-gray-900">
        <h3 className="font-montserrat mb-2 text-3xl font-bold lg:text-4xl">
          {title}
        </h3>

        <h4 className="mb-4 text-sm text-gray-500">
          {role} | {period}
        </h4>

        <p className="mb-5">{description}</p>

        {url ? (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-off-white mt-2 inline-block rounded-md bg-gray-900 px-2.5 py-1.5 text-sm font-bold transition-all ease-in hover:bg-gray-700"
          >
            View the work
          </a>
        ) : (
          <div className="mb-0 flex gap-6 text-sm">
            <div className="mt-2 flex items-center gap-1.5">
              <CubeIcon className="inline h-4 w-4 text-gray-400" />
              <span className="text-gray-400 italic">Internal application</span>
            </div>
            {images.length > 0 && (
              <div className="mt-2 flex items-center gap-1.5">
                <PhotoIcon className="inline h-4 w-4 text-gray-700" />
                <a
                  className="cursor-pointer hover:underline"
                  onClick={() => showLightbox(0)}
                >
                  Screenshots
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default ProjectCard;
