import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'tools' | 'soft';
  description: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 5, icon: '⚛️', category: 'frontend', description: 'Building modern, responsive web applications with React ecosystem' },
  { name: 'JavaScript', level: 4, icon: '𝗝𝗦', category: 'frontend', description: 'Creating interactive and dynamic web experiences' },
  { name: 'TypeScript', level: 4, icon: '𝗧𝗦', category: 'frontend', description: 'Developing type-safe and maintainable applications' },
  { name: 'HTML/CSS', level: 5, icon: '🌐', category: 'frontend', description: 'Crafting semantic markup and beautiful styling' },
  { name: 'Tailwind CSS', level: 5, icon: '🌊', category: 'frontend', description: 'Rapid UI development with utility-first approach' },
  
  // Backend
  { name: 'Node.js', level: 2, icon: '🟩', category: 'backend', description: 'Building scalable server-side applications' },
  { name: 'Express', level: 4, icon: '🚂', category: 'backend', description: 'Creating robust REST APIs and web servers' },
  { name: 'Django', level: 3, icon: '🐍', category: 'backend', description: 'Python-based web framework for rapid development' },
  { name: 'PostgreSQL', level: 3, icon: '🐘', category: 'backend', description: 'Managing relational databases efficiently' },
  
  // Tools
  { name: 'Git', level: 4, icon: '🔄', category: 'tools', description: 'Version control and collaboration' },
  { name: 'Figma', level: 2, icon: '🎨', category: 'tools', description: 'UI/UX design and prototyping' },
  { name: 'VS Code', level: 5, icon: '📝', category: 'tools', description: 'Advanced code editing and debugging' },
  
  // Soft Skills
  { name: 'Communication', level: 5, icon: '🗣️', category: 'soft', description: 'Clear and effective team communication' },
  { name: 'Problem Solving', level: 3, icon: '🧩', category: 'soft', description: 'Analytical thinking and creative solutions' },
  { name: 'Teamwork', level: 5, icon: '👥', category: 'soft', description: 'Collaborative work and team synergy' },
  { name: 'Time Management', level: 5, icon: '⏱️', category: 'soft', description: 'Efficient prioritization and organization' },
];

const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  return (
    <section id="skills" className="py-20 bg-black dark:bg-black overflow-hidden relative">

      <div 
        className="absolute inset-0 z-0 opacity-90"
        style={{
          backgroundImage: "url('https://media.giphy.com/media/xTiTnKWy93eMa6Mhl6/giphy.gif?cid=ecf05e47n8q417a63shdb1sqm0yfq1kmtkgphj5nj9l01dkx&ep=v1_gifs_related&rid=giphy.gif&ct=g')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white mb-4">My Skills</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-300 dark:text-gray-300">
            A combination of technical expertise and soft skills that I've developed over the years.
          </p>
        </motion.div>

        <div className="grid gap-12 relative">
          {/* Technical Skills Section */}
          <div className={`transition-all duration-300 ${selectedSkill ? 'blur-sm' : ''}`}>
            <h3 className="text-2xl font-bold text-white dark:text-white mb-8">Technical Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter(skill => skill.category !== 'soft')
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-gray-900 dark:bg-gray-900 rounded-xl shadow-xl transform-gpu cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    onClick={() => setSelectedSkill(skill)}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.1 * index,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <div className="p-6 relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg"
                          animate={{ 
                            y: [0, -8, 0],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <span className="text-2xl">{skill.icon}</span>
                        </motion.div>
                      </div>
                      <div className="mt-8">
                        <h4 className="text-xl font-bold text-white dark:text-white mb-2">{skill.name}</h4>
                        <p className="text-gray-300 dark:text-gray-300 text-sm mb-4">{skill.description}</p>
                        <div className="w-full bg-gray-800 dark:bg-gray-800 rounded-full h-3">
                          <motion.div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>

          {/* Soft Skills Section */}
          <div className={`transition-all duration-300 ${selectedSkill ? 'blur-sm' : ''}`}>
            <h3 className="text-2xl font-bold text-white dark:text-white mb-8">Soft Skills</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills
                .filter(skill => skill.category === 'soft')
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-gray-900 dark:bg-gray-900 rounded-xl shadow-xl transform-gpu cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
                    whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                    whileHover={{ scale: 1.05, rotateY: 10 }}
                    onClick={() => setSelectedSkill(skill)}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.1 * index,
                      type: "spring",
                      stiffness: 100
                    }}
                  >
                    <div className="p-6 relative">
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg"
                          animate={{ 
                            y: [0, -8, 0],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <span className="text-2xl">{skill.icon}</span>
                        </motion.div>
                      </div>
                      <div className="mt-8">
                        <h4 className="text-xl font-bold text-white dark:text-white mb-2">{skill.name}</h4>
                        <p className="text-gray-300 dark:text-gray-300 text-sm mb-4">{skill.description}</p>
                        <div className="w-full bg-gray-800 dark:bg-gray-800 rounded-full h-3">
                          <motion.div 
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(skill.level / 5) * 100}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </div>

        {/* Popup Card */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedSkill(null)}
            >
              <motion.div
                className="bg-gray-900 dark:bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full relative"
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                exit={{ y: 50 }}
                layoutId={selectedSkill.name}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg"
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <span className="text-3xl">{selectedSkill.icon}</span>
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white dark:text-white">{selectedSkill.name}</h3>
                </div>
                <p className="text-gray-300 dark:text-gray-300 text-lg mb-6">{selectedSkill.description}</p>
                <div className="w-full bg-gray-800 dark:bg-gray-800 rounded-full h-4">
                  <motion.div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(selectedSkill.level / 5) * 100}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <button
                  className="absolute top-4 right-4 text-gray-300 hover:text-gray-100 dark:text-gray-300 dark:hover:text-gray-100"
                  onClick={() => setSelectedSkill(null)}
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;  