'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Oliver Ip</h3>
            <p className="text-gray-400 mb-4">
              Computer Science Student at the University of Bath
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/oliveripkanam" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/oliverip/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="mailto:ikn.oliver@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors duration-300"
                aria-label="Email Contact"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#experience" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-gray-400 mb-2">
              Term Time: Bath, United Kingdom
            </p>
            <p className="text-gray-400">
              Home: Hong Kong
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>
            &copy; {currentYear} Oliver Ip. All rights reserved.
          </p>
          <p className="mt-2 text-sm">
            Built with Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 