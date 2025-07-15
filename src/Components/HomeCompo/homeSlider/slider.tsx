'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/image1.jpg',
  '/image2.jpg',
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden rounded-xl shadow-lg py-3 h-80">
      <Image
        src={images[current]}
        alt={`slide-${current}`}
        layout="fill"
        objectFit="cover"
        priority
        className="transition-opacity duration-700"
      />

      
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
      >
        ›
      </button>
    </div>
  );
};

export default Slider;
