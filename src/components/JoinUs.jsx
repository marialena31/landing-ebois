import React from "react";
import { MailIcon } from "./icons";
import { colors } from "../constants/colors";

const JoinUs = () => {
  return (
    <section id="joinUs" className="bg-white py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Nous Rejoindre
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Que vous soyez un fournisseur artisanal de bois ou un passionné des
            énergies naturelles, Ebois.fr vous invite à faire partie de notre
            communauté.
          </p>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
                <MailIcon className="h-5 w-5 flex-none text-accent" />
                <a href="mailto:contact@ebois.fr" className="h-5 w-5 flex-none">
                  contact@ebois.fr
                </a>
              </dt>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
