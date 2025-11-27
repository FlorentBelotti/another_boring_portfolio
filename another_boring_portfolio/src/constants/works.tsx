import tr_1 from '../assets/works/transcandence/tr_connexion.png'
import tr_2 from '../assets/works/transcandence/tr_homepage.png'


export const WORKS_LIST = [
  {
    id: 0,
    name: "TRANSCENDANCE",
    title: "Transcendance",
    tag: "42",
    type: "Web application",
    description: "Un projet de jeu multijoueur en temps réel inspiré du classique Pong, développé avec des technologies web modernes.",
    role: "Développeur",
    technologies: ["TypeScript", "NestJS", "PostgreSQL", "WebSockets", "Docker"],
    features: [
      "Multijoueur en temps réel",
      "Système de chat et matchmaking",
      "Parties classées",
      "Profil utilisateur"
    ],
    challenges: [
      "Synchronisation temps réel",
      "Gestion des latences réseau",
      "Séparation back/front propre"
    ],
    screenshots: [tr_1, tr_2],
    sourceLink: "https://fr.wikipedia.org/wiki/Wiki",
    demoLink: "https://fr.wikipedia.org/wiki/Wiki",
    year: "2023",
    projectType: "Scolaire"
  },
  {
    id: 1,
    name: "ODELIX",
    title: "Odelix",
    tag: "Pro",
    type: "Business application",
    description: "Une plateforme innovante pour la gestion et l'optimisation des processus métier.",
    role: "Développeur full-stack",
    technologies: ["Node.js", "React", "PostgreSQL", "Azure"],
    features: [
      "Gestion complète de workflow",
      "Suivi temps réel des opérations",
      "Tableaux de bord et analytics"
    ],
    challenges: [
      "Intégration de systèmes existants",
      "Sécurisation des flux",
      "Scalabilité"
    ],
    screenshots: [],
    sourceLink: "",
    demoLink: "",
    year: "2024",
    projectType: "Professionnel"
  },
  {
    id: 2,
    name: "WOODEXCHANGE",
    title: "Wood Exchange",
    tag: "Side",
    type: "Marketplace",
    description: "Une marketplace B2B dédiée au commerce du bois et des matériaux forestiers.",
    role: "Développeur",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    features: [
      "Catalogue produit",
      "Messagerie intégrée",
      "Système d’offre et de négociation"
    ],
    challenges: [
      "Gestion des rôles B2B",
      "Flux transactionnels",
      "Système de notification"
    ],
    screenshots: [],
    sourceLink: "",
    demoLink: "",
    year: "2023",
    projectType: "Side project"
  },
  {
    id: 3,
    name: "NEVERBETONLEC",
    title: "Never Bet On LEC",
    tag: "Side",
    type: "Bot",
    description: "Une application de pronostics et statistiques pour les compétitions e-sport League of Legends.",
    role: "Développeur",
    technologies: ["Python", "API Riot Games", "SQLite"],
    features: [
      "Collecte automatique de statistiques",
      "Modèles simples de prédiction",
      "Tableaux comparatifs"
    ],
    challenges: [
      "Rate limiting API",
      "Mise à jour des données",
      "Organisation des datasets"
    ],
    screenshots: [],
    sourceLink: "",
    demoLink: "",
    year: "2022",
    projectType: "Side project"
  },
  {
    id: 4,
    name: "MINIRT",
    title: "MiniRT",
    tag: "42",
    type: "Software",
    description: "Un moteur de ray tracing développé en C, capable de générer des images photoréalistes à partir de scènes 3D.",
    role: "Développeur",
    technologies: ["C", "Mathématiques 3D"],
    features: [
      "Gestion des sphères, plans, cylindres",
      "Lumières multiples",
      "Antialiasing"
    ],
    challenges: [
      "Calculs vectoriels et luminance",
      "Optimisation du temps de rendu"
    ],
    screenshots: [],
    sourceLink: "",
    demoLink: "",
    year: "2023",
    projectType: "Scolaire"
  },
  {
    id: 5,
    name: "TABULA",
    title: "Tabula",
    tag: "Side",
    type: "Web application",
    description: "Un outil de visualisation et d'analyse de données permettant de créer des tableaux de bord interactifs.",
    role: "Développeur",
    technologies: ["React", "D3.js", "Node.js"],
    features: [
      "Dashboards personnalisables",
      "Importation de données",
      "Visualisations dynamiques"
    ],
    challenges: [
      "Performance des graphiques",
      "Gestion de datasets lourds"
    ],
    screenshots: [],
    sourceLink: "",
    demoLink: "",
    year: "2022",
    projectType: "Side project"
  }
];
