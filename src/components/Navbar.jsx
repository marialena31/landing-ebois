import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary">Ebois.fr</span>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary px-3 py-2">
              Caractéristiques
            </a>
            <a href="#newsletter" className="text-gray-700 hover:text-primary px-3 py-2">
              Newsletter
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary px-3 py-2">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;