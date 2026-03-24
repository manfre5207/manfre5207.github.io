import './Hero.css'

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero__overlay"></div>
      <div className="hero__particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="hero__particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 8}s`
          }}></div>
        ))}
      </div>
      <div className="hero__content container">
        <div className="hero__logo">
          <img 
            src="/images/logos/Logo versiones Animal defense Q-06.png" 
            alt="Animal Defense S.A.S" 
            className="hero__logo-img"
          />
        </div>
        <div className="hero__badge">
          <span>IA + Investigación Forense Veterinaria</span>
        </div>
        <h1 className="hero__title">
          Animal Defense <span className="hero__title-accent">S.A.S</span>
        </h1>
        <p className="hero__description">
          Líderes en servicios médico legales y forenses veterinarios en Colombia, 
          potenciados por <strong>inteligencia artificial</strong>. Desarrollo de software 
          con IA para gestión forense animal, investigación criminal y prevención del 
          delito en fauna doméstica, silvestre y animales de producción.
        </p>
        <p className="hero__subdescription">
          Combinamos machine learning, analítica predictiva y experiencia científica 
          para ofrecer soluciones que transforman la manera en que se protege la vida 
          animal en instituciones públicas y privadas.
        </p>
        <div className="hero__actions">
          <a href="#servicios" className="hero__btn hero__btn--primary">
            Nuestros Servicios
          </a>
          <a href="#contacto" className="hero__btn hero__btn--secondary">
            Contáctenos
          </a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">+10</span>
            <span className="hero__stat-label">Años de experiencia</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">IA</span>
            <span className="hero__stat-label">Inteligencia artificial integrada</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">AASIS®</span>
            <span className="hero__stat-label">Software con IA propietario</span>
          </div>
        </div>
      </div>
      <div className="hero__scroll-indicator">
        <a href="#nosotros">
          <span></span>
        </a>
      </div>
    </section>
  )
}

export default Hero
