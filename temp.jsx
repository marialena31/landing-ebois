import React, { useState } from "react";
import { colors } from "../constants/colors";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: "client",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.persist();
    e.preventDefault();
    setSubmitted(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSubmitted(true);
        },
        (error) => {
          setSubmitted(false);
        }
      );
    e.target.reset();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
        Contactez-nous
      </h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            style={{
              borderColor: colors.secondary,
              backgroundColor: colors.base,
            }}
          >
            <option value="client">Je suis un client potentiel</option>
            <option value="supplier">Je suis un fournisseur</option>
          </select>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Votre nom"
            required
            className="w-full p-2 border rounded"
            style={{
              borderColor: colors.secondary,
              backgroundColor: colors.base,
            }}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Votre email"
            required
            className="w-full p-2 border rounded"
            style={{
              borderColor: colors.secondary,
              backgroundColor: colors.base,
            }}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            required
            rows={4}
            className="w-full p-2 border rounded"
            style={{
              borderColor: colors.secondary,
              backgroundColor: colors.base,
            }}
          />
          <div
            className="g-recaptcha"
            data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          ></div>
          <button
            type="submit"
            className="w-full p-2 rounded font-bold"
            style={{ backgroundColor: colors.primary, color: colors.base }}
          >
            Envoyer
          </button>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-lg font-bold" style={{ color: colors.primary }}>
            Merci pour votre message !
          </p>
          <p className="text-sm text-gray-600">
            Nous vous répondrons dans les meilleurs délais
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
