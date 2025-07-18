'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/aboutus' },
    { label: 'Programs', href: '/programs' },
    { label: 'Downloads', href: '/downloads' },
    { label: 'Blog', href: '/blog' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact Us', href: '/contactus' },
  ];

  return (
    <nav className="bg-blue-100 shadow-md sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
      
        <div className="text-2xl font-bold text-blue-900">
          <Link href="/">MyWebsite</Link>
        </div>

        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group relative inline-block text-blue-900 font-medium text-lg px-2"
            >
              <span className="hover:text-blue-600 transition duration-200">{item.label}</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}

  
          <div
            className="relative group cursor-pointer"
            onMouseEnter={() => setGalleryOpen(true)}
            onMouseLeave={() => setGalleryOpen(false)}
          >
            <div className="flex items-center gap-1 text-blue-900 font-medium text-lg px-2">
              Gallery <ChevronDown size={16} />
            </div>
            {galleryOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-md rounded-md z-50">
                <Link href="/photos" className="block px-4 py-2 hover:bg-blue-100">
                  Photos
                </Link>
                <Link href="/videos" className="block px-4 py-2 hover:bg-blue-100">
                  Videos
                </Link>
              </div>
            )}
          </div>
        </div>

      
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

    
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-blue-50">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="block text-blue-900 hover:text-blue-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          
          <div className="space-y-1">
            <div className="text-blue-900 font-medium">Gallery</div>
            <Link href="/photos" className="block pl-4 text-sm text-blue-700 hover:text-blue-500">
              Photos
            </Link>
            <Link href="/videos" className="block pl-4 text-sm text-blue-700 hover:text-blue-500">
              Videos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
