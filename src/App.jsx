import React from 'react';
import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Newsletter from './components/sections/Newsletter';
import Contact from './components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Newsletter />
      <Contact />
    </Layout>
  );
}

export default App;