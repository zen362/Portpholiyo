import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce website built with React and Node.js. Features include product catalog, shopping cart functionality, secure payment integration via Stripe, user authentication, and responsive design for optimal viewing across all devices. Implements real-time inventory management and order tracking.",
    image: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExd2VwenU3aGt0dm03cGdiczdoaWdzcTBoNmMwNXBkaTJzOWtuZTA2bSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9dg/efgrmXvazKPY8BcwZC/giphy.gif",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Stripe", "Chart.js"],
    githubUrl: "https://github.com/Jani-shiv/E-commers-React.js-",
    liveUrl: "https://e-commers-react-ait0ha1xd-janis-projects-6734836e.vercel.app/"
  },
  {
    id: 2,
    title: "MyCycle Care - Women's Health Tracker",
    description: "A comprehensive women's health tracking application built with TypeScript and React. Features include personalized cycle tracking, mood journaling, symptom monitoring, and an AI-powered health assistant. Implements secure data storage and provides detailed analytics for better health insights.",
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDVyNXQycWVwamZycGdyOXhnNWZ6bmxrdmdlMHhzNXZlMHVucGt1ayZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/wa0YVWljRtekMUfke6/giphy.gif",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "AI Integration"],
    githubUrl: "https://github.com/Jani-shiv/MyCycleCare",
    liveUrl: "https://my-cycle-care-gn52sk2y9-janis-projects-6734836e.vercel.app/"
  },
  {
    id: 3,
    title: "Real-time Task Management Platform",
    description: "A sophisticated task management system featuring real-time collaboration capabilities. Includes team assignment, progress tracking, deadline management, and instant notifications. Built with React and Socket.io for real-time updates, enhanced with Framer Motion for smooth animations.",
    image: "https://media.giphy.com/media/eNAsjO55tPbgaor7ma/giphy.gif",
    technologies: ["React", "Tailwind CSS", "Node.js", "Socket.io", "Framer Motion", "MongoDB", "Express"],
    githubUrl: "https://github.com/Jani-shiv/10-Day-React---Journey",
    liveUrl: "#"
  },
  {
    id: 4,
    title: "Django Task Management System",
    description: "A comprehensive Django-based task management system demonstrating fundamental CRUD operations. Features include user authentication, task categorization, priority setting, and deadline management. Implements Django's built-in admin interface and form handling with proper validation.",
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXRtcnNudDN6bjc4aTVsM3JoMnFzeHR6czN0ZXF5cTV2YzIwdmxpayZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/LMt9638dO8dftAjtco/giphy.gif",
    technologies: ["Django", "Python", "HTML", "CSS", "SQLite", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/Jani-shiv/Django-Beginning-Task",
    liveUrl: "#"
  }
];

const allTechnologies = ["All", ...Array.from(new Set(projectsData.flatMap(project => project.technologies)))];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const filteredProjects = filter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.technologies.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.8,
      rotateX: -15
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8
      }
    },
    hover: {
      scale: 1.03,
      y: -8,
      boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.15,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.1,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.2)",
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    },
    tap: {
      scale: 0.9,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    }
  };

  const techBadgeVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
        delay: 0.1
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative min-h-screen">
      
      <div className="absolute inset-0 bg-black/50 z-1">
      
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            My Projects
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-200 leading-relaxed">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {allTechnologies.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setFilter(tech)}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                filter === tech 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
                  : 'bg-gray-800/50 text-gray-200 hover:bg-gray-700/50'
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="bg-gray-900/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg transition-all"
                layout
              >
                <motion.div 
                  className="h-56 overflow-hidden relative"
                  variants={imageVariants}
                >
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
                <div className="p-8">
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-3"
                    animate={{
                      scale: hoveredProject === project.id ? 1.05 : 1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <motion.span 
                        key={`${project.id}-${tech}`}
                        variants={techBadgeVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        className="text-xs px-3 py-1.5 bg-blue-900/50 text-blue-200 rounded-full font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <motion.a
                      href={project.githubUrl}
                      className="text-gray-300 hover:text-blue-400 flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} /> Code
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      className="text-gray-300 hover:text-blue-400 flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.05, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.a 
            href="https://github.com/Jani-shiv"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            See More Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
export default Projects;