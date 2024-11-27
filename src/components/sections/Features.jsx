import React from 'react';
import { TreeIcon, TruckIcon, UsersIcon, LeafIcon } from '../icons';

const features = [
  {
    name: 'Bois local',
    description: 'Bois issus exclusivement de forêts françaises gérées durablement',
    icon: TreeIcon,
  },
  {
    name: 'Livraison directe',
    description: 'Livraison assurée directement par nos artisans partenaires',
    icon: TruckIcon,
  },
  {
    name: 'Artisans locaux',
    description: 'Soutien aux entreprises locales et au savoir-faire français',
    icon: UsersIcon,
  },
  {
    name: 'Écologique',
    description: 'Engagement pour une exploitation responsable des ressources',
    icon: LeafIcon,
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Pourquoi choisir Ebois ?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Une marketplace qui met en avant la qualité, la proximité et le respect de l'environnement
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
                  <feature.icon className="h-5 w-5 flex-none text-accent" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;