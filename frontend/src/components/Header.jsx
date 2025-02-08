import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 shadow-2xl  transform hover:scale-105 transition-transform">
      <div className="flex justify-between items-center">
        {/* Logo Placeholder */}
        <div className="text-4xl font-extrabold tracking-wide text-white">
          MyLogo
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-10">
            <li className="transform transition-all hover:scale-110 hover:rotate-3d hover:shadow-2xl hover:bg-gray-600 px-6 py-3 rounded-md">
              <a href="/" className="text-white font-medium">Home</a>
            </li>
            <li className="transform transition-all hover:scale-110 hover:rotate-3d hover:shadow-2xl hover:bg-gray-600 px-6 py-3 rounded-md">
              <a href="/services" className="text-white font-medium">Services</a>
            </li>
            <li className="transform transition-all hover:scale-110 hover:rotate-3d hover:shadow-2xl hover:bg-gray-600 px-6 py-3 rounded-md">
              <a href="/contact-us" className="text-white font-medium">Contact Us</a>
            </li>
            <li className="transform transition-all hover:scale-110 hover:rotate-3d hover:shadow-2xl hover:bg-gray-600 px-6 py-3 rounded-md">
              <a href="/about" className="text-white font-medium">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
