import { motion } from 'framer-motion';

const Tile = () => {
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        backgroundColor: '#7c3aed',
      }}
      transition={{
        duration: 5,
        ease: 'easeOut',
      }}
      className="aspect-square bg-red-300 border-red-300"
    />
  );
};
export default Tile;
