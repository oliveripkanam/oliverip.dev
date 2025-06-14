'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const About = () => {
  const [profileImageExists, setProfileImageExists] = useState(false);

  useEffect(() => {
    // Check if profile image exists
    const img = new globalThis.Image();
    img.src = '/images/OliverIpPFP.jpg';
    img.onload = () => setProfileImageExists(true);
    img.onerror = () => setProfileImageExists(false);
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-blue-600 absolute -top-4 -left-4 w-full h-full rounded-full"></div>
            <div className="relative bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden aspect-square">
              {profileImageExists ? (
                <Image 
                  src="/images/OliverIpPFP.jpg" 
                  alt="Oliver Ip"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 rounded-full">
                  <span className="text-sm">Add your photo to public/images/OliverIpPFP.jpg</span>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Driven second year computer science student, seeking an enriching placement opportunity to gain firsthand experience in the dynamic tech industry. With a passion for programming and past experience in digital design, machine learning and software engineering, eager to collaborate with professionals on transformative projects, further developing technical skills and exploring potential career paths.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Aimed to maximize this formative year by actively contributing to impactful work and gaining well-rounded exposure to the field.
            </p>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                Education
              </h4>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-600 pl-4">
                  <h5 className="font-semibold text-gray-800 dark:text-white">
                    University of Bath
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    BSc Computer Science | 2022-2026
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    1st Year Average Grade: 68.5% | Predicted classification: 2:1
                  </p>
                </div>
                <div className="border-l-2 border-blue-600 pl-4">
                  <h5 className="font-semibold text-gray-800 dark:text-white">
                    St. Paul&apos;s Co-Educational College
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400">
                    International Baccalaureate | 2016-2022
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    Final Grade: 44 marks out of 45
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                Java
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full text-sm">
                Machine Learning
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 