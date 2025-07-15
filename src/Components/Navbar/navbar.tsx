"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);

  return (
    <nav className="bg-blue-100 shadow-md sticky top-0 z-50">
      <div className="  px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        <div className="text-3xl font-extrabold text-blue-700 tracking-wide hover:scale-105 transition-transform duration-300">
          MyLogo
        </div>

        <div className="hidden md:flex space-x-6 items-center text-blue-900 font-medium text-lg">
          {["Home", "About Us", "Programs", "Contact Us"].map((label, i) => (
            <Link
              key={i}
              href={
                label === "Home"
                  ? "/"
                  : `/${label.toLowerCase().replace(/\s/g, "")}`
              }
              className="hover:text-blue-600 hover:underline underline-offset-4 transition duration-300"
            >
              {label}
            </Link>
          ))}

          

          
          <div className="relative group">
            <button
              onClick={() => setGalleryOpen(!galleryOpen)}
              className="flex items-center gap-1 hover:text-blue-600 hover:underline underline-offset-4 transition duration-300"
            >
              Gallery <ChevronDown size={16} />
            </button>

          



            {galleryOpen && (
              <div className="absolute top-full mt-2 bg-white border border-blue-100 rounded-md shadow-xl w-44 animate-fade-in-down">
                {[
                  { href: "/gallery/photos", label: "Photos" },
                  { href: "/gallery/videos", label: "Videos" },
                  { href: "/gallery/events", label: "Events" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="block px-4 py-2 text-blue-800 hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="md:hidden text-blue-800 text-2xl cursor-pointer">☰</div>
      </div>
    </nav>
  );
};

export default Navbar;
