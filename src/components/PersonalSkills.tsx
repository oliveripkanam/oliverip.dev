'use client';

import { motion } from 'framer-motion';
import { FaPaintBrush, FaBiking, FaLanguage } from 'react-icons/fa';
import { MdSportsGymnastics, MdPool } from 'react-icons/md';

const PersonalSkills = () => {
  const personalSkills = [
    {
      category: 'Creative Skills',
      icon: <FaPaintBrush className="text-blue-600 w-6 h-6" />,
      skills: ['DaVinci Resolve', 'Premiere Pro', 'Photoshop', '3D Animation', 'UI/UX Design']
    },
    {
      category: 'Physical Activities',
      icon: <FaBiking className="text-blue-600 w-6 h-6" />,
      skills: ['Cycling', 'Swimming', 'Gym']
    },
    {
      category: 'Languages',
      icon: <FaLanguage className="text-blue-600 w-6 h-6" />,
      skills: ['English (Bilingual)', 'Cantonese (Native)', 'Mandarin (Fluent)', 'Japanese (Basic)']
    }
  ];

  return (
    <section id="personal-skills" className="py-12 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Personal Skills & Interests
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Beyond programming, here are some other skills and interests I've developed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personalSkills.map((category, idx) => (
            <motion.div
              key={category.category}
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
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill}
                    className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center flex-1 min-w-[120px] border border-gray-200 dark:border-gray-700"
                  >
                    {category.category === 'Physical Activities' && skill === 'Cycling' && (
                      <FaBiking className="mx-auto text-blue-600 w-6 h-6 mb-2" />
                    )}
                    {category.category === 'Physical Activities' && skill === 'Swimming' && (
                      <MdPool className="mx-auto text-blue-600 w-6 h-6 mb-2" />
                    )}
                    {category.category === 'Physical Activities' && skill === 'Gym' && (
                      <MdSportsGymnastics className="mx-auto text-blue-600 w-6 h-6 mb-2" />
                    )}
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
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

export default PersonalSkills; 