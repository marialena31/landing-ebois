import React from "react";
import { colors } from "../constants/colors";

const Header = () => {
  return (
    <header
      className="text-center mb-12 p-6 rounded-lg shadow-md"
      style={{ backgroundColor: colors.secondary }}
    >
      <h1
        className="text-4xl md:text-5xl font-bold mb-4"
        style={{ color: colors.primary }}
      >
        eBois
      </h1>
      <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.text }}>
        La marketplace française des bois de chauffage et équipements artisanaux
      </p>
    </header>
  );
};

export default Header;
