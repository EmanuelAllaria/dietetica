export const site = {
  name: "Vitalia Nutrición",
  tagline: "Nutrición con ciencia, bienestar con alma",
  description:
    "Consultorio de nutrición en Buenos Aires. Planes personalizados, seguimiento profesional y un enfoque integral para transformar tu relación con la alimentación.",
  url: "https://vitalianutricion.com",
  email: "hola@vitalianutricion.com",
  phone: "+54 11 4567-8901",
  whatsapp: "5491145678901",
  instagram: "@vitalianutricion",
  address: "Av. Santa Fe 2847, Palermo, CABA",
};

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export const hero = {
  badge: "+520 pacientes transformados",
  title: ["Nutrición con ciencia,", "bienestar con alma."],
  subtitle:
    "Descubrí un enfoque integral de alimentación que respeta tu cuerpo, tu ritmo y tus objetivos. Sin dietas extremas, con resultados reales.",
  ctaPrimary: "Reservar consulta",
  ctaSecondary: "Ver servicios",
};

export const about = {
  label: "Sobre nosotros",
  title: "Conocé a la Dra. Camila Ríos",
  paragraphs: [
    "Con más de 8 años de experiencia clínica, la Dra. Camila Ríos fundó Vitalia con una convicción simple: la nutrición no es castigo, es cuidado.",
    "Especializada en nutrición clínica, deportiva y materno-infantil, combina evidencia científica con un trato humano y cercano que marca la diferencia en cada consulta.",
    "Su enfoque integral considera no solo lo que comés, sino cómo vivís, dormís, te movés y te relacionás con la comida.",
  ],
  credentials: [
    "Lic. en Nutrición — UBA",
    "Especialización en Nutrición Deportiva",
    "Posgrado en Trastornos de la Conducta Alimentaria",
    "Miembro de la Asociación Argentina de Dietistas",
  ],
  image:
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
};

export const services = {
  label: "Servicios",
  title: "Acompañamiento nutricional a tu medida",
  subtitle:
    "Cada persona es única. Por eso diseñamos intervenciones personalizadas para cada etapa de tu vida.",
  items: [
    {
      icon: "ClipboardList",
      title: "Consulta inicial",
      description:
        "Evaluación completa de tu estado nutricional, historial clínico y objetivos personales.",
    },
    {
      icon: "Utensils",
      title: "Plan personalizado",
      description:
        "Menú adaptado a tus gustos, rutina y necesidades con recetas prácticas y flexibles.",
    },
    {
      icon: "Video",
      title: "Seguimiento online",
      description:
        "Controles periódicos por videollamada para ajustar tu plan y resolver dudas en tiempo real.",
    },
    {
      icon: "Dumbbell",
      title: "Nutrición deportiva",
      description:
        "Optimización del rendimiento y recuperación para atletas amateur y profesionales.",
    },
    {
      icon: "Baby",
      title: "Embarazo y lactancia",
      description:
        "Acompañamiento nutricional especializado para cada trimestre y la etapa de lactancia.",
    },
    {
      icon: "Users",
      title: "Talleres grupales",
      description:
        "Encuentros sobre alimentación consciente, meal prep y educación nutricional.",
    },
  ],
};

export const process = {
  label: "Proceso",
  title: "Cómo trabajamos juntos",
  subtitle: "Un camino claro y acompañado hacia tus objetivos de salud.",
  steps: [
    {
      number: "01",
      title: "Evaluación",
      description:
        "Analizamos tu historial, hábitos, estudios médicos y objetivos en una consulta de 60 minutos.",
    },
    {
      number: "02",
      title: "Plan a medida",
      description:
        "Diseñamos tu plan nutricional personalizado con menús, listas de compras y recetas.",
    },
    {
      number: "03",
      title: "Seguimiento",
      description:
        "Controles regulares para ajustar, resolver dudas y mantener la motivación alta.",
    },
    {
      number: "04",
      title: "Resultados",
      description:
        "Alcanzá tus metas con herramientas que perduran: educación, autonomía y bienestar.",
    },
  ],
};

export const stats = [
  { value: 8, suffix: "+", label: "Años de experiencia" },
  { value: 520, suffix: "+", label: "Pacientes atendidos" },
  { value: 94, suffix: "%", label: "Satisfacción" },
  { value: 1200, suffix: "+", label: "Planes entregados" },
];

export const testimonials = {
  label: "Testimonios",
  title: "Lo que dicen nuestros pacientes",
  items: [
    {
      name: "María González",
      role: "Paciente desde 2023",
      text: "Llegué agotada de probar dietas que no funcionaban. Camila me enseñó a comer sin culpa y bajé 12 kg en 6 meses, pero lo mejor es que me siento con energía por primera vez en años.",
      rating: 5,
    },
    {
      name: "Lucas Fernández",
      role: "Atleta amateur",
      text: "Mi rendimiento en el running mejoró notablemente. El plan deportivo fue clave para mi maratón de Buenos Aires. Profesionalismo y calidez en cada consulta.",
      rating: 5,
    },
    {
      name: "Valentina Ruiz",
      role: "Mamá primeriza",
      text: "El acompañamiento durante mi embarazo fue invaluable. Me sentí segura y bien nutrida en cada etapa. Totalmente recomendable para futuras mamás.",
      rating: 5,
    },
    {
      name: "Andrés Morales",
      role: "Paciente online",
      text: "Vivo en el interior y el seguimiento online funciona perfecto. Las videollamadas son igual de completas que presencial. Excelente inversión en mi salud.",
      rating: 5,
    },
  ],
};

export const pricing = {
  label: "Precios",
  title: "Planes transparentes, sin sorpresas",
  subtitle: "Elegí el plan que mejor se adapte a tus necesidades y objetivos.",
  toggle: { presencial: "Presencial", online: "Online" },
  plans: [
    {
      name: "Consulta única",
      price: 45000,
      period: "por sesión",
      description: "Ideal para una evaluación puntual o segunda opinión.",
      features: [
        "Consulta de 60 minutos",
        "Evaluación antropométrica",
        "Plan nutricional básico",
        "Material educativo",
      ],
      highlighted: false,
    },
    {
      name: "Plan mensual",
      price: 85000,
      period: "por mes",
      description: "El más elegido. Acompañamiento continuo con resultados sostenibles.",
      features: [
        "Consulta inicial completa",
        "2 controles mensuales",
        "Plan personalizado detallado",
        "Soporte por WhatsApp",
        "Recetario digital",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: 120000,
      period: "por mes",
      description: "Máximo acompañamiento para objetivos ambiciosos.",
      features: [
        "Todo del plan mensual",
        "4 controles mensuales",
        "Análisis de composición corporal",
        "Ajustes semanales del plan",
        "Acceso a talleres exclusivos",
      ],
      highlighted: false,
    },
  ],
};

export const faq = {
  label: "Preguntas frecuentes",
  title: "Resolvemos tus dudas",
  items: [
    {
      question: "¿Necesito estudios médicos previos para la consulta?",
      answer:
        "No es obligatorio, pero si tenés análisis de sangre recientes (últimos 6 meses), traerlos enriquece la evaluación. Si no los tenés, te indicamos cuáles solicitar según tu caso.",
    },
    {
      question: "¿Las consultas online son igual de efectivas?",
      answer:
        "Sí. Las videollamadas permiten una evaluación completa. Solo necesitás una balanza, cinta métrica y buena conexión a internet. Muchos pacientes del interior eligen esta modalidad.",
    },
    {
      question: "¿Hacen dietas para bajar de peso rápido?",
      answer:
        "No trabajamos con dietas restrictivas ni milagrosas. Nuestro enfoque busca resultados sostenibles a través de cambios graduales que podés mantener en el tiempo.",
    },
    {
      question: "¿Atienden obras sociales o prepagas?",
      answer:
        "Trabajamos de forma particular. Emitimos factura para que puedas gestionar el reintegro con tu prepaga u obra social, según tu cobertura.",
    },
    {
      question: "¿Cuánto dura cada consulta?",
      answer:
        "La consulta inicial dura aproximadamente 60 minutos. Los controles de seguimiento duran entre 30 y 45 minutos, según la complejidad del caso.",
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer:
        "Por supuesto. Podés actualizar o modificar tu plan según evolucionen tus necesidades. Solo necesitás avisar con 7 días de anticipación.",
    },
  ],
};

export const contact = {
  label: "Contacto",
  title: "Empezá tu transformación hoy",
  subtitle:
    "Escribinos y te respondemos en menos de 24 horas. Tu primer paso hacia una vida más saludable está a un mensaje de distancia.",
  form: {
    name: "Nombre completo",
    email: "Correo electrónico",
    type: "Tipo de consulta",
    message: "Contanos sobre vos y tus objetivos",
    submit: "Enviar mensaje",
    types: [
      "Consulta inicial",
      "Nutrición deportiva",
      "Embarazo y lactancia",
      "Seguimiento online",
      "Talleres grupales",
      "Otro",
    ],
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.016887889525!2d-58.405!3d-34.587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDM1JzEzLjIiUyA1OMKwMjQnMTguMCJX!5e0!3m2!1ses!2sar!4v1",
};

export const footer = {
  description:
    "Transformamos vidas a través de la nutrición consciente, basada en evidencia y adaptada a cada persona.",
  links: [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Precios", href: "#precios" },
    { label: "Contacto", href: "#contacto" },
  ],
  legal: "© 2026 Vitalia Nutrición. Todos los derechos reservados. Sitio de demostración.",
};
