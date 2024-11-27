import React, { useState, useRef, useEffect, createRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [status, setStatus] = useState(null);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
    type: "client",
  });
  const refCaptcha = createRef();
  const form = useRef();

  useEffect(() => {
    let timeout;

    if (status === true || false) {
      // Show the info message for 10 seconds
      timeout = setTimeout(() => {
        setAlertPrompt(null);
      }, 10000);
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
    const token = refCaptcha.current.getValue();
    setStatus(true);

    const params = {
      ...formValue,
      "g-recaptcha-response": token,
    };

    switch (true) {
      case formValue.user_name === "":
        setStatus(false);

        break;

      case formValue.user_email === "":
        setStatus(false);

        break;

      case token === undefined:
        setStatus(false);

        break;

      default:
        emailjs
          .sendForm(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_PUBLIC_KEY
          )
          .then(
            (response) => {
              if (response.status === 200) {
                setStatus(false);
                setFormValue({});
              }
            },
            (err) => {
              setStatus(false);
              setFormValue({});
              console.log("FAILED...", err.text);
            }
          );
    }
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
        {!status ? (
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="mx-auto mt-16 max-w-xl"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <select
                  name="type"
                  value={formValue.type}
                  onChange={(e) =>
                    setFormValue({ ...formValue, type: e.target.value })
                  }
                  className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-accent"
                >
                  <option value="client">Je suis un client potentiel</option>
                  <option value="supplier">Je suis un fournisseur</option>
                </select>
              </div>
              <div>
                <input
                  type="text"
                  name="name"
                  value={formValue.name}
                  onChange={(e) =>
                    setFormValue({ ...formValue, name: e.target.value })
                  }
                  placeholder="Votre nom"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-accent"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formValue.email}
                  onChange={(e) =>
                    setFormValue({ ...formValue, email: e.target.value })
                  }
                  placeholder="Votre email"
                  required
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-accent"
                />
              </div>
              <div className="sm:col-span-2">
                <textarea
                  name="message"
                  value={formValue.message}
                  onChange={(e) =>
                    setFormValue({ ...formValue, message: e.target.value })
                  }
                  placeholder="Votre message"
                  required
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-accent"
                />
              </div>
            </div>
            <div className="mt-10">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                ref={refCaptcha}
                onChange={() => setStatus(null)}
              />
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
