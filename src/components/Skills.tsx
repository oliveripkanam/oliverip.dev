'use client';

import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaPaintBrush, FaBrain } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <FaCode className="text-blue-600 w-6 h-6" />,
      skills: [
        { name: 'Python', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C', level: 75 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 85 },
      ]
    },
    {
      title: 'Web Development',
      icon: <FaLaptopCode className="text-blue-600 w-6 h-6" />,
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'React', level: 80 },
        { name: 'Vue.js', level: 75 },
        { name: 'Node.js', level: 80 },
        { name: 'NestJS', level: 70 },
      ]
    },
    {
      title: 'Digital Design',
      icon: <FaPaintBrush className="text-blue-600 w-6 h-6" />,
      skills: [
        { name: 'Blender', level: 85 },
        { name: 'DaVinci Resolve', level: 80 },
        { name: 'Photoshop', level: 75 },
        { name: '3D Animation', level: 70 },
        { name: 'UI/UX Design', level: 75 },
      ]
    },
    {
      title: 'AI & Concepts',
      icon: <FaBrain className="text-blue-600 w-6 h-6" />,
      skills: [
        { name: 'Machine Learning', level: 75 },
        { name: 'Neural Networks', level: 70 },
        { name: 'Computer Vision', level: 65 },
        { name: 'NLP', level: 60 },
        { name: 'Bayesian Inference', level: 65 },
      ]
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
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the skills I've developed throughout my academic and personal projects.
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

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="bg-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
            Languages
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md w-48">
              <div className="mb-2">English</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Bilingual</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md w-48">
              <div className="mb-2">Cantonese</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Native</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md w-48">
              <div className="mb-2">Mandarin</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Fluent</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md w-48">
              <div className="mb-2">Japanese</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Basic</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 