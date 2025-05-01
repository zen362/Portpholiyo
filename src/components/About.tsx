import React from 'react';
import { motion } from 'framer-motion';
import { Code, Lightbulb, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const hoverScale = {
    scale: 1.05,
    rotate: [0, 2, -2, 0],
    transition: { duration: 0.6, type: "spring", stiffness: 250 },
  };

  return (
    <motion.section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-900 to-black dark:from-gray-900 dark:to-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Section */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -100, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <motion.div 
              className="relative group"
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-lg group-hover:blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  borderRadius: ["20%", "50%", "20%"]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <img 
                src="https://avatars.githubusercontent.com/u/153932136?v=4" 
                alt="Profile"
                className="relative w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:shadow-blue-500/50"
              />
            </motion.div>
          </motion.div>

          {/* Text & Skills Section */}
          <motion.div className="w-full lg:w-2/3" variants={itemVariants}>
            <motion.h2
              className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-blue-500 to-violet-500 dark:from-white dark:via-cyan-400 dark:to-fuchsia-400 bg-clip-text text-transparent mb-6 tracking-tight"
              whileHover={{ scale: 1.02 }}            >
              About Me
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
              variants={itemVariants}
              whileHover={{ x: 8 }}
            >
              
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-4 rounded-lg"
              variants={itemVariants}              whileHover={{ x: 8 }}
            >
              From innovative interfaces to responsive layouts, I’m always experimenting, learning, and building. Off-screen, you’ll find me hiking, reading tech blogs, or cooking something spicy.
            </motion.p>

            {/* Skill Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
              variants={containerVariants}
            >
              {[
                {
                  icon: <Code size={30} />,
                  title: "Clean Code",
                  description: "Readable, scalable, and maintainable code with best practices."
                },
                {
                  icon: <Lightbulb size={30} />,
                  title: "Innovation",
                  description: "Exploring creative and future-ready tech solutions."
                },
                {
                  icon: <TrendingUp size={30} />,
                  title: "Growth",
                  description: "Always learning, always evolving as a developer."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-white/80 via-blue-50/80 to-purple-50/80 dark:from-gray-800/60 dark:via-blue-900/30 dark:to-purple-900/30 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-blue-400/40 transition-all duration-500 border border-transparent hover:border-blue-300/50"
                  variants={itemVariants}
                  whileHover={hoverScale}
                >
                  <motion.div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full p-2 mb-4 inline-block"
                    whileHover={{ rotateY: 180, scale: 1.1 }}
                    style={{ perspective: 1000 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 dark:from-blue-300 dark:to-purple-300 bg-clip-text text-transparent mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Focus Box */}
            <motion.div
              className="bg-gradient-to-r from-blue-100 via-purple-100 to-blue-100 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-blue-900/20 p-6 rounded-2xl border-l-4 border-blue-600 shadow-xl transition-transform"
              whileHover={{ scale: 1.03, x: 6 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Currently Focusing On:</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Mastering advanced React.js patterns, TypeScript, and Next.js for SEO-ready, high-performance apps.
              </p>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
