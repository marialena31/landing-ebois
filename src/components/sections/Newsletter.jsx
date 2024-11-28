import React, { useState, useRef, useEffect, createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [formValue, setFormValue] = useState({
    email: "",
  });
  const refCaptcha = createRef();
  const form = useRef();

  useEffect(() => {
    let timeout;

    if (status === true || false) {
      // Show the info message for 10 seconds
      timeout = setTimeout(() => {}, 10000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
        setStatus(null);
      }
    };
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Move captcha validation to the top and check for null/empty values
    if (!token) {
      setError("Veuillez valider le captcha");
      setStatus(false);
      return;
    }

    setStatus(true);

    switch (true) {
      case formValue.email === "":
        setError("Veuillez entrer une adresse email");
        setStatus(false);
        break;

      case !emailRegex.test(formValue.email):
        setError("Veuillez entrer une adresse email valide");
        setStatus(false);
        break;

      default:
        emailjs
          .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_NEWSLETTER_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
          )
          .then(
            (response) => {
              if (response.status === 200) {
                setStatus(true); // Changed to true for success
                setFormValue({
                  email: "",
                }); // Reset with initial values
                refCaptcha.current.reset(); // Reset the captcha
                setError(""); // Clear any previous errors
              }
            },
            (err) => {
              setError("Une erreur est survenue. Veuillez réessayer."); // Add error message
              setStatus(false);
              console.log("FAILED...", err.text);
            }
          );
    }
  };

  return (
    <section id="newsletter" className="bg-secondary/10 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Restez informé
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Inscrivez-vous à notre newsletter et recevez 10% de réduction sur
            votre première commande
          </p>
        </div>
        {status === "idle" ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center mx-auto mt-10 max-w-md gap-y-4"
            noValidate
          >
            <div className="flex gap-x-4">
              <input
                type="email"
                name="email"
                required
                placeholder="Votre email"
                value={formValue.email}
                onChange={(e) =>
                  setFormValue({ ...formValue, email: e.target.value })
                }
                className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-accent"
              />
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90"
              >
                Je m'inscris
              </button>
            </div>
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              ref={refCaptcha}
              onChange={() => setStatus(null)}
            />
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
