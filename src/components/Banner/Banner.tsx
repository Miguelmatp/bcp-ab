import { useEffect, useState } from "react";
import "./Banner.css";
import isotipoNaranja from "../../assets/images/isotipo-naranja.webp";
import isotipoAzul from "../../assets/images/isotipo-azul.webp";
import clasica from "../../assets/images/qore-clasica.webp";
import oro from "../../assets/images/qore-oro.webp";
import platinum from "../../assets/images/qore-platinum.webp";

function Banner() {
  const [variant] = useState<"A" | "B">(() => {
    const savedVariant = sessionStorage.getItem("bcp-ab-variant");

    if (savedVariant === "A" || savedVariant === "B") {
      return savedVariant;
    }

    const newVariant = Math.random() < 0.5 ? "A" : "B";

    sessionStorage.setItem("bcp-ab-variant", newVariant);

    return newVariant;
  });
  
  useEffect(() => {
    const viewTracked = sessionStorage.getItem("bcp-ab-view-tracked");

    if (viewTracked) {
      return;
    }

    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "experiment_view",
      experimentId: "bcp-card-experiment",
      action: "view",
      variant,
      label: `banner_${variant}`
    });

    sessionStorage.setItem("bcp-ab-view-tracked", "true");
  }, [variant]);
  
  const handleScrollToForm = () => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "experiment_interaction",
      experimentId: "bcp-card-experiment",
      action: "click_cta",
      variant,
      label: variant === "A" ? "Solicita ahora" : "Aplica ya"
    });

    document.getElementById("application")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className={`ctnBanner banner--${variant.toLowerCase()}`}>
      <div className="banner">
        <div className="ctnTxt">
          <h1>¡Elige la tarjeta <br></br>que mejor <br></br>se  adapta a ti!</h1>
          {/* <h1>La tarjeta que buscas está más cerca de lo que imaginas</h1> */}

          <p>
            Descubre los beneficios que tenemos para ti.
          </p>

          <button onClick={handleScrollToForm}>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" height="20" 
            viewBox="0 0 24 24" 
            fill="none" stroke="currentColor"
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-square-arrow-out-up-right">
              <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/>
              <path d="m21 3-9 9"/>
              <path d="M15 3h6v6"/>
            </svg>
            {variant === "A" ? "Solicita ahora" : "Aplica ya"}
          </button>
        </div>
        
        <div className="ctnImg">
          <img
            className="isotipo"
            src={variant === "A" ? isotipoNaranja : isotipoAzul}
            alt="Isotipo BCP"
          />
        </div>
        <div className="ctnCards">
          <img className="card" src={clasica} alt="Isotipo BCP" />
          <img className="card" src={oro} alt="Isotipo BCP" />
          <img className="card" src={platinum} alt="Isotipo BCP" />
        </div>
      </div>
    </section>
  );
}

export default Banner;