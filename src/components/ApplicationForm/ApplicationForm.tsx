import { useState } from "react";
import "./ApplicationForm.css";
import clasica from "../../assets/images/qore-clasica.webp";
import oro from "../../assets/images/qore-oro.webp";
import platinum from "../../assets/images/qore-platinum.webp";

function ApplicationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      name,
      email
    });
  };

  return (
    <section className="ctnApplication">
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
            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ingresa tu nombre"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Ingresa tu correo"
            />
          </div>

          <button type="submit">Quiero mi tarjeta</button>
        </form>
      </div>
    </section>
  );
}

export default ApplicationForm;