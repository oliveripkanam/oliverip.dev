'use client';

import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Web Development',
      icon: <FaLaptopCode className="text-blue-600 w-6 h-6" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Tailwind']
    },
    {
      title: 'Backend & Systems',
      icon: <FaServer className="text-blue-600 w-6 h-6" />,
      skills: ['Java', 'PHP', 'C#', 'Go']
    },
    {
      title: 'Core & Data Engineering',
      icon: <FaCode className="text-blue-600 w-6 h-6" />,
      skills: ['C', 'C++', 'Python', 'SQL']
    },
    {
      title: 'Tools & Frameworks',
      icon: <FaTools className="text-blue-600 w-6 h-6" />,
      skills: ['React', 'Node.js', 'Vue.js', 'NestJS']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Technical Stack
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Programming languages and technologies I've worked with throughout my projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="mr-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="flex items-center"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 