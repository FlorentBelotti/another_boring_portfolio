// import tr_1 from '../assets/works/tr_home.webp'
import tr_2 from '../assets/works/tr_log.webp'
import tr_3 from '../assets/works/tr_modal.webp'
import tr_4 from '../assets/works/tr_friend.webp'
import tr_5 from '../assets/works/tr_leaderboard.webp'
import tr_6 from '../assets/works/tr_pong.webp'
import tr_7 from '../assets/works/tr_snake.webp'
import tr_8 from '../assets/works/tr_tournament.webp'
import tr_9 from '../assets/works/tr_user.webp'
import tr_10 from '../assets/works/tr_pong_mod.webp'

import odlx_1 from '../assets/works/odlx_home.webp'
import odlx_2 from '../assets/works/odlx_gap1.webp'
import odlx_3 from '../assets/works/odlx_gap2.webp'
import odlx_4 from '../assets/works/odlx_gap3.webp'
import odlx_5 from '../assets/works/odlx_log.webp'
import odlx_6 from '../assets/works/odlx_matching.webp'
import odlx_7 from '../assets/works/odlx_rules.webp'

import minirt_1 from '../assets/works/minirt_eclipse.webp'
import minirt_2 from '../assets/works/minirt_temple.webp'

import bot_1 from '../assets/works/bot_1.webp'
import bot_2 from '../assets/works/bot_2.webp'
import bot_3 from '../assets/works/bot_3.webp'

export const WORKS_LIST = [
  {
    id: 0,
    name: "TRANSCENDANCE",
    title: "ft_transcendance",
    company: "42",
    tag: "42",
    type: "Web application",
    description: `Final project of the 42 curriculum: a real-time multiplayer Pong platform with tournaments, matchmaking, chat, profiles and 2FA. Built as a full SPA (JS) with a Django backend, PostgreSQL and WebSockets for live sync, plus monitoring and devops tooling.`,
    role: "Full stack developer (backend Django, SPA JS, devsecops, user management)",
    technologies: [
      "Docker",
      "Django", 
      "JavaScript", 
      "PostgreSQL", 
      "WebSockets", 
      "Redis", 
      "JWT", 
      "HashiCorp Vault", 
      "Bootstrap"
    ],
    features: [
      "Real-time multiplayer (classic Pong and Snake mode)",
      "Server-side game engine",
      "Organized tournaments with ranking and score management",
      "Matchmaking and friend invitations",
      "Strong authentication (2FA), OAuth42",
      "Profile management, avatars, Elo statistics",
      "User chat, invitation messaging",
      "Dashboard with personal and global statistics",
      "Mobile compatibility & responsive",
      "GDPR account deletion",
      "Monitoring & Prometheus metrics"
    ],
    challenges: [
      "Synchronizing games via WebSocket",
      "Custom SPA without JS framework",
      "OAuth42, JWT, and security integration",
      "Microservices and containerization",
      "Real-time latency and game state management",
      "Strong frontend/back separation"
    ],
    screenshots: [tr_2, tr_2, tr_3, tr_4, tr_5, tr_6, tr_7, tr_8, tr_9, tr_10],
    sourceLink: "https://github.com/FlorentBelotti/42_cursus_ft_transcendence",
    demoLink: "",
    year: "2023",
    projectType: "School",
    observation: `Team project combining real-time gameplay, strict security requirements and a full SPA/backend architecture.`,
    tasks: [
      "Backend Django development and API (User, Auth, Tournament, Games)",
      "Native JS SPA, dynamic content loader, pages and animations",
      "Security: password hash, JWT, GDPR, OAuth2",
      "DevOps: Dockerization, monitoring, CI",
      "Unit and functional testing"
    ]
  },
  {
    id: 1,
    name: "MINIRT",
    title: "MiniRT",
    company: "42",
    tag: "42",
    type: "Software",
    description: `Minimalist RayTracer in C generating 3D images from .rt scenes. Implements intersections, lighting, shadows and procedural textures with miniLibX for rendering.`,
    role: "Algorithm Developer (3D math, lighting, texture, low-level C)",
    technologies: [
      "C",
      "miniLibX",
      "Libft",
      "Makefile",
      "Git",
      "Github"
    ],
    features: [
      "RayTracing for spheres, planes, cylinders, cones",
      "Advanced lighting: ambient, diffuse, specular, shadows",
      "Procedural textures (Perlin noise, checker, normal perturbation)",
      "Event engine: moving camera, image loader, scene parser",
      "Z-buffer for occlusion/depth",
      "Complies with 42 programming standards",
      "Multiple scene templates"
    ],
    challenges: [
      "Low-level RayTracing: ray-object intersection in C",
      "Lighting and realistic shadows with multiple sources",
      "Procedural Perlin noise generation",
      "Performance and robustness (memory leak fixes, multi-algo)",
      "Custom scene parsing and error management"
    ],
    screenshots: [minirt_1, minirt_2],
    sourceLink: "https://github.com/FlorentBelotti/42_cursus_miniRT",
    demoLink: "",
    year: "2024",
    projectType: "School",
    observation: `Duo project focused on performance and rigorous C/math implementation for realistic rendering.`,
    tasks: [
      "Coding intersection and lighting algorithms",
      "RayTracer implementation and optimization",
      "Custom .rt file parsing and opening",
      "Software quality & memory management",
      "Creating scene templates & documentation"
    ]
  },
  {
    id: 2,
    name: "NEVERBETONLEC",
    title: "Never Bet On LEC",
    company: "-",
    tag: "Side",
    type: "Bot",
    description: `TypeScript Discord bot allowing virtual bets on LEC matches with live sync to Riot/PandaScore APIs, leaderboards, predictions and automated results.`,
    role: "Lead Developer (API, Discord, data processing, points system)",
    technologies: [
      "TypeScript",
      "Docker",
      "Discord.js",
      "Node.js",
      "SQLite",
      "PandaScore API",
      "Riot API",
      "Shell",
      "Git",
      "Github"
    ],
    features: [
      "Automated match data and announcements for LEC",
      "Virtual betting on scores/winners before each match",
      "Leaderboard & live-calculated points",
      "Discord slash commands (/match, /current, /leaderboard, /ping, etc.)",
      "Multi-environment detection/management (test/prod)",
      "Persistent DB for users/bets/matches",
      "Automated deployment and installation",
      "Docker and Shell integration",
      "Live result and points announcements"
    ],
    challenges: [
      "Real-time sync with score APIs",
      "Automation of announcements and point calculations",
      "Secure voting (one user = one bet per match)",
      "Dynamic Discord command deployment",
      "Software quality (strict TypeScript, robustness)"
    ],
    screenshots: [bot_1, bot_2, bot_3],
    sourceLink: "https://github.com/romlambe/bot-lol-discord",
    demoLink: "",
    year: "2024",
    projectType: "Side project",
    observation: `Project combining API automation, event handling and community interaction through Discord.`,
    tasks: [
      "Development of all Discord commands/interactivity",
      "Integration and polling with Riot Games & PandaScore APIs",
      "TypeScript architecture, SQLite database management",
      "Automated points calculation, leaderboard, and announcements",
      "Docker/Shell deployment, CI/CD"
    ]
  },
  {
    id: 3,
    name: "HUGINN",
    title: "Huginn",
    company: "-",
    tag: "Side",
    type: "Data Application",
    description: `Python tool exploring French electoral data (1958–2012) with filtering, statistics and charts, using automated data retrieval from data.gouv.fr.`,
    role: "Lead developer",
    technologies: [
      "Python",
      "Docker",
      "pandas",
      "matplotlib",
      "requests",
      "data.gouv.fr API",
      "Sqlite",
      "Git",
      "Github"
    ],
    features: [
      "Download and extract official data from data.gouv.fr",
      "Interactive filtering by year, department, district",
      "Display of electoral statistics (turnout, abstention, scores, ...)",
      "Round comparison",
      "CLI and chart visualizations",
      "Advanced CSV parsing",
      "Error and file naming management"
    ],
    challenges: [
      "Automated access/extraction for official archives",
      "Robust/flexible CSV parsing across formats",
      "CLI interactivity for data exploration",
      "Handling diversity of years/elections",
      "Software quality and user-flow error management"
    ],
    screenshots: [],
    sourceLink: "https://github.com/Rrodor/huginn",
    demoLink: "",
    year: "2023",
    projectType: "Side project",
    observation: `Showcases a full data pipeline: acquisition, cleaning, exploration and visualization.`,
    tasks: [
      "Automated data download, parsing and structuring",
      "CLI interface development",
      "Analysis and visualization of election results",
      "File/workflow management evolution",
      "Creation of chart modules"
    ]
  },
  {
    id: 4,
    name: "PORTFOLIO",
    title: "Look around!",
    company: "-",
    tag: "Side",
    type: "Web application",
    description: `Personal portfolio built with React/TS and SCSS, featuring dynamic project listing, smooth navigation, responsive layout and a modular structure for easy content updates.`,
    role: "Fullstack developer && data engineer",
    technologies: [
      "TypeScript",
      "React",
      "SCSS",
      "Vite",
      "Embla carrousel",
      "Radix UI",
      "Framermotion",
      "Git",
      "Docker",
    ],
    features: [
      "Dynamic listing of both my professionnal and side projects",
      "My resume",
      "Modern typographic and a brutalist/ post modern approach of it design",
      "Mobile responsive",
      "Animations",
    ],
    challenges: [
      "Modularity",
      "Responsive",
      "Scalability",
      "Design"
    ],
    screenshots: [],
    sourceLink: "https://github.com/FlorentBelotti/another_boring_portfolio",
    demoLink: "https://florentbelotti.github.io/another_boring_portfolio/",
    year: "2024",
    projectType: "Personal",
    observation: `A technical and design showcase used to experiment with React/TS patterns.`,
    tasks: [
      "React/TypeScript conception and development",
      "Architecture",
      "Three blocks layout", 
      "Responsive, accessibility",
      "Continuous deployment and improvement",
      "Design"
    ]
  },
  {
    id: 5,
    name: "ODELIX",
    title: "Odélix",
    company: "RTE",
    tag: "Pro",
    type: "Business application",
    description: `Business application for aggregating and monitoring RTE’s GIS and asset data. Built with Django/Angular, offering dashboards, discrepancy tracking, data manipulation and integration with internal RTE services.`,
    role: "Full stack developer && Data engineer",
    technologies: [
      "Docker",
      "Django",
      "Angular",
      "Oracle",
      "Typescript",
      "Angular material",
      "Echarts",
      "Gitlab",
      "Git",
    ],
    features: [
      "Aggregation of RTE asset GIS data",
      "Connection with the RTE environment (DEVIN)",
      "Data storage on the RTE cloud",
      "Data monitoring (Dashboard with Echarts)",
      "Data manipulation",
      "Data linking with other RTE services (OPTIMISCO)"
    ],
    challenges: [
      "Getting familiar with the RTE environment (INCA, DEVIN, WIPILICK, OPTIMISCO)",
      "Developing components capable of aggregating large amounts of data",
      "Fluidity",
      "Execution speed and component optimization for business use",
      "Collaborative work with other RTE services",
      "Workflow with MR validation and ticket management"
    ],
    screenshots: [odlx_1, odlx_2, odlx_3, odlx_4, odlx_5, odlx_6, odlx_7],
    sourceLink: "",
    demoLink: "https://odelix.rte-france.com/",
    year: "2025",
    projectType: "Pro",
    observation: `Introduction to Angular and to RTE’s complex engineering environment, involving many internal tools and strict workflows.`,
    tasks: [
      "Development of the data managers’ dashboard",
      "Refactoring of the main data aggregation table",
      "Creation of new backend rules for data management",
      "Refactoring of the export feature (optimization)",
      "Creation of new tables and links to handle new imports resulting from the evolution of RTE data",
      "Design and development of new charts for chronological data visualization"
    ]
  },
]