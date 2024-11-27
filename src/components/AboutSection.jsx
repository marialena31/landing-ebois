import React from "react";

const AboutSection = () => {
  return (
    <section id="AboutUs" className="bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Notre Projet
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ebois.fr est une marketplace dédiée aux passionnés du bois et du
            chauffage. Nous connectons des fournisseurs artisanaux français
            proposant des bois de chauffage, des poêles, des braseros et
            d'autres équipements de qualité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
