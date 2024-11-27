import React from 'react';
import { MailIcon } from './icons';
import { colors } from '../constants/colors';

const JoinUs = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
        Nous Rejoindre
      </h2>
      <p className="mb-4" style={{ color: colors.text }}>
        Que vous soyez un fournisseur artisanal de bois ou un passionné des 
        énergies naturelles, Ebois.fr vous invite à faire partie de notre 
        communauté.
      </p>
      <div className="flex items-center">
        <MailIcon className="mr-2" style={{ color: colors.accent }} />
        <a 
          href="mailto:contact@ebois.fr" 
          className="font-bold"
          style={{ color: colors.primary }}
        >
          contact@ebois.fr
        </a>
      </div>
    </div>
  );
};

export default JoinUs;