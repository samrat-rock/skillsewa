'use client';
import React from 'react';
import Image from 'next/image';

const sections = [
  {
    title: 'Introduction',
    content:
      'We are a passionate and dedicated organization committed to making education accessible, innovative, and impactful across the globe. Our focus is on delivering modern solutions to real-world challenges through technology and collaboration.',
    image: '/images/about/introduction.jpg',
  },
  {
    title: 'Mission & Vision',
    content:
      'Our mission is to empower individuals through quality education and cutting-edge technology. Our vision is to become a global leader in educational innovation, community impact, and sustainable development.',
    image: '/images/about/mission.jpg',
  },
  {
    title: 'Advisor Committee',
    content:
      'Our advisory board comprises experienced educators, industry leaders, and global thinkers who guide our strategies and ensure we align with our long-term goals.',
    image: '/images/about/advisors.jpg',
  },
  {
    title: 'Technical Team',
    content:
      'Our technical team is composed of skilled developers, UI/UX designers, and engineers who drive innovation and deliver seamless user experiences across all platforms.',
    image: '/images/about/tech-team.jpg',
  },
  {
    title: 'Administrative Team',
    content:
      'The administrative team ensures smooth day-to-day operations, supporting all departments with efficiency, planning, and communication.',
    image: '/images/about/admin-team.jpg',
  },
  {
    title: 'Global Outreach',
    content:
      'We collaborate with international institutions, NGOs, and global partners to expand our reach and ensure inclusive learning opportunities for all.',
    image: '/images/about/global-outreach.jpg',
  },
];

const AboutPage = () => {
  return (
    <section className="bg-cream text-blue-900 px-4 sm:px-6 lg:px-52 py-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h3 className="text-4xl font-bold text-blue-600 mb-4">About Us</h3>
        <p className="text-lg text-gray-700">
          Discover our story, mission, and the teams that power our vision.
        </p>
      </div>

    
      <div
        className="mb-16 border-2 border-blue-300 rounded-2xl p-6
          hover:shadow-[0_8px_24px_rgba(13,42,148,0.8)] transition-shadow duration-300 ease-in-out"
      >
        <h4 className="text-3xl font-semibold text-center text-blue-600 mb-10">Introduction</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-gray-700 text-lg">{sections[0].content}</div>
          <div className="w-full h-64 relative rounded-2xl overflow-hidden">
            <Image
              src={sections[0].image}
              alt={sections[0].title}
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>

    
      {sections.slice(1).map((section, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={section.title}
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 group transition-transform duration-300 ease-in-out
              border-2 border-blue-300 rounded-2xl p-6 hover:shadow-[0_8px_24px_rgba(13,42,148,0.8)] hover:scale-[1.01]`}
          >
          
            {isEven ? (
              <>
                <div className="w-full h-64 relative rounded-2xl overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-blue-600 mb-3">{section.title}</h4>
                  <p className="text-gray-700 text-lg">{section.content}</p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col justify-center">
                  <h4 className="text-2xl font-bold text-blue-600 mb-3">{section.title}</h4>
                  <p className="text-gray-700 text-lg">{section.content}</p>
                </div>
                <div className="w-full h-64 relative rounded-2xl overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
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

export default AboutPage;
