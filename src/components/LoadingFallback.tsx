import React from 'react';
import { motion } from 'framer-motion';

const LoadingFallback: React.FC = () => {
  return (
    <div className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default LoadingFallback;
