import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-secondary/20 px-6 py-24 sm:px-8 md:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          Ebois.fr
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          La marketplace française des bois de chauffage et équipements artisanaux
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90">
            Découvrir nos produits
          </button>
          <button className="rounded-md bg-secondary px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-secondary/90">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;