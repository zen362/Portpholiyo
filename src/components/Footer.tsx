import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-blue-400 mb-3">Shiv Jani</h3>
            <p className="text-gray-300 text-lg mb-4 md:mb-0">
              Creating exceptional digital experiences
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-6 md:mb-0">
            <a
              href="#"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg"
            >
              Home
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg"
            >
              Skills
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-lg"
            >
              Contact
            </a>
          </nav>

          <button
            onClick={scrollToTop}
            className="bg-black hover:bg-gray-900 p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} className="text-white" />
          </button>
        </div>

        <div className="border-t border-gray-900 mt-12 pt-8 text-center">
          <p className="text-gray-300 text-lg">
            &copy; {new Date().getFullYear()} Shiv Jani. All rights reserved.
          </p>
          <p className="mt-3 text-gray-400">
            Designed and built with <span className="text-red-500">❤️</span>
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://github.com/Jani-shiv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shiv-jani/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:shivjani2005@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;