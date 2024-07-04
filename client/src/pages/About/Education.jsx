import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Arts in English Literature',
      institution: 'National University Bangladesh',
      year: '2019 - present',
      description: 'A detailed study in English and european literature.',
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Govt. Janata College',
      year: '2018 - 2020',
      description: 'Focused on science subjects with a specialization in mathematics and physics.',
    },
    {
      degree: 'Secondary School Certificate',
      institution: 'Lebukhali Habibullah Secondary School',
      year: '2012 - 2017',
      description: 'Completed secondary education with a focus on general science.',
    },
  ];

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-left mb-2">Education</h2>
        <div className="relative border-l border-gray-200 dark:border-gray-700">
          {educationData.map((education, index) => (
            <div key={index} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-blue-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{education.year}</time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{education.degree}</h3>
              <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">{education.institution}</p>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
