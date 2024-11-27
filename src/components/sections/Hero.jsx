import React from "react";
import { colors } from "../../constants/colors";
import styled from "styled-components";
import Button from "../ui/Button";

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
          <Button>
            <a href="#features">Découvrir nos services</a>
          </Button>
          <Button variant="secondary">
            <a href="#contact">En savoir plus</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
