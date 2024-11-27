import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('success');
  };

  return (
    <section id="newsletter" className="bg-secondary/10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Restez informé
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Inscrivez-vous à notre newsletter et recevez 10% de réduction sur votre première commande
          </p>
        </div>
        {status === 'idle' ? (
          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md">
            <div className="flex gap-x-4">
              <input
                type="email"
                required
                placeholder="Votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-accent"
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
              >
                Je m'inscris
              </button>
            </div>
          </form>
        ) : (
          <div className="mx-auto mt-10 max-w-md text-center">
            <p className="text-lg font-semibold text-primary">
              Merci pour votre inscription !
            </p>
            <p className="mt-2 text-gray-600">
              Vous recevrez bientôt votre code de réduction par email.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;