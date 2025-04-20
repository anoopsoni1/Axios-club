import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <>
      <div className="space-y-24">
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-900 dark:to-gray-800 px-4"
        >
       
          <motion.h1
            className="text-5xl font-extrabold mb-4 text-blue-700 dark:text-white"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Welcome to Axios Club
          </motion.h1>

          <motion.p
            className="text-lg max-w-xl text-gray-700 dark:text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            The Official Development Club of IIIT Bhopal — where innovation meets code.
          </motion.p>

       
          <motion.a
            href="#join"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
          >
            Join the Club
          </motion.a>
        </section>
      </div>
    </>
  );
}

export default Home;
