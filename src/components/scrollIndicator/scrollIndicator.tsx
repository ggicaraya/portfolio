'use client';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
      </svg>
    </motion.div>
  );
}

export default ScrollIndicator