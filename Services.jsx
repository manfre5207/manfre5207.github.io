import { useState } from 'react'
import './Services.css'

const servicesData = [
  {
    id: 1,
    category: 'servicios',
    title: 'Necropsia',
    description: 'Investigación postmortem precisa para determinar causa y manera de muerte en animales, esencial en casos legales y clínicos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    id: 2,
    category: 'servicios',
    title: 'Clínica Forense',
    description: 'Servicios integrales para la evaluación y documentación de lesiones en animales con fines legales y médicos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    id: 3,
    category: 'servicios',
    title: 'Laboratorio',
    description: 'Laboratorio Forense Veterinario. Análisis científico especializado en toxicología, patología y genética.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6v11l4 7H5l4-7V3z"/>
        <path d="M9 3h6"/>
      </svg>
    ),
  },
  {
    id: 4,
    category: 'servicios',
    title: 'Otros Servicios Médico Legales',
    description: 'Expertos en exhumaciones, peritajes, análisis de proyectiles, investigación de responsabilidad médica y servicios de testigo experto. Soluciones científicas y legales para casos complejos en el ámbito veterinario y forense.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    id: 5,
    category: 'aasis',
    title: 'AASIS® Granjas',
    description: 'Plataforma con IA para gestionar información sanitaria y epidemiológica en granjas. Modelos predictivos que identifican riesgos de enfermedades y algoritmos de machine learning que optimizan la toma de decisiones estratégicas en tiempo real.',
    image: '/images/aasis/LOGO AASIS GRANJA.png',
  },
  {
    id: 6,
    category: 'aasis',
    title: 'AASIS® Plantas de Beneficio',
    description: 'Sistema inteligente potenciado con IA que integra datos de movilización, manejo, procesamiento y necropsia de animales. Algoritmos de detección de anomalías que previenen pérdidas económicas y generan decisiones basadas en datos en plantas de beneficio.',
    image: '/images/aasis/LOGO AASIS PLANTAS DE BENEFICIO.png',
  },
  {
    id: 7,
    category: 'aasis',
    title: 'AASIS® Bienestar Animal',
    description: 'Plataforma avanzada con inteligencia artificial para gestionar datos de programas de protección animal. Utiliza analítica de datos con IA, criminología táctica computacional y modelos predictivos para identificar, prevenir y reducir actos violentos contra animales y personas.',
    image: '/images/aasis/LOGO AASIS BIENESTAR ANIMAL.png',
  },
]

const filters = [
  { key: 'todos', label: 'Todos' },
  { key: 'servicios', label: 'Servicios' },
  { key: 'aasis', label: 'AASIS®' },
]

const Services = () => {
  const [activeFilter, setActiveFilter] = useState('todos')

  const filteredServices = activeFilter === 'todos'
    ? servicesData
    : servicesData.filter(s => s.category === activeFilter)

  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Soluciones integrales con inteligencia artificial en investigación forense veterinaria
        </p>

        <div className="services__filters">
          {filters.map(f => (
            <button
              key={f.key}
              className={`services__filter ${activeFilter === f.key ? 'services__filter--active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="services__grid">
          {filteredServices.map(service => (
            <div key={service.id} className="services__card">
              {service.image ? (
                <div className="services__card-logo">
                  <img src={service.image} alt={service.title} />
                </div>
              ) : (
                <div className="services__card-icon">
                  {service.icon}
                </div>
              )}
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.description}</p>
              <div className="services__card-tag">
                {service.category === 'aasis' ? 'IA + Software' : 'Forense'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
