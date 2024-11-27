import React from 'react';
import Header from './Header';
import AboutSection from './AboutSection';
import NewsletterSignup from './NewsletterSignup';
import ContactForm from './ContactForm';
import JoinUs from './JoinUs';
import Footer from './Footer';
import { colors } from '../constants/colors';

const EboisLandingPage = () => {
  return (
    <div 
      className="min-h-screen p-4 md:p-10"
      style={{ backgroundColor: colors.base }}
    >
      <div className="container mx-auto max-w-6xl">
        <Header />
        
        <section className="mb-12 grid md:grid-cols-2 gap-8">
          <AboutSection />
          <NewsletterSignup />
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <ContactForm />
          <JoinUs />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default EboisLandingPage;