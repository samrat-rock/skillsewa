'use client';
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 pt-10 pb-4">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">About Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg transform transition ease-in-out duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <Image
              src={`/profile${index + 1}.jpg`} 
              alt={`Profile ${index + 1}`}
                className="w-full h-64 object-cover"
                width={500}
                height={300}
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Samrat Pandey</h2>
              <p className="text-gray-600">
                I&apos;m a Frontend Developer skilled in React, Next.js, and Tailwind CSS. I enjoy crafting responsive and clean UI experiences for modern web applications.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
