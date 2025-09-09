'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 0,
      title: 'MSTR Advisor',
      description: 'Automated MSTR advisor with daily data, live preview, and backtests.',
      image: '/images/demoscreenshot.png',
      tags: ['typescript', 'python', 'finance'],
      github: 'https://github.com/oliveripkanam/mstr-advisor',
      demo: 'https://oliveripkanam.github.io/mstr-advisor/',
      featured: true,
    },
    {
      id: 1,
      title: 'Modern Solitaire',
      description: 'A clean, modern web-based solitaire game. Made in 2 days.',
      image: '/images/solitare.png',
      tags: ['javascript', 'game', 'web'],
      github: 'https://github.com/oliveripkanam/modern-solitare',
      demo: null,
      featured: true,
    },
    {
      id: 2,
      title: 'WiFi Fixer',
      description: 'A simple yet efficient WiFi diagnostics tool.',
      image: '/images/wifi.gif',
      tags: ['javascript', 'utility'],
      github: 'https://github.com/oliveripkanam/wifi-fixer',
      demo: null,
      featured: true,
    },
    {
      id: 3,
      title: 'Online Whiteboard',
      description: 'A whiteboard for tutoring lessons.',
      image: '/images/whiteboard.png',
      tags: ['javascript', 'education', 'web'],
      github: 'https://github.com/oliveripkanam/onlinewhiteboard',
      demo: null,
      featured: true,
    },
    {
      id: 4,
      title: 'Wall Stonks',
      description: 'Track investment portfolio when away from keyboard.',
      image: '/images/wallstonks.png',
      tags: ['python', 'finance'],
      github: 'https://github.com/oliveripkanam/wallstonks',
      demo: null,
      featured: true,
    },
    {
      id: 5,
      title: 'Hippo RC',
      description: 'A cool RC car project.',
      image: '/images/hipporc.enc',
      tags: ['hardware', 'iot'],
      github: 'https://github.com/oliveripkanam/hippo-rc',
      demo: null,
      featured: true,
    },
    {
      id: 6,
      title: 'Health & Money Tracker',
      description: 'A complex health and money tracker android app developed with Android Studio using Scrum methodology.',
      image: '/images/mytracker.png',
      tags: ['java', 'mobile', 'android'],
      github: null,
      demo: null,
      featured: false,
    },
    {
      id: 7,
      title: 'Lemme Cafe',
      description: 'Website for university pop-up cafe with full-stack point-of-sale and kitchen management system using Next.js, TypeScript, React, and Supabase.',
      image: '/images/lemme.png',
      tags: ['javascript', 'web', 'typescript'],
      github: 'https://github.com/oliveripkanam/lemme',
      demo: null,
      featured: true,
    },
    {
      id: 8,
      title: 'Claw Machine',
      description: 'A basic yet fun-to-use claw machine with Arduino microcontrollers and 3D printed parts.',
      image: '/images/clawmachine.webp',
      tags: ['hardware', 'arduino', '3d-printing'],
      github: null,
      demo: null,
      featured: false,
    },
  ];

  // Featured projects to display
  const featuredProjects = [
    projects.find(p => p.title === 'MSTR Advisor'),
    projects.find(p => p.title === 'Lemme Cafe'),
    projects.find(p => p.title === 'WiFi Fixer'),
    projects.find(p => p.title === 'Modern Solitaire'),
  ].filter((project): project is NonNullable<typeof project> => project !== undefined);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            My Projects
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A selection of my most impactful academic and personal projects.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {featuredProjects.map((project, idx) => (
            <motion.a
              key={project.id}
              href={project.github || '#'}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="block bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer hover-lift border border-gray-700 hover:border-blue-500"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 md:h-full bg-gray-700 relative">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                </div>

                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <FaGithub className="mr-2" size={18} />
                    <span className="font-medium">View on GitHub</span>
                    <FaExternalLinkAlt className="ml-2" size={14} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/oliveripkanam"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-md bg-gray-800 dark:bg-gray-700 text-white font-medium hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300"
          >
            <FaGithub className="mr-2" />
            <span>View More on GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 