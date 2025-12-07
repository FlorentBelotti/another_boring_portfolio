import tr_1 from '../assets/works/transcandence/tr_connexion.png'
import tr_2 from '../assets/works/transcandence/tr_homepage.png'

export const WORKS_LIST = [
  {
    id: 0,
    name: "ODELIX",
    title: "Odélix",
    company: "RTE",
    tag: "Pro",
    type: "Business application",
    description: `TEST`,
    role: "Full stack developer / Data engineer",
    technologies: [
      "Python (Django)", 
      "Typescript", 
      "PostgreSQL", 
      "Docker", 
    ],
    features: [
      "TEST",
    ],
    challenges: [
      "TEST",
    ],
    screenshots: [tr_1, tr_2],
    sourceLink: "https://github.com/FlorentBelotti/42_cursus_ft_transcendence",
    demoLink: "",
    year: "2025",
    projectType: "Pro",
    observation: ``,
    tasks: [
      "Test",
    ]
  },
  {
    id: 1,
    name: "TRANSCENDANCE",
    title: "ft_transcendance",
    company: "42",
    tag: "42",
    type: "Web application",
    description: `Transcendence is the final project of the 42 curriculum: a web platform hosting a real-time multiplayer Pong-inspired game, playable online against friends, bots, or AI, with tournament, matchmaking, and profile management. The application runs as a Single Page Application, offering a full experience: leaderboards, strong authentication (2FA), integrated chat, friends and invitations, and mobile compatibility. Backend: Python/Django; frontend: native JavaScript SPA; PostgreSQL and WebSockets for game sync. Special focus on security (password hashing, JWT, GDPR), scalability (Docker, microservices, monitoring), and fun features (server-side Pong, customization, snake mode, player/AI stats dashboard).`,
    role: "Full stack developer (backend Django, SPA JS, devsecops, user management)",
    technologies: [
      "Python (Django)", 
      "JavaScript", 
      "PostgreSQL", 
      "WebSockets", 
      "Docker", 
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
    screenshots: [tr_1, tr_2],
    sourceLink: "https://github.com/FlorentBelotti/42_cursus_ft_transcendence",
    demoLink: "",
    year: "2023",
    projectType: "School",
    observation: `Project made in team, subject to strict technical and security constraints. Advanced modules (blockchain tourney, AI stats, chat, GDPR) built around a custom game engine, with devops practices to ensure scalability and maintainability.`,
    tasks: [
      "Backend Django development and API (User, Auth, Tournament, Games)",
      "Native JS SPA, dynamic content loader, pages and animations",
      "Security: password hash, JWT, GDPR, OAuth2",
      "DevOps: Dockerization, monitoring, CI",
      "Unit and functional testing"
    ]
  },
  {
    id: 2,
    name: "MINIRT",
    title: "MiniRT",
    company: "42",
    tag: "42",
    type: "Software",
    description: `MiniRT is a minimalist RayTracer written in C as a graphics project for the 42 school. It generates photorealistic 3D images from custom scene files (.rt). The engine calculates ray-object intersections (spheres, planes, cylinders, cones) to render the image pixel by pixel, using the miniLibX graphics library. The project includes advanced effects: lighting (ambient, diffuse, specular), shadows, procedural textures (Perlin noise) for realistic surfaces, and checkerboard patterns. MiniRT focuses on maximal performance, no memory leaks/crashes, and offers various scene templates. All core algorithms (intersection, lighting, Perlin, patterns) and low-level C quality (malloc secure, Makefile, event management, robust parsing) were designed by me.`,
    role: "Algorithm Developer (3D math, lighting, texture, low-level C)",
    technologies: [
      "C",
      "miniLibX",
      "Libft",
      "Makefile"
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
    screenshots: [],
    sourceLink: "https://github.com/FlorentBelotti/42_cursus_miniRT",
    demoLink: "",
    year: "2024",
    projectType: "School",
    observation: `Project built in a duo, with focused attention on technical rendering and rigorous algorithms. MiniRT provides varied visuals and highlights C/math skills acquired at 42.`,
    tasks: [
      "Coding intersection and lighting algorithms",
      "RayTracer implementation and optimization",
      "Custom .rt file parsing and opening",
      "Software quality & memory management",
      "Creating scene templates & documentation"
    ]
  },
  {
    id: 3,
    name: "NEVERBETONLEC",
    title: "Never Bet On LEC",
    company: "-",
    tag: "Side",
    type: "Discord Bot",
    description: `NeverBetOnLEC is a Discord bot written in TypeScript, designed to let users virtually bet on League of Legends European Championship (LEC) match results, while automating the statistical tracking of competitions. The bot uses official Riot Games API and PandaScore, syncs matches in real time, provides a full points/leaderboard system, lets users vote/predict outcomes and scores, view next matches/current match, see the community leaderboard, and triggers automatic result announcements. It uses SQLite for user/bet/match management, and Discord commands are deployed dynamically per environment (prod/test).`,
    role: "Lead Developer (API, Discord, data processing, points system)",
    technologies: [
      "TypeScript",
      "Discord.js",
      "Node.js",
      "SQLite",
      "PandaScore API",
      "Riot API",
      "Docker",
      "Shell"
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
    screenshots: [],
    sourceLink: "https://github.com/romlambe/bot-lol-discord",
    demoLink: "",
    year: "2024",
    projectType: "Side project",
    observation: `This project brings League of Legends data to Discord and engages the server community, exploring automation and event-handling at scale.`,
    tasks: [
      "Development of all Discord commands/interactivity",
      "Integration and polling with Riot Games & PandaScore APIs",
      "TypeScript architecture, SQLite database management",
      "Automated points calculation, leaderboard, and announcements",
      "Docker/Shell deployment, CI/CD"
    ]
  },
  {
    id: 4,
    name: "HUGINN",
    title: "Huginn",
    company: "-",
    tag: "Side",
    type: "Data Application",
    description: `Huginn is an interactive Python tool for French electoral data exploration, focusing on legislative results between 1958 and 2012. Users select a year, department, and district; the app downloads official data.gouv.fr archives, filters relevant data, and displays key stats: turnout, abstention, candidate scores, etc. Several visualization modes are available: first/second round, cross-round comparisons, participation rates. The program handles the full process: remote queries, extraction, CSV parsing, filtering, result formatting, all with robust error handling and file naming. Huginn provides a CLI-driven analysis and generates charts for results.`,
    role: "Developer (data engineering, visualization, parsing, CLI UX)",
    technologies: [
      "Python",
      "pandas",
      "matplotlib",
      "requests",
      "data.gouv.fr API"
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
    observation: `The app demonstrates end-to-end data cycle skills: acquisition, cleaning, viz for French politics. It's modular and extensible to other elections.`,
    tasks: [
      "Automated data download, parsing and structuring",
      "CLI interface development",
      "Analysis and visualization of election results",
      "File/workflow management evolution",
      "Creation of chart modules"
    ]
  },
  {
    id: 5,
    name: "PORTFOLIO",
    title: "Personal Portfolio",
    company: "-",
    tag: "Side",
    type: "Web application",
    description: `Personal portfolio built in TypeScript with React and SCSS, showcasing all my projects, experiences and technical skills. Features smooth navigation by section (projects, journey, skills), minimalist typographic design, responsive structure for all devices, and dynamic content management through constant files. Lightweight visual effects (shimmer, fade-in) and thematic customization make browsing elegant and readable. The codebase is designed to be easily extensible (add projects/content), with strict TypeScript for technical robustness. Project is fully open-source.`,
    role: "Fullstack (Frontend, UX/UI, TypeScript architecture)",
    technologies: [
      "TypeScript",
      "React",
      "SCSS",
      "Vite",
      "Storybook"
    ],
    features: [
      "Dynamic listing of projects (WORKS_LIST)",
      "Modular structure for experience, education, skills",
      "Minimalist typographic design",
      "Mobile responsive & dark mode",
      "Lightweight animations (fade/shimmer)",
      "Simple content customization",
      "Strict separation of constants and assets"
    ],
    challenges: [
      "Component modularity",
      "Strong typing with TypeScript",
      "Responsive and accessibility",
      "Code scalability for dynamic project addition",
      "Clean design without heavy CSS frameworks"
    ],
    screenshots: [],
    sourceLink: "https://github.com/FlorentBelotti/another_boring_portfolio",
    demoLink: "https://florentbelotti.github.io/another_boring_portfolio/",
    year: "2024",
    projectType: "Personal",
    observation: `The portfolio serves as a tech showcase and playground for React/TS patterns on real projects, while staying fit for professional presentation.`,
    tasks: [
      "React/TypeScript conception and development",
      "Architecture and typing for data constants",
      "Responsive, dark mode, accessibility",
      "Storybook UI component integration",
      "Continuous deployment and improvement"
    ]
  }
]