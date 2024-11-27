import React from "react";
import { colors } from "../constants/colors";
import styled from "styled-components";

const StyledLogo = styled.span`
  font-family: "Chicle", serif;
  color: ${colors.primary};
  font-size: 36px;
`;

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <StyledLogo className="text-2xl font-bold text-primary">
              eB
            </StyledLogo>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <a
              href="#Hero"
              className="text-gray-700 hover:text-primary px-3 py-2"
            >
              Accueil
            </a>
            <a
              href="#AboutUs"
              className="text-gray-700 hover:text-primary px-3 py-2"
            >
              A propos
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-primary px-3 py-2"
            >
              Caractéristiques
            </a>
            <a
              href="#joinUs"
              className="text-gray-700 hover:text-primary px-3 py-2"
            >
              Nous rejoindre
            </a>
            <a
              href="#newsletter"
              className="text-gray-700 hover:text-primary px-3 py-2"
            >
              Newsletter
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary px-3 py-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
