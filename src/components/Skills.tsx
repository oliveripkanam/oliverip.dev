'use client';

import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaServer, FaTools, FaPaintBrush, FaBrain } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiTailwindcss, SiGo, SiPhp, SiBlender, SiDavinciresolve } from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="text-blue-400 w-6 h-6" />,
      skills: [
        { name: 'Python', icon: <SiPython className="text-yellow-400" />, years: 4 },
        { name: 'Java', icon: <FaCode className="text-red-500" />, years: 4 },
        { name: 'C', icon: <FaCode className="text-gray-400" />, years: 4 },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" />, years: 2 },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" />, years: 2 },
        { name: 'Go', icon: <SiGo className="text-cyan-400" />, years: 2 },
      ]
    },
    {
      title: 'Web Development',
      icon: <FaLaptopCode className="text-green-400 w-6 h-6" />,
      skills: [
        { name: 'React', icon: <SiReact className="text-blue-400" />, years: 2 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, years: 2 },
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" />, years: 2 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" />, years: 2 },
        { name: 'Vue.js', icon: <FaLaptopCode className="text-green-500" />, years: 2 },
        { name: 'PHP', icon: <SiPhp className="text-purple-400" />, years: 1 },
      ]
    },
    {
      title: 'Design & Creative',
      icon: <FaPaintBrush className="text-purple-400 w-6 h-6" />,
      skills: [
        { name: 'Blender', icon: <SiBlender className="text-orange-500" />, years: 9 },
        { name: 'DaVinci Resolve', icon: <SiDavinciresolve className="text-red-400" />, years: 9 },
        { name: '3D Printing', icon: <FaTools className="text-gray-400" />, years: 9 },
        { name: 'UI/UX Design', icon: <FaPaintBrush className="text-pink-400" />, years: 4 },
      ]
    },
    {
      title: 'AI & Data Science',
      icon: <FaBrain className="text-pink-400 w-6 h-6" />,
      skills: [
        { name: 'Machine Learning', icon: <FaBrain className="text-purple-500" />, years: 4 },
        { name: 'Neural Networks', icon: <FaBrain className="text-blue-500" />, years: 4 },
        { name: 'Computer Vision', icon: <FaBrain className="text-green-500" />, years: 4 },
        { name: 'Data Analysis', icon: <FaBrain className="text-yellow-500" />, years: 4 },
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

              <div className="grid grid-cols-1 gap-4">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover-lift"
                  >
                    <div className="flex items-center">
                      <div className="mr-3 text-xl">
                        {skill.icon}
                      </div>
                      <span className="text-gray-800 dark:text-white font-medium">
                        {skill.name}
                      </span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      skill.years >= 9 ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' :
                      skill.years >= 4 ? 'bg-green-500 text-white' :
                      skill.years >= 2 ? 'bg-blue-500 text-white' :
                      'bg-purple-500 text-white'
                    }`}>
                      {skill.years} {skill.years === 1 ? 'year' : 'years'}
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