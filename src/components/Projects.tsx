'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Image from 'next/image';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
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
      title: 'Claw Machine',
      description: 'A basic yet fun-to-use claw machine with Arduino microcontrollers and 3D printed parts.',
      image: '/images/clawmachine.webp',
      tags: ['hardware', 'arduino', '3d-printing'],
      github: null,
      demo: null,
      featured: false,
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'python', name: 'Python' },
    { id: 'hardware', name: 'Hardware' },
  ];

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my academic and personal projects.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                filter === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
                {project.featured && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-2 py-1">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <FaGithub className="mr-2" />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <FaExternalLinkAlt className="mr-2" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
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