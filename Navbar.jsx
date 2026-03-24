import { useState, useEffect } from 'react'
import './Navbar.css'

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'ia', label: 'IA' },
  { id: 'servicios', label: 'Servicios' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['contacto', 'servicios', 'ia', 'nosotros', 'inicio']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const handleClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        <a href="#inicio" className="navbar__logo" onClick={() => handleClick('inicio')}>
          <img
            src="/Logo versiones Animal defense Q-02.png"
            alt="Animal Defense S.A.S"
            className="navbar__logo-img"
          />
        </a>

        <button
          className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-label="Menú de navegación"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__menu ${isOpen ? 'navbar__menu--open' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`navbar__link ${activeSection === item.id ? 'navbar__link--active' : ''}`}
                onClick={() => handleClick(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              className={`navbar__link navbar__link--cta ${activeSection === 'contacto' ? 'navbar__link--cta-active' : ''}`}
              onClick={() => handleClick('contacto')}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
