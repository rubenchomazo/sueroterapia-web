import { useState, useEffect, useRef } from 'react'
import logoPng from './logo.png'
import suero1Png from './assets/suero1.png'
import suero2Png from './assets/conjuntosueros.png'
import suero3Png from './assets/conjuntosueros2.png'
import principal2Png from './assets/principal2.png'
import fondoPng from './assets/fondo.png'
import './App.css'

function App() {
  const tatianaPhone = "3014093245"
  const [selectedService, setSelectedService] = useState(null)
  const stepsRef = useRef(null)
  const servicesRef = useRef(null)
  const faqRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

const services = [
    {
      id: 1,
      name: "Suero Terapias",
      icon: "droplet",
      image: suero1Png,
      description: "Tratamientos personalizados de sueroterapia adaptados a tus necesidades específicas. Restauramos tu bienestar mediante la administración de vitaminas, minerales y nutrientes directamente en tu organismo.",
      benefits: ["Hidratación profunda", "Reparación celular", "Mejora del sistema inmune", "Tratamiento personalizado"]
    },
    {
      id: 2,
      name: "Revitalizar",
      icon: "energy",
      image: suero2Png,
      description: "Dale a tu cuerpo la energía que necesita para recuperar su vitalidad óptima. Nuestros tratamientos revitalizantes combaten el agotamiento y devuelven el brillo natural a tu piel y cabello.",
      benefits: ["Aumento de energía", "Piel más luminosa", "Cabello fortalecimiento", "Rejuvenecimiento general"]
    },
    {
      id: 3,
      name: "Cansancio",
      icon: "battery",
      image: suero2Png,
      description: " combatimos la fatiga crónica y el agotamiento con terapias especializadas. Recupera tu energia natural y vuelve a sentirte penuh (completo) y con fuerza.",
      benefits: ["Recuperación de energía", "Mejora del descanso", "Reducción del estrés", "Vitalidad sostenida"]
    },
    {
      id: 4,
      name: "Dolor",
      icon: "heart",
      image: suero3Png,
      description: "Tratamientos especializados para el manejo del dolor crónico y agudo. Nuestro enfoque integral ayuda a reducir la inflamación y mejorar tu calidad de vida.",
      effects: ["Reducción de inflamaciones", "Alivio muscular", "Mejora de movilidad", "Complemento al tratamiento médico"]
    }
  ]

const steps = [
    { number: "1", title: "Agenda tu cita", description: "Contáctanos por WhatsApp y programa tu sesión" },
    { number: "2", title: "Evaluación médica", description: "Valoramos tu estado de salud y necesidades" },
    { number: "3", title: "Aplicación del tratamiento", description: "Recibirás tu terapia de forma segura y cómoda" },
    { number: "4", title: "Seguimiento", description: "Te acompañamos en todo tu proceso de bienestar" }
  ]

  const faqs = [
    { question: "¿Qué es la sueroterapia?", answer: "La sueroterapia o terapia intravenosa es un tratamiento que introduce vitaminas, minerales y nutrientes directamente en el torrente sanguíneo para una absorción óptima y rápidos resultados." },
    { question: "¿Es seguro?", answer: "Sí, todos los tratamientos son administrados por profesionales de la salud altamente capacitados. Usamos productos de grado farmacéutico y seguilos protocolos de seguridad." },
    { question: "¿Cuánto dura cada sesión?", answer: "Las sesiones varían entre 30 minutos a 2 horas dependiendo del tratamiento. Te informamos previamente sobre el tiempo estimado." },
    { question: "¿Necesito cita previa?", answer: "Sí, es necesario agendar una cita previa. Contáctanos por WhatsApp para programar tu sesión y recibir información detallada." },
    { question: "¿Hay efectos secundarios?", answer: "Los efectos secundarios son mínimos y raros. Puede haber leve molestia en el sitio de aplicación o ligeros mareos temporales." },
    { question: "¿Quién puede recibir tratamiento?", answer: "La mayoría de adultos saludables pueden recibir tratamiento. Realizamos una evaluación médica previa para déterminer si es适合 para ti." }
  ]

  const getArrow = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  )

  const packages = [
    { 
      name: "Sesión individual", 
      price: "$150.000", 
      features: ["1 sesión de sueroterapia", "Valoración inicial", "Seguimiento post-tratamiento"],
      highlight: false
    },
    { 
      name: "Pack Basic", 
      originalPrice: "$500.000",
      price: "$450.000", 
      savings: "Ahorra $50.000",
      features: ["4 sesiones de sueroterapia", "Valoración inicial", "Seguimiento personalizado", "Tratamiento personalizado"],
      highlight: false
    },
    { 
      name: "Pack Premium", 
      originalPrice: "$900.000",
      price: "$750.000", 
      savings: "Ahorra $150.000",
      features: ["8 sesiones de sueroterapia", "Valoración inicial", "Seguimiento VIP", "Tratamiento personalizado", "-kit de mantenimiento"],
      highlight: true
    }
  ]

  const getIcon = (type) => {
    const icons = {
      droplet: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
        </svg>
      ),
      energy: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      battery: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="6" width="18" height="12" rx="2" ry="2"/>
          <line x1="23" y1="10" x2="23" y2="14"/>
          <line x1="5" y1="10" x2="5" y2="14"/>
          <line x1="9" y1="10" x2="9" y2="14"/>
          <line x1="13" y1="10" x2="13" y2="14"/>
        </svg>
      ),
      heart: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      )
    }
    return icons[type]
  }

  return (
    <div className="app">
      <section className="hero" style={{ backgroundImage: `url(${principal2Png})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <img src={logoPng} alt="JARAVITAL" className="hero-logo" />
          <h1>JARAVITAL</h1>
          <h2>INFUSION CARE</h2>
          <div className="professional">
            <h3 className="prof-name">Tatiana Jaramillo</h3>
            <p className="title">Enfermera Profesional</p>
            <a href={`https://wa.me/${tatianaPhone}`} className="hero-button">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {tatianaPhone}
            </a>
          </div>
        </div>
      </section>

      <section className="steps fade-in">
        <h2>¿Cómo funciona?</h2>
        <div className="steps-grid">
          {steps.map((step, index) => (
            <div key={step.number} className={`step-card fade-in stagger-${index + 1}`}>
              <div className="step-icon">
                {index === 0 && getArrow()}
                {index === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>}
                {index === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="10"/></svg>}
                {index === 3 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services fade-in">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`service-card fade-in stagger-${index + 1}`}
              onClick={() => setSelectedService(service)}
            >
              {service.image && (
                <img src={service.image} alt={service.name} className="card-image" />
              )}
              <div className="service-icon">
                {getIcon(service.icon)}
              </div>
              <p>{service.name}</p>
            </div>
          ))}
        </div>
        <img src={fondoPng} alt="" className="services-fondo" />
      </section>

      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="modal-icon">
              {getIcon(selectedService.icon)}
            </div>
            {selectedService.image && (
              <img src={selectedService.image} alt={selectedService.name} className="modal-image" />
            )}
            <h3>{selectedService.name}</h3>
            <p className="modal-description">{selectedService.description}</p>
            <div className="modal-benefits">
              <h4>Beneficios:</h4>
              <ul>
                {selectedService.benefits && selectedService.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
                {selectedService.effects && selectedService.effects.map((effect, i) => (
                  <li key={i}>{effect}</li>
                ))}
              </ul>
            </div>
            <a href={`https://wa.me/${tatianaPhone}?text=Hola, me interesa el servicio de ${selectedService.name}`} className="hero-button modal-button">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Contactar
            </a>
          </div>
        </div>
      )}

      <section className="packages fade-in">
        <h2>Nuestros Paquetes</h2>
        <div className="packages-grid">
          {packages.map((pkg, i) => (
            <div key={i} className={`package-card ${pkg.highlight ? 'highlight' : ''} fade-in stagger-${(i % 3) + 1}`}>
              {pkg.highlight && <span className="popular-badge">Más popular</span>}
              <h3>{pkg.name}</h3>
              {pkg.originalPrice && <span className="original-price">{pkg.originalPrice}</span>}
              <p className="price">{pkg.price}</p>
              {pkg.savings && <span className="savings">{pkg.savings}</span>}
              <ul>
                {pkg.features.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
              <a href={`https://wa.me/${tatianaPhone}?text=Hola, me interesa el ${pkg.name}`} className="hero-button">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Reservar
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="faq fade-in">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item fade-in stagger-${(index % 4) + 1}`}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 JARAVITAL - Tatiana Jaramillo</p>
      </footer>
    </div>
  )
}

export default App