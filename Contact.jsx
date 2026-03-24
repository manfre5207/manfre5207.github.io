import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailtoLink = `mailto:animaldefensecol@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          Utilice el siguiente formulario para solicitar más información
        </p>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <h3 className="contact__info-title">Teléfono</h3>
                <a href="tel:+573185568832" className="contact__info-text">+57 318 5568832</a>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <h3 className="contact__info-title">Email</h3>
                <a href="mailto:animaldefensecol@gmail.com" className="contact__info-text">animaldefensecol@gmail.com</a>
              </div>
            </div>

            <div className="contact__info-card">
              <div className="contact__info-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h3 className="contact__info-title">Ubicación</h3>
                <p className="contact__info-text">Colombia</p>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__form-group">
                <label htmlFor="name" className="contact__label">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="contact__input"
                  placeholder="Su nombre"
                />
              </div>
              <div className="contact__form-group">
                <label htmlFor="email" className="contact__label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="contact__input"
                  placeholder="su@email.com"
                />
              </div>
            </div>
            <div className="contact__form-group">
              <label htmlFor="subject" className="contact__label">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="contact__input"
                placeholder="Asunto del mensaje"
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="message" className="contact__label">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="contact__input contact__textarea"
                placeholder="Escriba su mensaje aquí..."
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="contact__submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
