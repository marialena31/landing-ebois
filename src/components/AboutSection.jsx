import React from 'react';
import { TreeIcon, TruckIcon, UsersIcon } from './icons';
import { colors } from '../constants/colors';

const AboutSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
        Notre Projet
      </h2>
      <p className="mb-4" style={{ color: colors.text }}>
        Ebois.fr est une marketplace dédiée aux passionnés du bois et du chauffage. 
        Nous connectons des fournisseurs artisanaux français proposant des bois de 
        chauffage, des poêles, des braseros et d'autres équipements de qualité.
      </p>
      <div className="space-y-2">
        <div className="flex items-center">
          <TreeIcon className="mr-2" style={{ color: colors.accent }} />
          <span>Bois issus de forêts françaises</span>
        </div>
        <div className="flex items-center">
          <TruckIcon className="mr-2" style={{ color: colors.accent }} />
          <span>Livraison directe par les artisans</span>
        </div>
        <div className="flex items-center">
          <UsersIcon className="mr-2" style={{ color: colors.accent }} />
          <span>Soutien aux entreprises locales</span>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;