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
      viewAllPrompt: "Discover more unforgettable experiences",
      viewAllExperiences: "View All Experiences",
      badges: {
        islaMujeres: "Best Seller",
        chichenItza: "World Wonder",
        tulum: "Caribbean History",
        cenotes: "Nature Experience",
      },
      highlights: {
        islaMujeres: "Catamaran • Snorkeling • Turquoise Waters • Playa Norte",
        chichenItza: "Mayan Ruins • Cenote • Regional Buffet • Valladolid",
        tulum: "Clifftop Ruins • Caribbean Views • Mayan Culture",
        cenotes: "Crystal-Clear Water • Swimming • Nature • Adventure",
      },
      tours: {
        islaMujeres: "A bright Caribbean day across the island's most iconic waters.",
        chichenItza:
          "Culture, history and regional flavors in one iconic journey.",
        tulum: "Ancient ruins, sea views and Mayan stories in a coastal setting.",
        cenotes: "Freshwater swimming and nature-rich moments in the jungle.",
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
      title: "Experimenta la Riviera Maya como un local",
      subtitle:
        "Tours seleccionados, joyas escondidas y aventuras inolvidables.",
      exploreTours: "Explorar Tours",
      contactUs: "Contáctanos",
    },
    popularTours: {
      title: "Tours Más Populares",
      subtitle: "Descubre nuestras experiencias más solicitadas en la Riviera Maya.",
      viewExperience: "Ver Experiencia",
      viewAllPrompt: "Descubre más experiencias inolvidables",
      viewAllExperiences: "Ver todas las experiencias",
      badges: {
        islaMujeres: "Más Vendido",
        chichenItza: "Maravilla del Mundo",
        tulum: "Historia del Caribe",
        cenotes: "Experiencia Natural",
      },
      highlights: {
        islaMujeres: "Catamarán • Snorkel • Aguas Turquesa • Playa Norte",
        chichenItza: "Ruinas Mayas • Cenote • Buffet Regional • Valladolid",
        tulum: "Ruinas Frente al Mar • Vistas al Caribe • Cultura Maya",
        cenotes: "Agua Cristalina • Nado • Naturaleza • Aventura",
      },
      tours: {
        islaMujeres: "Un día caribeño entre las aguas más icónicas de la isla.",
        chichenItza:
          "Cultura, historia y sabores regionales en una ruta inolvidable.",
        tulum: "Ruinas antiguas, vistas al mar e historias mayas frente al Caribe.",
        cenotes: "Nado en agua dulce y naturaleza en un entorno de selva.",
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
      title: "Découvre la Riviera Maya comme un local",
      subtitle:
        "Excursions sélectionnées, trésors cachés et aventures inoubliables.",
      exploreTours: "Explorer les Tours",
      contactUs: "Nous Contacter",
    },
    popularTours: {
      title: "Tours les Plus Populaires",
      subtitle: "Découvrez nos expériences les plus demandées dans la Riviera Maya.",
      viewExperience: "Voir l'Expérience",
      viewAllPrompt: "Découvrez encore plus d'expériences inoubliables",
      viewAllExperiences: "Voir toutes les expériences",
      badges: {
        islaMujeres: "Meilleure Vente",
        chichenItza: "Merveille du Monde",
        tulum: "Histoire des Caraïbes",
        cenotes: "Expérience Nature",
      },
      highlights: {
        islaMujeres: "Catamaran • Snorkeling • Eaux Turquoise • Playa Norte",
        chichenItza: "Ruines Mayas • Cenote • Buffet Régional • Valladolid",
        tulum: "Ruines Face à la Mer • Vue Caraïbe • Culture Maya",
        cenotes: "Eau Cristalline • Baignade • Nature • Aventure",
      },
      tours: {
        islaMujeres: "Une journée caribéenne au fil des eaux les plus iconiques de l'île.",
        chichenItza:
          "Culture, histoire et saveurs régionales en une excursion emblématique.",
        tulum: "Ruines anciennes, vues marines et récits mayas face aux Caraïbes.",
        cenotes: "Baignade en eau douce et nature dans un décor tropical.",
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
