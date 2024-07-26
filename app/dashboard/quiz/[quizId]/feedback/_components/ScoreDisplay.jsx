import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // For animations
import { Trophy, Star, Sparkles } from 'lucide-react'; // Correct icons
import Confetti from 'react-confetti'; // Ensure this is installed

const ScoreDisplay = ({ score }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (score >= 50) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 7000); // Hide confetti after 7 seconds
      return () => clearTimeout(timer);
    }
  }, [score]);

  return (
    <motion.div
      className='relative bg-gradient-to-br from-purple-100 via-pink-100 to-red-100 p-10 rounded-xl shadow-2xl text-center overflow-hidden'
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring', damping: 10 }}
    >
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
          recycle={false}
        />
      )}
      <motion.div
        className='absolute top-0 right-0 p-4'
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Trophy className={`h-14 w-14 ${score >= 50 ? 'text-yellow-500' : 'text-yellow-700'}`} />
      </motion.div>
      <div className='relative z-10'>
        <h2 className='text-6xl font-extrabold mb-4'>
          {score >= 50 ? (
            <span className='bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text'>
              Congratulations!
            </span>
          ) : (
            <span className='bg-gradient-to-r from-red-400 to-yellow-500 text-transparent bg-clip-text'>
              Try Again!
            </span>
          )}
        </h2>
        <p className='text-4xl font-bold mb-2'>
          Your Score: <span className='font-extrabold text-gray-900'>{score.toFixed(2)}%</span>
        </p>
        <p className='mt-2 text-base text-gray-800'>
          {score >= 50
            ? 'Fantastic job! Keep up the great work and review the feedback below to continue improving.'
            : 'Don’t be discouraged! Review the feedback below to see where you can improve and try again.'}
        </p>
      </div>
      <div className='absolute bottom-0 left-0 w-full flex justify-center items-center'>
        <Star className='h-12 w-12 text-yellow-500 opacity-70 animate-pulse' />
      </div>
      <motion.div
        className='absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-blue-400 opacity-20'
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
      />
      <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
        <Sparkles className='h-24 w-24 text-yellow-300 opacity-80 animate-pulse' />
      </div>
    </motion.div>
  );
};

export default ScoreDisplay;
