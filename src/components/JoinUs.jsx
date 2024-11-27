import React from "react";
import { MailIcon } from "./icons";
import { colors } from "../constants/colors";
import styled from "styled-components";
import Button from "./ui/Button";

const JoinUs = () => {
  return (
    <section id="joinUs" className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-y-6 mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Nous Rejoindre
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Que vous soyez un fournisseur artisanal de bois ou un passionné des
            énergies naturelles, Ebois.fr vous invite à faire partie de notre
            communauté.
          </p>
          <Button
            variant="secondary"
            className="mx-w-6"
            style={{ width: "50%" }}
          >
            <a href="#contact">Rejoignez-nous</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
