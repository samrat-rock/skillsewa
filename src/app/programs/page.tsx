'use client';
import React from 'react';
import Image from 'next/image';

const programs = [
  {
    title: 'Summer Camp',
    description:
      'Fun-filled educational activities during summer break to promote creativity, collaboration, and learning in a playful environment.',
    image: '/images/programs/summer-camp.jpg',
  },
  {
    title: 'Winter Camp',
    description:
      'Engaging winter sessions with hands-on workshops, arts, and tech challenges that keep students learning through the cold season.',
    image: '/images/programs/winter-camp.jpg',
  },
  {
    title: 'Coding & AI',
    description:
      'Introductory and advanced programs in coding, robotics, and artificial intelligence to prepare students for the future of tech.',
    image: '/images/programs/coding-ai.jpg',
  },
  {
    title: 'Skills Development',
    description:
      'Workshops focused on leadership, communication, problem-solving, and other soft and hard skills needed for personal growth.',
    image: '/images/programs/skills.jpg',
  },
  {
    title: 'Language Training',
    description:
      'Courses in English and other languages designed to enhance fluency, comprehension, and global communication skills.',
    image: '/images/programs/language.jpg',
  },
  {
    title: 'Literacy Programs',
    description:
      'Basic and advanced literacy initiatives for children and adults to build reading, writing, and lifelong learning habits.',
    image: '/images/programs/literacy.jpg',
  },
  {
    title: 'Mentoring',
    description:
      'Personalized mentoring programs that connect learners with experienced guides for academic and personal development.',
    image: '/images/programs/mentoring.jpg',
  },
  {
    title: 'Career Counseling',
    description:
      'Supportive sessions for students to discover their interests, explore career paths, and plan for higher education or the workforce.',
    image: '/images/programs/career.jpg',
  },
];

const ProgramsPage = () => {
  return (
    <section className="bg-cream text-blue-900 px-4 sm:px-6 lg:px-52 py-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h3 className="text-4xl font-bold text-blue-600 mb-4">Our Programs</h3>
        <p className="text-lg text-gray-700">
          Explore the wide range of educational and personal development programs we offer.
        </p>
      </div>

      {programs.map((program, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={program.title}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 group transition-transform duration-300 ease-in-out hover:scale-[1.01]`}
          >
            {isEven ? (
              <>
                <div className="w-full h-64 relative rounded-2xl overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex flex-col justify-center text-left">
                  <h4 className="text-2xl font-bold text-blue-600 mb-3">{program.title}</h4>
                  <p className="text-gray-700 text-lg">{program.description}</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col justify-center text-left">
                  <h4 className="text-2xl font-bold text-blue-600 mb-3">{program.title}</h4>
                  <p className="text-gray-700 text-lg">{program.description}</p>
                </div>
                <div className="w-full h-64 relative rounded-2xl overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
              </>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ProgramsPage;
