// Lightbox.tsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

type LightboxProps = {
  images: string[];
  initialIndex: number;
  onClose: () => void;
};

const Lightbox = ({ images, initialIndex, onClose }: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Close the lightbox on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goToPreviousImage();
      if (e.key === 'ArrowRight') goToNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Handle button clicks
  const handlePreviousImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click event from propagating
    goToPreviousImage();
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent click event from propagating
    goToNextImage();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.img
          src={images[currentIndex]}
          alt={`Lightbox image ${currentIndex + 1}`}
          className="max-h-[90vh] max-w-[90vw] rounded shadow-lg"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        />

        <button
          onClick={handlePreviousImage}
          className="absolute top-1/2 left-4 -translate-y-1/2 transform"
        >
          <ArrowLongLeftIcon className="size-8 cursor-pointer text-white" />
        </button>

        <button
          onClick={handleNextImage}
          className="absolute top-1/2 right-4 -translate-y-1/2 transform"
        >
          <ArrowLongRightIcon className="size-8 cursor-pointer text-white" />
        </button>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:text-gray-300"
          aria-label="Close lightbox"
        >
          <XMarkIcon className="size-8 cursor-pointer text-white" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
