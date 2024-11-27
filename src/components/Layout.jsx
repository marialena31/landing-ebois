import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-base">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;