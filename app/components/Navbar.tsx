import Link from 'next/link';
import React from 'react';
import '../globals.css';

const Navbar = () => {
  return (
    <div className="flex text-xl justify-between fixed z-50 bg-base-100/70 backdrop-blur-lg w-full border-b-2 p-2">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-3xl text-green-950 font-extrabold">
          VirtualLuxury
        </Link>
      </div>

      {/* Social Links */}
      <div className="md:visible invisible flex flex-wrap gap-4">
        {['Instagram', 'Facebook', 'LinkedIn', 'X', 'Blogs'].map((platform) => (
          <Link
            key={platform}
            className="px-4 py-2 border-2 border-gray-300 rounded-full text-green-950 text-sm md:text-base inline-block hover:bg-gray-200"
            href={platform === 'Blogs' ? '/blogs' : '#'}
          >
            {platform}
          </Link>
        ))}
      </div>

      {/* Contact Button */}
      <div className="flex items-center">
        <input className="btn mx-12" value="Contact" type="submit" />
      </div>
    </div>
  );
};

export default Navbar;
