import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold tracking-wide text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg text-emerald-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Interested in working together or just want to say hi? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            className="w-full md:w-3/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-zinc-900 via-purple-900 to-zinc-900 p-6 md:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-purple-700">
              <img
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGkzYnh2Z3UzZTQwbGFlcnlsMnQzMHYxbXNydWhhM3I1YzU2OXc5aSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/3iyKHMIKg5VWG6qHUm/giphy.gif"
                alt="Animated contact gif"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-2/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-br from-zinc-900 via-indigo-900 to-zinc-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-indigo-700 h-full">
              <motion.h3
                className="text-2xl font-semibold text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6"
                whileHover={{ scale: 1.05 }}
              >
                Contact Info
              </motion.h3>

              <div className="space-y-6">
                <motion.div whileHover={{ scale: 1.02 }}>
                  <h4 className="text-lg font-medium text-cyan-300 mb-1">Email</h4>
                  <a
                    href="mailto:shivjani2005@gmail.com"
                    className="text-blue-400 hover:text-pink-400 flex items-center transition-colors"
                  >
                    <Mail size={18} className="mr-2" />
                    shivjani2005@gmail.com
                  </a>
                </motion.div>

                <div>
                  <h4 className="text-lg font-medium text-cyan-300 mb-4">Social Links</h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        href: 'https://github.com/jani-shiv',
                        icon: <Github size={24} />,
                        label: 'GitHub',
                      },
                      {
                        href: 'https://www.linkedin.com/in/shiv-jani/',
                        icon: <Linkedin size={24} />,
                        label: 'LinkedIn',
                      },
                      {
                        href: 'https://instagram.com/jani._.712',
                        icon: <Instagram size={24} />,
                        label: 'Instagram',
                      },
                    ].map(({ href, icon, label }, index) => (
                      <motion.a
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{
                          type: 'spring',
                          stiffness: 300,
                          damping: 15,
                        }}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="p-3 bg-gradient-to-r from-purple-800 to-indigo-800 text-white hover:text-pink-400 rounded-full transition-colors"
                        aria-label={label}
                      >
                        {icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <motion.div
                  className="pt-4 border-t border-indigo-700"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-gradient bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Open for freelance and full-time roles. Let's build something awesome together!
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;