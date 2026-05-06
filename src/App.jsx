import { useState, useEffect, useRef } from 'react'
import Lottie from 'lottie-react' // <-- Librería instalada para iconos animados (Lottie/Flaticon)
import logoPng from './logo.png'
import suero1Png from './assets/detox.png'
import suero2Png from './assets/conjuntosueros.png'
import suero3Png from './assets/conjuntosueros2.png'
import suero5Png from './assets/suero1.png'
import principal2Png from './assets/principal2.png'
import fondoPng from './assets/fondo.png'

// Nuevas imágenes específicas
import detoxPng from './assets/detox1.png'
import dolorPng from './assets/dolor.png'
import cansancioPng from './assets/cansancioestres.png'
import metabolismoPng from './assets/metabolismo.png'
import pielPng from './assets/piel_radiante.png'
import alcoholPng from './assets/noalcohol.png'
import resacaPng from './assets/resaca.png'

import './App.css'

// EJEMPLO: Cuando descargues el archivo JSON animado de Flaticon, guárdalo en la carpeta src/assets/
// y luego impórtalo aquí arriba así:
// import animacionGota from './assets/gota.json'

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
      name: "Limpieza Inicial / Detox",
      icon: "droplet",
      image: detoxPng,
      description: "Limpia tu organismo de toxinas acumuladas. Esta terapia está diseñada para purificar tu cuerpo, mejorar la función hepática y restaurar el equilibrio interno.",
      benefits: ["Prepara tu cuerpo y maximiza los resultados de tus terapias.", "Eliminación de toxinas", "Sensación de ligereza"]
    },
    {
      id: 2,
      name: "Dolor",
      icon: "heart",
      image: dolorPng,
      description: "Tratamientos especializados para el manejo del dolor crónico y agudo. Nuestro enfoque integral ayuda a reducir la inflamación y mejorar tu calidad de vida.",
      effects: ["Reducción de inflamaciones", "Alivio muscular", "Mejora de movilidad", "Complemento al tratamiento médico"]
    },
    {
      id: 3,
      name: "Cansancio y estrés",
      icon: "battery",
      image: cansancioPng,
      description: " combatimos la fatiga crónica y el agotamiento con terapias especializadas. Recupera tu energia natural y vuelve a sentirte completo y con fuerza.",
      benefits: ["Recuperación de energía", "Mejora del descanso", "Reducción del estrés", "Vitalidad sostenida"]
    },
    {
      id: 4,
      name: "Fortalece tus defensas",
      icon: "energy",
      image: suero2Png,
      description: "Fortalece tus defensas naturales. Ideal para prevenir enfermedades y acelerar la recuperación de resfriados.",
      benefits: ["Aumento de defensas", "Prevención de virus", "Poder antioxidante", "Recuperación rápida"]
    },
    {
      id: 5,
      name: "Metabolismo activo",
      icon: "weight",
      image: metabolismoPng,
      description: "Activa tu metabolismo desde adentro optimizando el funcionamiento celular, potenciando la capacidad del cuerpo para procesar nutrientes y eliminar lo que no necesita.",
      benefits: ["Acelera el metabolismo", "Complemento ideal para la perdida de peso", "Regula el apetito", "Mejora la composición corporal"]
    },
    {
      id: 6,
      name: "Piel Radiante",
      icon: "skin",
      image: pielPng,
      description: "Busca la belleza desde el interior, limpiando a nivel celular para que la piel recupere su brillo y salud.",
      benefits: ["Regeneración del tejido", "Ayuda a drenar toxinas que están bajo la piel", "Reduce el acné y las manchas", "Luminosidad celular"]
    },
    {
      id: 7,
      name: "Abstinencia de alcohol",
      icon: "alcohol",
      image: alcoholPng,
      description: "Para personas que consumen alcohol de forma regular, deseen limpiar su organismo y reducir la ansiedad por el consumo .",
      benefits: ["Desintoxicación del organismo", "Repara y protege las celulas del higado", "Limpia residuos del alcohol y reactiva la energia", "Mejora el estado del animo y reduce la ansiedad"]
    },
    {
      id: 8,
      name: "Antiresaca / Guayabo",
      icon: "hangover",
      image: resacaPng,
      description: "Recuperación rápida después de una noche larga. Rehidrata tu cuerpo inmediatamente, alivia el dolor de cabeza y elimina las náuseas para que vuelvas a tu día.",
      benefits: ["Valor: $80.000", "Rehidratación rápida", "Alivio de náuseas", "Adiós al dolor de cabeza", "Acelera la descomposición de toxinas"],
      highlight: true,
      highlightText: "Más económico"
    }
  ]

  const steps = [
    { number: "1", title: "Agenda tu cita", description: "Contáctanos por WhatsApp y programa tu sesión" },
    { number: "2", title: "Valoración de Enfermería", description: "Valoramos tu estado de salud y necesidades" },
    { number: "3", title: "Aplicación del tratamiento", description: "Recibirás tu terapia de forma segura y cómoda" },
    { number: "4", title: "Seguimiento", description: "Te acompañamos en todo tu proceso de bienestar" }
  ]

  const faqs = [
    {
      question: "¿Qué es la sueroterapia?",
      answer: "Es un tratamiento avanzado de bienestar que consiste en la administración de nutrientes y medicamentos especializados directamente en el torrente sanguíneo. En Jaravital Infusion Care trabajamos exclusivamente con medicamentos de laboratorios Heel (Alemania), líderes mundiales en medicina biorreguladora. Todos nuestros productos cuentan con registro INVIMA, lo que garantiza que estás recibiendo sustancias de la más alta calidad, seguras y certificadas para el cuidado de tu salud."
    },
    {
      question: "¿La aplicación del suero duele?",
      answer: "Es una pequeña molestia inicial ya que es necesario canalizar un acceso venoso, pero como enfermera profesional, utilizo catéteres de calibre muy pequeño (especiales para este tipo de terapias) para que la punción sea casi imperceptible. Mi objetivo es que tu sesión sea un momento de relajación y descanso."
    },
    {
      question: "¿Cuánto dura cada sesión?",
      answer: "Dependiendo del protocolo elegido, el suero tarda en pasar entre 60 y 90 minutos. Durante este tiempo, puedes estar cómodamente en tu sofá, trabajando en tu computador o simplemente descansando."
    },
    {
      question: "¿Desde cuándo veré los resultados?",
      answer: "Muchos pacientes sienten una mejora en sus niveles de energía e hidratación de forma inmediata o a las pocas horas de la sesión. Sin embargo, para protocolos específicos como el de Piel Radiante o Metabolismo Activo, los resultados óptimos se observan a partir de la tercera sesión."
    },
    {
      question: "¿Es seguro aplicar estos medicamentos?",
      answer: "Totalmente. Al trabajar exclusivamente con Laboratorios Heel, estamos utilizando medicina biorreguladora alemana que respeta los procesos naturales del cuerpo. Además, el registro INVIMA y mi valoración clínica inicial garantizan un procedimiento bajo los más altos estándares de seguridad. En caso de presentarse una reacción alérgica, lo cual es poco común, como enfermera profesional cuento con los conocimientos, habilidades e insumos para atenderla."
    },
    {
      question: "¿Hay alguna contraindicación?",
      answer: "Aunque son tratamientos muy seguros, realizo una valoración de enfermería previa para identificar casos específicos y en donde sea necesario ajustar el protocolo. Siempre priorizamos tu bienestar.",
      listTitle: "NO SE REALIZA EN:",
      list: [
        "niños menores de 14 años.",
        "embarazo y lactancia.",
        "insuficiencia renal grave.",
        "enfermedades autoinmunes con previa autorización de su medico tratante, los sueros mas recomendados en estos casos serian Limpieza inicial/detox y manejo del dolor."]
    }
  ]

  const getArrow = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )

  const packages = [
    {
      name: "Sesión Vital",
      price: "$210.000",
      features: ["1 sesión de sueroterapia", "Valoración inicial", "Seguimiento personalizado", "Atención en la comodidad de tu hogar", "Domicilio incluido"],
      highlight: false
    },
    {
      name: "Plan Vecino",
      price: "$380.000",
      features: ["2 personas, 1 sesión para cada una", "Valoración inicial", "Seguimiento personalizado", "Domicilio incluido", "Si agendas 2 personas ó más en el mismo lugar, cada sesión tendría un valor de $190.000"],
      highlight: true
    },
    {
      name: "Plan Equilibrio",
      originalPrice: "$1'050.000",
      price: "$900.000",
      savings: "Ahorra $150.000",
      features: ["5 sesiones de sueroterapia", "Valoración inicial", "Seguimiento personalizado", "Domicilio incluido", "Paga en 2 cuotas de $450.000, en tu primera y tercera sesión"],
      highlight: false
    },
    {
      name: "Plan Premium",
      originalPrice: "$1'470.000",
      price: "$1'250.000",
      savings: "Ahorra $220.000",
      features: ["7 sesiones de sueroterapia", "Valoración inicial", "Seguimiento personalizado", "Domicilio incluido", "Paga en 3 cuotas, en tu primera sesión pagas $500.000, en la tercera y quinta sesión pagas $400.000", "Al tomar este plan recibes una Sesión Vital para un referido con el 50% de descuento"],
      highlight: false
    }
  ]

  const getIcon = (type) => {
    const icons = {
      droplet: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      ),
      energy: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      battery: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
          <line x1="23" y1="10" x2="23" y2="14" />
          <line x1="5" y1="10" x2="5" y2="14" />
          <line x1="9" y1="10" x2="9" y2="14" />
          <line x1="13" y1="10" x2="13" y2="14" />
        </svg>
      ),
      heart: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      weight: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="3" />
          <path d="M12 5H7a1 1 0 0 0-.96.73L4 13h16l-2.04-7.27A1 1 0 0 0 17 5h-5z" />
          <rect x="2" y="13" width="20" height="8" rx="2" />
          <line x1="8" y1="17" x2="8" y2="17" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="17" x2="16" y2="17" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      skin: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5z" />
          <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8z" />
          <path d="M5 17l.5 1.5L7 19l-1.5.5L5 21l-.5-1.5L3 19l1.5-.5z" />
        </svg>
      ),
      alcohol: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 2h8l-1 7H9z" />
          <path d="M9 9c0 0-3 3-3 6a6 6 0 0 0 12 0c0-3-3-6-3-6" />
          <line x1="12" y1="15" x2="12" y2="21" />
          <line x1="9" y1="21" x2="15" y2="21" />
        </svg>
      ),
      hangover: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      )
    }
    return icons[type]
  }

  return (
    <div className="app">
      <section className="hero" style={{ backgroundImage: `url(${principal2Png})`, backgroundPosition: 'center top' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <img src={logoPng} alt="JARAVITAL" className="hero-logo" />
          <h1>JARAVITAL</h1>
          <h2>INFUSION CARE</h2>
          <div className="professional">
            <h3 className="prof-name">Tatiana Jaramillo</h3>
            <p className="title">Enfermera Profesional</p>
            <div className="hero-hook-container">
              <p className="hero-hook-main">
                Nutrición celular directa a tu torrente sanguíneo, <span className="highlight">sin salir de casa.</span>
              </p>
              <p className="hero-hook-sub">
                En Jaravital Infusion Care combinamos la tecnología de los laboratorios <strong>Heel</strong> con la seguridad del respaldo <strong>INVIMA</strong> para ofrecerte resultados inmediatos con la mayor comodidad.
              </p>
            </div>
            <a href={`https://wa.me/${tatianaPhone}`} className="hero-button">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {tatianaPhone}
            </a>

            <div className="hero-logos-inline fade-in">
              <p className="logos-title">Con el respaldo y seguridad de:</p>
              <div className="logos-container">
                <div className="logo-box">
                  <img src="/Invima-logo.jpg" alt="INVIMA" className="trust-logo invima-logo" />
                </div>
                <div className="logo-box bg-white">
                  <img src="/heellogo.png" alt="Laboratorios Heel" className="trust-logo heel-logo" />
                </div>
              </div>
            </div>

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
                {index === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" /></svg>}
                {index === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /><circle cx="12" cy="12" r="10" /></svg>}
                {index === 3 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="services fade-in">
        <h2>Nuestros Servicios</h2>
        <h2>Sueroterapias</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`service-card fade-in stagger-${index + 1} ${service.highlight ? 'highlight' : ''}`}
              onClick={() => setSelectedService(service)}
            >
              {service.highlight && <span className="popular-badge">{service.highlightText || "Más popular"}</span>}
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
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
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
              <div className="pkg-header">
                <h3>{pkg.name}</h3>
                {pkg.originalPrice && <span className="original-price">{pkg.originalPrice}</span>}
                <p className="price">{pkg.price}</p>
                {pkg.savings && <span className="savings">{pkg.savings}</span>}
              </div>
              <ul>
                {pkg.features.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
              <a href={`https://wa.me/${tatianaPhone}?text=Hola, me interesa el ${pkg.name}`} className="hero-button">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Reservar
              </a>
            </div>
          ))}
        </div>
        <p className="packages-note">
          📍 ¿Vives en Guarne ó Santa Elena? Aprovecha nuestro precio especial para la comunidad local: $190.000 por Sesión Vital.
        </p>
      </section>

      <section className="faq fade-in">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item fade-in stagger-${(index % 4) + 1}`}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
              {faq.listTitle && <p className="faq-list-title">{faq.listTitle}</p>}
              {faq.list && (
                <ul className="faq-list">
                  {faq.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 JARAVITAL</p>
      </footer>
    </div>
  )
}

export default App