import React from "react";
import { colors } from "../../constants/colors";
import styled from "styled-components";

const StyledLogo = styled.h1`
  font-family: "Chicle", serif;
  color: ${colors.primary};
  font-size: 96px;
`;

const Hero = () => {
  return (
    <section
      id="Hero"
      className="relative bg-secondary/20 px-6 py-24 sm:px-8 md:px-12"
    >
      <div className="mx-auto max-w-2xl text-center">
        <StyledLogo className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          eBois
        </StyledLogo>
        <p className="mt-6 text-lg leading-8 text-gray-700">
          La marketplace française des bois de chauffage et équipements
          artisanaux
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="rounded-md bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90">
            <a href="#features">Découvrir nos services</a>
          </button>
          <button className="rounded-md bg-secondary px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-secondary/90">
            <a href="#contact">En savoir plus</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
