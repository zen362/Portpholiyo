import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const roles = ["React.js Developer", "Frontend Ninja", "Django Developer", "React.js Specialist", "Tech Enthusiast", "Problem Solver"];
  
  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('https://media.giphy.com/media/3og0IyyB6uF9EgduKc/giphy.gif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.3
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
          >
            Hi, I'm <motion.span 
              className="text-blue-600 dark:text-blue-400"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >Shiv Jani</motion.span>
          </motion.h1>
          
          <motion.div
            className="h-8 mb-6 text-xl md:text-2xl text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <AnimatedText phrases={roles} />
          </motion.div>
          
          <motion.p 
            className="max-w-2xl text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7, type: "spring" }}
          >
            I build exceptional digital experiences with modern technologies, 
            focusing on creating intuitive and performant applications.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <motion.a 
              href="#contact" 
              className="px-6 py-3 bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me <ArrowRight size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AnimatedText: React.FC<{ phrases: string[] }> = ({ phrases }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className="relative h-full">
      {phrases.map((phrase, index) => (
        <motion.span
          key={phrase}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ 
            opacity: index === currentIndex ? 1 : 0,
            y: index === currentIndex ? 0 : 40
          }}
          transition={{ 
            duration: 0.7,
            type: "spring",
            stiffness: 100
          }}
        >
          {phrase}
        </motion.span>
      ))}
    </div>
  );
};

export default Hero;