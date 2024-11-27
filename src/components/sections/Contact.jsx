import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <section id="contact" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Contactez-nous
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Une question ? Un projet ? N'hésitez pas à nous contacter
          </p>
        </div>
        {status === 'idle' ? (
          <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <select className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-accent">
                  <option value="client">Je suis un client potentiel</option>
                  <option value="supplier">Je suis un fournisseur</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Nom"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-accent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-accent"
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  required
                  rows={4}
                  placeholder="Votre message"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-accent"
                />
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
              >
                Envoyer
              </button>
            </div>
          </form>
        ) : (
          <div className="mx-auto mt-16 max-w-xl text-center">
            <p className="text-lg font-semibold text-primary">
              Merci pour votre message !
            </p>
            <p className="mt-2 text-gray-600">
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;