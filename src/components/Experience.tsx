'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaHandsHelping } from 'react-icons/fa';

type ExperienceType = 'work' | 'education' | 'volunteer';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Science Tutor',
      company: 'Oxbridge Tutoring',
      date: 'Spring 2025 - Present',
      description: 'Provide personalized tutoring in science subjects for students worldwide, adapting lessons to individual learning styles and incorporating students\' interests to make learning engaging. Work as part of a selective team of tutors from top UK universities, helping students develop subject knowledge, confidence, and problem-solving skills. Guide students through UCAS applications and university admissions processes, maintaining regular communication with parents to ensure effective learning outcomes.',
      type: 'work' as ExperienceType,
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Spark Layer',
      date: 'Summer 2024-25',
      description: 'Contributed to the development and optimization of e-commerce solutions using PHP, Golang, and TypeScript. Implemented new features, and played a key role in improving code quality to enhance user experience. Collaborated closely with cross-functional teams to ensure timely delivery of high-quality software.',
      type: 'work' as ExperienceType,
    },
    {
      id: 3,
      title: 'Summer Internship',
      company: 'I-Charge Solutions International Company Limited',
      date: 'Summer 2023',
      description: 'Received enriching on-site training, assisted with new software installation on electric vehicle chargers, and conducted diagnostic testing to resolve issues. Performed data entry and SQL queries to organize maintenance records, and created visually compelling designs for company brochures and flyers.',
      type: 'work' as ExperienceType,
    },
    {
      id: 4,
      title: 'Tutoring for Charity',
      company: 'E-Concept Student-founded Company',
      date: '2021-2022',
      description: 'Taught English, Maths, and Economics to strengthen subject comprehension and expertise. Aimed to improve students\' well-being in a holistic approach by providing necessary voluntary tutoring and counseling. All earnings were donated to Non-profit Organizations such as Food Angel.',
      type: 'volunteer' as ExperienceType,
    },
    {
      id: 5,
      title: 'Volunteer',
      company: 'HandsOnHK and RedCross',
      date: '2019-2022',
      description: 'Monthly volunteering included activities such as mentoring the youth, recycling soaps, and visiting isolated elderly. Assisted in the development of an image detection and recognition AI using Clearbot, identifying plastic litter on beaches in Hong Kong with high efficiency using automatic data collection.',
      type: 'volunteer' as ExperienceType,
    },
    {
      id: 6,
      title: 'Robotics Design and Applications',
      company: 'HKU Summer Institute',
      date: 'Summer 2020',
      description: 'Through hands-on practice, I familiarized myself with robotics and circuit construction, gaining valuable skills in healthcare and mobility applications. Liaised extensively with different parties on a complex final project using Raspberry pi, Arduino UNO, and AutoCAD.',
      type: 'education' as ExperienceType,
    },
    {
      id: 7,
      title: 'Introduction to the Number Theory',
      company: 'CUHK Summer Program for the Gifted',
      date: 'Summer 2019',
      description: 'Conducted extensive quantitative and qualitative mathematical research studies on advanced theoretical topics such as inter-valued functions and arithmetic geometry. Applied computational techniques from number theory to produce an extensive data-analytic research project on cryptographically secure pseudo-random number generation.',
      type: 'education' as ExperienceType,
    },
  ];

  const getIcon = (type: ExperienceType) => {
    switch (type) {
      case 'work':
        return <FaBriefcase className="w-5 h-5 text-blue-600" />;
      case 'education':
        return <FaGraduationCap className="w-5 h-5 text-blue-600" />;
      case 'volunteer':
        return <FaHandsHelping className="w-5 h-5 text-blue-600" />;
      default:
        return <FaBriefcase className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            My Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A timeline of my professional journey and activities.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex items-center ${
                  idx % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 z-10"></div>

                {/* Content */}
                <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4 gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        {getIcon(exp.type)}
                      </div>
                      <div className={idx % 2 === 0 ? 'text-right' : ''}>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className={`mb-4 inline-block px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm rounded-full ${idx % 2 === 0 ? 'float-right' : ''}`}>
                      {exp.date}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 clear-both">
                      {exp.description}
                    </p>
                  </div>
                </div>

                {/* Empty div for layout on alternate sides */}
                <div className={`w-1/2 ${idx % 2 === 0 ? 'pl-12' : 'pr-12'}`}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 