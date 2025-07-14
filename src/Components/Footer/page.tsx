'use client';
import React from 'react';
import Image from 'next/image';
import {
  FaHome,
  FaGraduationCap,
  FaWrench,
  FaEnvelope,
  FaShieldAlt,
  FaFileAlt,
  FaBook,
  FaBriefcase,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaBell,
} from 'react-icons/fa';

const page = () => {
  return (
    <footer className="bg-[#1c2541] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Left Column */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <Image src="/avatar.png" alt="Logo" className="w-10 h-10 rounded-full"
            width={40}
            height={40}
            />
            <h2 className="text-2xl font-bold">Dibe.sh</h2>
          </div>
          <p className="text-gray-300 mb-6">
            Hi, I&apos;m Dibesh Raj Subedi — a self-ignited software engineer, passionate about building and innovating new things. This is my playground, where I share my thoughts, experiences, and learnings.
          </p>

          <iframe
            src="https://open.spotify.com/embed/playlist/4rOoJ6Egrf8K2IrywzwOMk"
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Center Column */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-3 text-gray-300">
            <div className="flex items-center gap-2">
              <FaHome /> Home
            </div>
            <div className="flex items-center gap-2">
              <FaFileAlt /> Contributions
            </div>
            <div className="flex items-center gap-2">
              <FaGraduationCap /> Education
            </div>
            <div className="flex items-center gap-2">
              <FaBook /> Articles
            </div>
            <div className="flex items-center gap-2">
              <FaWrench /> Skills
            </div>
            <div className="flex items-center gap-2">
              <FaBriefcase /> Experience
            </div>
            <div className="flex items-center gap-2">
              <FaFileAlt /> Resume
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> Contact
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt /> Privacy
            </div>
          </div>

          <div className="flex space-x-4 mt-6 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaGithub />
            <FaMedium />
          </div>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="text-xl font-semibold mb-2">What&apos;s New</h3>
          <p className="text-gray-300 mb-4">
            Want to know more? Stay tuned! <br /> Subscribe to my newsletter for updates.
          </p>
          <form className="bg-[#24315e] p-4 rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-1">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded bg-white text-black outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-1">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded bg-white text-black outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              <FaBell className="mr-2" /> Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default page;
