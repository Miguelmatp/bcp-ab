import "./Benefits.css";
import { CreditCard, Gift, Zap } from "lucide-react";

function Benefits() {
  return (
    <section className="ctnBenefits">
      <div className="benefits">
        <h2>Beneficios</h2>

        <div className="ctnCards">
          <article className="benefitCard">
            <CreditCard />
            <h3>Tarjeta ideal</h3>
            <p>Encuentra una tarjeta que se adapte a tus necesidades.</p>
          </article>

          <article className="benefitCard">
            <Gift />
            <h3>Beneficios exclusivos</h3>
            <p>Accede a promociones y beneficios pensados para ti.</p>
          </article>

          <article className="benefitCard">
            <Zap />
            <h3>Solicitud rápida</h3>
            <p>Realiza tu solicitud online de manera fácil y segura.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Benefits;