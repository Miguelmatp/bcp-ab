import "./Banner.css"
// import bannerCard from "../../assets/images/tarjeta.webp";
import isotipo from "../../assets/images/isotipo2.webp";
import clasica from "../../assets/images/qore-clasica.webp";
import oro from "../../assets/images/qore-oro.webp";
import platinum from "../../assets/images/qore-platinum.webp";

function HeroBanner() {
  return (
    <section className="ctnBanner">
      <div className="banner">
        <div className="ctnTxt">
          <h1>¡Elige la tarjeta <br></br>que mejor <br></br>se  adapta a ti!</h1>
          {/* <h1>La tarjeta que buscas está más cerca de lo que imaginas</h1> */}

          <p>
            Descubre los beneficios que tenemos para ti.
          </p>

          <button>
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" height="20" 
            viewBox="0 0 24 24" 
            fill="none" stroke="currentColor"
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round" 
            className="lucide lucide-square-arrow-out-up-right">
              <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"/>
              <path d="m21 3-9 9"/>
              <path d="M15 3h6v6"/>
            </svg>
            Solicita ahora
          </button>
        </div>
        
        <div className="ctnImg">
          <img className="isotipo" src={isotipo} alt="Isotipo BCP" />
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

export default HeroBanner;