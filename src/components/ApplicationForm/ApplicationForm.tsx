import { useState } from "react";

import "./ApplicationForm.css";

import clasica from "../../assets/images/qore-clasica.webp";
import oro from "../../assets/images/qore-oro.webp";
import platinum from "../../assets/images/qore-platinum.webp";

function ApplicationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setSubmitted(false);

    if (!name.trim()) {
      setError("Ingresa tu nombre completo.");
      return;
    }

    if (!email.trim()) {
      setError("Ingresa tu correo electrónico.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Ingresa un correo electrónico válido.");
      return;
    }

    const savedVariant = sessionStorage.getItem("bcp-ab-variant");

    const variant = savedVariant === "A" || savedVariant === "B" ? savedVariant : "unknown";

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "form_submit",
      experimentId: "bcp-card-experiment",
      action: "submit_form",
      variant,
      label: "solicitud_tarjeta"
    });

    setSubmitted(true);
  };

  return (
    <section id="application" className="ctnApplication">
      <div className="application">
        <div className="applicationTxt">
          <h2>Solicita tu tarjeta</h2>

          <p>
            Completa tus datos y descubre la tarjeta que tenemos para ti.
          </p>

          <div className="ctnCards">
            <img className="card" src={clasica} alt="Isotipo BCP" />
            <img className="card" src={oro} alt="Isotipo BCP" />
            <img className="card" src={platinum} alt="Isotipo BCP" />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <h2>Ingresa tus datos</h2>

          <div className="inputGroup">
            <label htmlFor="name">Nombre completo</label>

            <input id="name" type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder="Ingresa tu nombre"/>
          </div>

          <div className="inputGroup">
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Ingresa tu correo"/>
          </div>

          {error && (
            <p className="formError">
              {error}
            </p>
          )}
          <button type="submit">Quiero mi tarjeta</button>
          {submitted && (
            <p className="formSuccess">
              ¡Solicitud enviada correctamente!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default ApplicationForm;