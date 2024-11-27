import React, { useState } from 'react';
import { colors } from '../constants/colors';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    setSubscribed(true);
    setError('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
        Restez informé
      </h2>
      {!subscribed ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-gray-600">
            Inscrivez-vous à notre newsletter et recevez un bon de réduction de 10% pour votre première commande
          </p>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            className="w-full p-2 border rounded"
            style={{ borderColor: colors.secondary, backgroundColor: colors.base }}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button 
            type="submit" 
            className="w-full p-2 rounded font-bold"
            style={{ backgroundColor: colors.primary, color: colors.base }}
          >
            Je m'inscris
          </button>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-lg font-bold" style={{ color: colors.primary }}>
            Merci pour votre inscription !
          </p>
          <p className="text-sm text-gray-600">
            Vous recevrez bientôt nos actualités et votre bon de réduction
          </p>
        </div>
      )}
    </div>
  );
};

export default NewsletterSignup;