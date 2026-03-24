import './About.css'

const About = () => {
  return (
    <section id="nosotros" className="about">
      <div className="container">
        <h2 className="section-title">¿Quiénes somos?</h2>
        <p className="section-subtitle">
          Ciencia forense, inteligencia artificial e innovación al servicio del bienestar animal
        </p>

        <div className="about__grid">
          <div className="about__content">
            <p className="about__text">
              Somos un equipo apasionado dedicado a la <strong>investigación forense 
              veterinaria</strong> y la tecnología avanzada para el bienestar animal. 
              Nuestra misión es proporcionar soluciones innovadoras y precisas que combinen 
              la ciencia forense, la inteligencia artificial y la gestión estratégica para 
              apoyar a las industrias pecuarias en la mejora de sus procesos y en la 
              reducción de pérdidas económicas.
            </p>
            <p className="about__text">
              Con un enfoque integral, ayudamos a nuestros clientes a identificar las causas 
              de mortalidad animal, optimizar la toma de decisiones estratégicas y garantizar 
              la sostenibilidad en sus operaciones. Creemos en la importancia de la ética, 
              la innovación y el compromiso para proteger la vida animal y fomentar entornos 
              más seguros.
            </p>
            <p className="about__text">
              Nuestro equipo multidisciplinario trabaja con rigor científico, utilizando las 
              mejores prácticas internacionales y las herramientas más avanzadas para resolver 
              los desafíos más complejos en el ámbito de la medicina veterinaria y la 
              investigación forense.
            </p>
          </div>

          <div className="about__values">
            <div className="about__value">
              <div className="about__value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3 className="about__value-title">Ética</h3>
              <p className="about__value-desc">Compromiso con los más altos estándares éticos en cada investigación</p>
            </div>
            <div className="about__value">
              <div className="about__value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v-4"/>
                  <path d="M12 8h.01"/>
                </svg>
              </div>
              <h3 className="about__value-title">Innovación con IA</h3>
              <p className="about__value-desc">Inteligencia artificial, machine learning y analítica predictiva de vanguardia</p>
            </div>
            <div className="about__value">
              <div className="about__value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3 className="about__value-title">Compromiso</h3>
              <p className="about__value-desc">Dedicación absoluta a la protección de la vida animal</p>
            </div>
            <div className="about__value">
              <div className="about__value-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3 className="about__value-title">Rigor Científico</h3>
              <p className="about__value-desc">Mejores prácticas internacionales en cada análisis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
