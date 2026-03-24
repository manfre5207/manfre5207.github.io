import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img
                src="/Logo versiones Animal defense Q-06.png"
                alt="Animal Defense S.A.S"
                className="footer__logo-img"
              />
            </div>
            <p className="footer__description">
              Líderes en servicios médico legales y forenses veterinarios en Colombia. 
              Tecnología avanzada y experiencia científica al servicio del bienestar animal.
            </p>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Servicios</h4>
            <ul>
              <li><a href="#servicios">Necropsia</a></li>
              <li><a href="#servicios">Clínica Forense</a></li>
              <li><a href="#servicios">Laboratorio</a></li>
              <li><a href="#servicios">AASIS® Software</a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h4 className="footer__heading">Contacto</h4>
            <ul>
              <li>
                <a href="tel:+573185568832">+57 318 5568832</a>
              </li>
              <li>
                <a href="mailto:animaldefensecol@gmail.com">animaldefensecol@gmail.com</a>
              </li>
              <li>Colombia</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>Copyright &copy; {currentYear} Animal Defense S.A.S. Todos los derechos reservados.</p>
          <p className="footer__credits">Desarrollado por Gnomon Tech SAS</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
