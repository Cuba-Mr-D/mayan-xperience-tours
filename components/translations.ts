export const languages = [
  { code: "en", flagAlt: "United States flag", flagSrc: "/flags/us.svg", label: "English" },
  { code: "es", flagAlt: "Mexico flag", flagSrc: "/flags/mx.svg", label: "Español" },
  { code: "fr", flagAlt: "France flag", flagSrc: "/flags/fr.svg", label: "Français" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

export const translations = {
  en: {
    nav: {
      experiences: "Experiences",
      about: "About",
      contact: "Contact",
      languageLabel: "Select language",
    },
    hero: {
      title: "Experience Riviera Maya Like a Local",
      subtitle: "Handpicked tours, hidden gems and unforgettable adventures.",
      exploreTours: "Explore Tours",
      contactUs: "Contact Us",
    },
    popularTours: {
      title: "Most Popular Tours",
      subtitle: "Discover our most requested experiences in the Riviera Maya.",
      viewExperience: "View Experience",
      tours: {
        islaMujeres: "Catamaran sailing, snorkeling and turquoise waters.",
        chichenItza:
          "One of the New Seven Wonders and a symbol of Mayan heritage.",
        tulum: "Clifftop ruins overlooking the Caribbean Sea.",
        cenotes: "Swim in crystal-clear waters surrounded by nature.",
      },
    },
    featuredExperiences: {
      title: "Travel Recommendations",
      subtitle:
        "Not sure where to start? Here are our favorite experiences based on your travel style.",
      groups: [
        {
          title: "💑 Traveling as a Couple?",
          description:
            "Perfect for romantic getaways, breathtaking views and unforgettable moments together.",
          items: ["Isla Mujeres Experience", "Tulum", "Sunset Catamaran"],
        },
        {
          title: "👨‍👩‍👧‍👦 Family Vacation",
          description: "Fun, culture and adventure for travelers of all ages.",
          items: ["Chichen Itza", "Cenotes Experience", "Xel-Há"],
        },
        {
          title: "🎉 Traveling with Friends",
          description:
            "Great for groups looking for fun, adventure and memorable experiences in the Riviera Maya.",
          items: [
            "Isla Mujeres Experience",
            "Cenotes Experience",
            "ATV Adventure",
          ],
        },
      ],
    },
    whyUs: {
      title: "Why Travel With Us?",
      subtitle: "Personalized experiences designed by Riviera Maya experts.",
      reasons: [
        {
          icon: "🌴",
          title: "Local Experts",
          description: "We know the Riviera Maya inside and out.",
        },
        {
          icon: "⭐",
          title: "Top Experiences",
          description: "Only the best tours and activities.",
        },
        {
          icon: "🤝",
          title: "Personal Service",
          description: "Real people helping you every step.",
        },
        {
          icon: "🌎",
          title: "Multilingual",
          description: "English, Spanish and French support.",
        },
      ],
    },
    testimonials: {
      title: "What Our Travelers Say",
      subtitle:
        "Real experiences from guests who explored the Riviera Maya with us.",
      items: [
        {
          quote:
            "Amazing experience in Isla Mujeres. Everything was perfectly organized.",
          author: "Sarah - Canada",
        },
        {
          quote:
            "Daniel helped us choose the perfect tour for our family. Highly recommended.",
          author: "Pierre - France",
        },
        {
          quote:
            "Best service we found in Riviera Maya. Friendly and professional.",
          author: "Michael - USA",
        },
      ],
    },
    contact: {
      title: "Ready to Discover the Riviera Maya?",
      subtitle: "Contact us and we'll help you choose the perfect experience.",
      whatsapp: "📱 Contact on WhatsApp",
      location: "📍 Riviera Maya, Mexico",
    },
    footer: {
      description: "Personalized tours and experiences in Riviera Maya.",
      links: "Experiences • About • Contact",
      rights: "© 2026 Mayan Xperience Tours. All Rights Reserved.",
    },
  },
  es: {
    nav: {
      experiences: "Experiencias",
      about: "Nosotros",
      contact: "Contacto",
      languageLabel: "Seleccionar idioma",
    },
    hero: {
      title: "Vive la Riviera Maya Como Local",
      subtitle:
        "Tours seleccionados, joyas escondidas y aventuras inolvidables.",
      exploreTours: "Explorar Tours",
      contactUs: "Contáctanos",
    },
    popularTours: {
      title: "Tours Más Populares",
      subtitle: "Descubre nuestras experiencias más solicitadas en la Riviera Maya.",
      viewExperience: "Ver Experiencia",
      tours: {
        islaMujeres: "Navegación en catamarán, snorkel y aguas turquesa.",
        chichenItza:
          "Una de las Nuevas Siete Maravillas y símbolo de la herencia maya.",
        tulum: "Ruinas frente al mar Caribe desde lo alto de los acantilados.",
        cenotes: "Nada en aguas cristalinas rodeadas de naturaleza.",
      },
    },
    featuredExperiences: {
      title: "Recomendaciones de Viaje",
      subtitle:
        "¿No sabes por dónde empezar? Estas son nuestras experiencias favoritas según tu estilo de viaje.",
      groups: [
        {
          title: "💑 ¿Viajan en Pareja?",
          description:
            "Perfecto para escapadas románticas, vistas increíbles y momentos inolvidables juntos.",
          items: ["Experiencia Isla Mujeres", "Tulum", "Catamarán al Atardecer"],
        },
        {
          title: "👨‍👩‍👧‍👦 Vacaciones en Familia",
          description: "Diversión, cultura y aventura para viajeros de todas las edades.",
          items: ["Chichén Itzá", "Experiencia en Cenotes", "Xel-Há"],
        },
        {
          title: "🎉 Viaje con Amigos",
          description:
            "Ideal para grupos que buscan diversión, aventura y recuerdos en la Riviera Maya.",
          items: ["Experiencia Isla Mujeres", "Experiencia en Cenotes", "Aventura ATV"],
        },
      ],
    },
    whyUs: {
      title: "¿Por Qué Viajar Con Nosotros?",
      subtitle: "Experiencias personalizadas diseñadas por expertos de la Riviera Maya.",
      reasons: [
        {
          icon: "🌴",
          title: "Expertos Locales",
          description: "Conocemos la Riviera Maya de principio a fin.",
        },
        {
          icon: "⭐",
          title: "Experiencias Destacadas",
          description: "Solo los mejores tours y actividades.",
        },
        {
          icon: "🤝",
          title: "Servicio Personal",
          description: "Personas reales ayudándote en cada paso.",
        },
        {
          icon: "🌎",
          title: "Multilingüe",
          description: "Atención en inglés, español y francés.",
        },
      ],
    },
    testimonials: {
      title: "Lo Que Dicen Nuestros Viajeros",
      subtitle:
        "Experiencias reales de huéspedes que exploraron la Riviera Maya con nosotros.",
      items: [
        {
          quote:
            "Experiencia increíble en Isla Mujeres. Todo estuvo perfectamente organizado.",
          author: "Sarah - Canadá",
        },
        {
          quote:
            "Daniel nos ayudó a elegir el tour perfecto para nuestra familia. Muy recomendado.",
          author: "Pierre - Francia",
        },
        {
          quote:
            "El mejor servicio que encontramos en la Riviera Maya. Amables y profesionales.",
          author: "Michael - EE. UU.",
        },
      ],
    },
    contact: {
      title: "¿Listo Para Descubrir la Riviera Maya?",
      subtitle: "Contáctanos y te ayudaremos a elegir la experiencia perfecta.",
      whatsapp: "📱 Contactar por WhatsApp",
      location: "📍 Riviera Maya, México",
    },
    footer: {
      description: "Tours y experiencias personalizadas en la Riviera Maya.",
      links: "Experiencias • Nosotros • Contacto",
      rights: "© 2026 Mayan Xperience Tours. Todos los derechos reservados.",
    },
  },
  fr: {
    nav: {
      experiences: "Expériences",
      about: "À Propos",
      contact: "Contact",
      languageLabel: "Choisir la langue",
    },
    hero: {
      title: "Vivez la Riviera Maya Comme un Local",
      subtitle:
        "Excursions sélectionnées, trésors cachés et aventures inoubliables.",
      exploreTours: "Explorer les Tours",
      contactUs: "Nous Contacter",
    },
    popularTours: {
      title: "Tours les Plus Populaires",
      subtitle: "Découvrez nos expériences les plus demandées dans la Riviera Maya.",
      viewExperience: "Voir l'Expérience",
      tours: {
        islaMujeres: "Catamaran, snorkeling et eaux turquoise.",
        chichenItza:
          "L'une des Sept Nouvelles Merveilles et un symbole de l'héritage maya.",
        tulum: "Ruines sur les falaises face à la mer des Caraïbes.",
        cenotes: "Nagez dans des eaux cristallines entourées par la nature.",
      },
    },
    featuredExperiences: {
      title: "Recommandations de Voyage",
      subtitle:
        "Vous ne savez pas par où commencer ? Voici nos expériences favorites selon votre style de voyage.",
      groups: [
        {
          title: "💑 Vous Voyagez en Couple ?",
          description:
            "Parfait pour les escapades romantiques, les vues spectaculaires et les moments inoubliables ensemble.",
          items: ["Expérience Isla Mujeres", "Tulum", "Catamaran au Coucher du Soleil"],
        },
        {
          title: "👨‍👩‍👧‍👦 Vacances en Famille",
          description:
            "Divertissement, culture et aventure pour les voyageurs de tous âges.",
          items: ["Chichén Itzá", "Expérience Cenotes", "Xel-Há"],
        },
        {
          title: "🎉 Voyage Entre Amis",
          description:
            "Idéal pour les groupes qui recherchent du plaisir, de l'aventure et de beaux souvenirs dans la Riviera Maya.",
          items: ["Expérience Isla Mujeres", "Expérience Cenotes", "Aventure ATV"],
        },
      ],
    },
    whyUs: {
      title: "Pourquoi Voyager Avec Nous ?",
      subtitle:
        "Des expériences personnalisées conçues par des experts de la Riviera Maya.",
      reasons: [
        {
          icon: "🌴",
          title: "Experts Locaux",
          description: "Nous connaissons la Riviera Maya de fond en comble.",
        },
        {
          icon: "⭐",
          title: "Meilleures Expériences",
          description: "Seulement les meilleurs tours et activités.",
        },
        {
          icon: "🤝",
          title: "Service Personnalisé",
          description: "De vraies personnes vous accompagnent à chaque étape.",
        },
        {
          icon: "🌎",
          title: "Multilingue",
          description: "Assistance en anglais, espagnol et français.",
        },
      ],
    },
    testimonials: {
      title: "Ce Que Disent Nos Voyageurs",
      subtitle:
        "Des expériences réelles de visiteurs qui ont exploré la Riviera Maya avec nous.",
      items: [
        {
          quote:
            "Expérience incroyable à Isla Mujeres. Tout était parfaitement organisé.",
          author: "Sarah - Canada",
        },
        {
          quote:
            "Daniel nous a aidés à choisir le tour parfait pour notre famille. Hautement recommandé.",
          author: "Pierre - France",
        },
        {
          quote:
            "Le meilleur service que nous ayons trouvé dans la Riviera Maya. Accueillant et professionnel.",
          author: "Michael - États-Unis",
        },
      ],
    },
    contact: {
      title: "Prêt à Découvrir la Riviera Maya ?",
      subtitle:
        "Contactez-nous et nous vous aiderons à choisir l'expérience parfaite.",
      whatsapp: "📱 Contacter sur WhatsApp",
      location: "📍 Riviera Maya, Mexique",
    },
    footer: {
      description: "Tours et expériences personnalisés dans la Riviera Maya.",
      links: "Expériences • À Propos • Contact",
      rights: "© 2026 Mayan Xperience Tours. Tous droits réservés.",
    },
  },
} as const;
