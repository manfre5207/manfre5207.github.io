import './AISection.css'

const aiFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22"/>
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.58 3.25 3.93"/>
        <path d="M8.56 13.68C5.94 14.93 4 17.26 4 20h16c0-2.74-1.94-5.07-4.56-6.32"/>
      </svg>
    ),
    title: 'Analítica Predictiva',
    description: 'Modelos de machine learning que predicen riesgos sanitarios, brotes epidemiológicos y patrones de mortalidad antes de que ocurran.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8"/>
        <path d="M12 17v4"/>
        <path d="M7 9l3 3-3 3"/>
        <path d="M13 15h4"/>
      </svg>
    ),
    title: 'Procesamiento de Datos Masivos',
    description: 'Ingesta y análisis en tiempo real de grandes volúmenes de datos forenses, epidemiológicos y de trazabilidad animal.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
    title: 'Reconocimiento de Patrones',
    description: 'Algoritmos de IA que identifican patrones ocultos en datos clínicos y forenses para optimizar diagnósticos y decisiones estratégicas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: 'Modelos de Decisión Inteligente',
    description: 'Sistemas de soporte a decisiones basados en IA que guían a profesionales en la investigación forense con recomendaciones basadas en evidencia.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M2 12h20"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: 'Criminología Táctica con IA',
    description: 'Inteligencia artificial aplicada a la criminología para identificar, mapear y prevenir actos violentos contra la fauna en tiempo real.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
        <line x1="4" y1="22" x2="4" y2="15"/>
      </svg>
    ),
    title: 'Alertas Tempranas Automatizadas',
    description: 'Sistemas de alerta impulsados por IA que notifican riesgos emergentes en granjas, plantas de beneficio y programas de bienestar animal.',
  },
]

const AISection = () => {
  return (
    <section id="ia" className="ai-section">
      <div className="ai-section__bg">
        <div className="ai-section__grid-lines"></div>
        <div className="ai-section__glow ai-section__glow--1"></div>
        <div className="ai-section__glow ai-section__glow--2"></div>
      </div>

      <div className="container ai-section__container">
        <div className="ai-section__header">
          <span className="ai-section__label">Tecnología de Vanguardia</span>
          <h2 className="ai-section__title">
            Inteligencia Artificial al Servicio del <span>Bienestar Animal</span>
          </h2>
          <p className="ai-section__subtitle">
            Nuestras plataformas AASIS® integran modelos avanzados de inteligencia artificial, 
            machine learning y analítica de datos para transformar la forma en que se investigan 
            y previenen los delitos contra los animales en Colombia.
          </p>
        </div>

        <div className="ai-section__features">
          {aiFeatures.map((feature, i) => (
            <div key={i} className="ai-feature">
              <div className="ai-feature__icon">
                {feature.icon}
              </div>
              <h3 className="ai-feature__title">{feature.title}</h3>
              <p className="ai-feature__desc">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="ai-section__cta-area">
          <div className="ai-section__cta-content">
            <div className="ai-section__cta-badge">IA + Ciencia Forense</div>
            <h3 className="ai-section__cta-title">
              La convergencia entre inteligencia artificial y medicina veterinaria forense
            </h3>
            <p className="ai-section__cta-text">
              Animal Defense S.A.S. lidera la integración de IA en la investigación forense veterinaria 
              en Latinoamérica. Nuestros algoritmos procesan miles de datos en segundos, detectan 
              anomalías que el ojo humano no puede ver y generan insights accionables que salvan 
              vidas animales y reducen pérdidas económicas significativas.
            </p>
            <div className="ai-section__cta-stats">
              <div className="ai-section__cta-stat">
                <span className="ai-section__cta-stat-number">95%</span>
                <span className="ai-section__cta-stat-label">Precisión en predicciones</span>
              </div>
              <div className="ai-section__cta-stat">
                <span className="ai-section__cta-stat-number">10x</span>
                <span className="ai-section__cta-stat-label">Más rápido que análisis manual</span>
              </div>
              <div className="ai-section__cta-stat">
                <span className="ai-section__cta-stat-number">24/7</span>
                <span className="ai-section__cta-stat-label">Monitoreo inteligente continuo</span>
              </div>
            </div>
            <a href="#contacto" className="ai-section__cta-btn">
              Descubra el poder de la IA
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AISection
