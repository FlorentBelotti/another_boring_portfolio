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
import odlx_8 from '../assets/works/odlx_pilote1.webp'
import odlx_9 from '../assets/works/odlx_pilote2.webp'
import odlx_10 from '../assets/works/odlx_pilote3.webp'

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
    description: `<strong>Transcendence</strong> is the 42 final project: a <strong>SPA</strong> that hosts a <strong>real-time multiplayer</strong> Pong-inspired game with tournaments, matchmaking and profiles. Backend is <strong>Python/Django</strong>; frontend is a <strong>custom JavaScript SPA</strong>. Uses <strong>PostgreSQL</strong> and <strong>WebSockets</strong> for live games. <strong>Security</strong> (hashed passwords, JWT), <strong>containerization</strong> (Docker) and monitoring were considered from the start.`,
    role: "Full stack developer (Django backend, vanilla JS SPA, devops)",
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
      "• <strong>Real-time multiplayer</strong> (Pong & Snake modes)",
      "• <strong>Server-side game engine</strong>",
      "• <strong>Tournaments</strong> with ranking",
      "• <strong>Matchmaking</strong> and friend invitations",
      "• <strong>Profile management</strong> and Elo stats",
      "• <strong>In-app chat</strong> and notifications",
      "• <strong>Responsive UI</strong>"
    ],
    challenges: [
      "• <strong>Reliable WebSocket synchronization</strong>",
      "• <strong>Custom SPA</strong> without framework",
      "• <strong>OAuth42 / JWT</strong> authentication flows",
      "• <strong>Containerized deployment</strong> and monitoring",
      "• <strong>Mitigating network latency</strong> for gameplay"
    ],
    screenshots: [tr_2, tr_2, tr_3, tr_4, tr_5, tr_6, tr_7, tr_8, tr_9, tr_10],
    sourceLink: "https://github.com/FlorentBelotti/42_cursus_ft_transcendence",
    demoLink: "",
    year: "2023",
    projectType: "School",
    observation: `This project taught me how to build an SPA from scratch and ship a full product under time pressure. <strong>Key wins:</strong> the custom SPA engine, robust backend, and a <strong>modular architecture</strong> that made features incremental and testable.`,
    tasks: [
      "• <strong>Backend API</strong> for users, auth, tournaments and matches",
      "• <strong>Frontend SPA engine</strong> and dynamic page loader",
      "• Implement <strong>auth</strong> (OAuth42, JWT) and security measures",
      "• <strong>Dockerize</strong> the app and add basic monitoring",
      "• Write <strong>unit and integration tests</strong>"
    ]
  },
  {
    id: 1,
    name: "MINIRT",
    title: "MiniRT",
    company: "42",
    tag: "42",
    type: "Software",
    description: `<strong>MiniRT</strong> is a minimal <strong>ray tracer in C</strong> that renders scenes from .rt files using miniLibX. It implements <strong>ray-object intersections</strong> (spheres, planes, cylinders, cones), <strong>lighting</strong> (ambient/diffuse/specular), shadows and <strong>procedural textures</strong> (Perlin noise, checkerboard). The code is focused on <strong>performance</strong>, stability and strict <strong>memory handling</strong>.`,
    role: "Algorithm developer (3D math, lighting, Perlin, C)",
    technologies: [
      "C",
      "miniLibX",
      "Libft",
      "Makefile",
      "Git"
    ],
    features: [
      "• <strong>Ray tracing</strong> (spheres, planes, cylinders, cones)",
      "• <strong>Ambient/diffuse/specular lighting</strong> and shadows",
      "• <strong>Perlin noise</strong> and checkerboard patterns",
      "• <strong>Camera controls</strong> and scene parser",
      "• <strong>Z-buffering</strong> and multiple scene templates"
    ],
    challenges: [
      "• <strong>Robust ray-object intersection</strong> math in C",
      "• <strong>Accurate lighting</strong> and shadow computations",
      "• Implementing <strong>Perlin noise</strong> procedurally",
      "• <strong>Optimizing for performance</strong> and eliminating leaks",
      "• <strong>Parsing varied scene file formats</strong>"
    ],
    screenshots: [minirt_1, minirt_2],
    sourceLink: "https://github.com/FlorentBelotti/42_cursus_miniRT",
    demoLink: "",
    year: "2024",
    projectType: "School",
    observation: `A project where <strong>mathematics and low-level C</strong> met to produce visual results. I particularly enjoyed implementing the <strong>ray-tracing core</strong> and the <strong>Perlin noise</strong> for richer surfaces.`,
    tasks: [
      "• <strong>Implement intersection</strong> and lighting routines",
      "• Add <strong>Perlin noise</strong> and surface patterns",
      "• <strong>Parser for .rt scenes</strong> and image output",
      "• <strong>Profile and optimize</strong> for memory/performance",
      "• <strong>Document scenes</strong> and usage"
    ]
  },
  {
    id: 2,
    name: "NEVERBETONLEC",
    title: "Never Bet On LEC",
    company: "-",
    tag: "Side",
    type: "Bot",
    description: `<strong>NeverBetOnLEC</strong> is a <strong>TypeScript Discord bot</strong> for friendly betting on LEC matches. It polls match data (PandaScore / Riot), exposes <strong>slash commands</strong> to view and bet on matches, stores bets in <strong>SQLite</strong> and publishes <strong>announcements and leaderboards</strong> automatically.`,
    role: "Lead developer (Discord bot, APIs, points system)",
    technologies: [
      "TypeScript",
      "Docker",
      "Discord.js",
      "Node.js",
      "SQLite",
      "PandaScore API",
      "Riot API",
      "Shell",
      "Git"
    ],
    features: [
      "• <strong>Automated match fetching</strong> and announcements",
      "• <strong>Slash commands</strong> for matches, current game and leaderboard",
      "• <strong>Virtual betting</strong> with score/winner predictions",
      "• <strong>Live leaderboard</strong> and points calculation",
      "• <strong>Dockerized deployment</strong> and env-based config"
    ],
    challenges: [
      "• <strong>Reliable polling and sync</strong> with external APIs",
      "• <strong>Ensuring one bet per user</strong> and secure handling",
      "• <strong>Announcing results</strong> and calculating points reliably",
      "• <strong>Dynamic command deployment</strong> for test/prod environments",
      "• <strong>Keeping TypeScript types</strong> and DB state consistent"
    ],
    screenshots: [bot_1, bot_2, bot_3],
    sourceLink: "https://github.com/romlambe/bot-lol-discord",
    demoLink: "",
    year: "2024",
    projectType: "Side project",
    observation: `Built for the 2025 Worlds to engage a community; the bot was quick to become functional and is evolving. <strong>Top takeaways:</strong> reliable API integration and a working points system kept users engaged.`,
    tasks: [
      "• <strong>Implement slash commands</strong> and interactions",
      "• <strong>Poll PandaScore / Riot</strong> and store matches",
      "• <strong>Design betting workflow</strong> and DB schema",
      "• <strong>Automate announcements</strong> and scoring",
      "• <strong>Setup Docker-based deployment</strong>"
    ]
  },
  {
    id: 3,
    name: "HUGINN",
    title: "Huginn",
    company: "-",
    tag: "Side",
    type: "Data Application",
    description: `<strong>Huginn</strong> is a <strong>Python CLI tool</strong> that downloads legislative election data from data.gouv.fr (1958–2012), extracts CSVs, filters by year/department/district and displays stats like turnout and candidate shares. It also generates <strong>charts for comparisons</strong> between rounds.`,
    role: "Lead developer (data pipeline & visualization)",
    technologies: [
      "Python",
      "pandas",
      "matplotlib",
      "requests",
      "data.gouv.fr API"
    ],
    features: [
      "• <strong>Download and extract</strong> official archives",
      "• <strong>Interactive filters</strong> by year/department/district",
      "• <strong>Turnout and candidate results</strong> display",
      "• <strong>Round comparisons</strong> and chart exports",
      "• <strong>Robust CSV parsing</strong> and error handling"
    ],
    challenges: [
      "• <strong>Automating downloads</strong> and archive extraction",
      "• <strong>Parsing inconsistent CSV formats</strong> across years",
      "• Designing a <strong>smooth CLI flow</strong> for exploration",
      "• Ensuring <strong>reproducible charts</strong> and file handling"
    ],
    screenshots: [],
    sourceLink: "https://github.com/Rrodor/huginn",
    demoLink: "",
    year: "2023",
    projectType: "Side project",
    observation: `Started as a student tool to make election data accessible; it's a <strong>citizen-focused</strong>, <strong>open-source</strong> collector that deals with messy public datasets from <strong>data.gouv</strong>. I plan to expose it via a simple web UI next.`,
    tasks: [
      "• <strong>Automate download</strong>, extraction and CSV loading",
      "• Add <strong>CLI prompts</strong> and interactive filters",
      "• Implement <strong>charting modules</strong> for exports",
      "• <strong>Harden parsing</strong> and error recovery"
    ]
  },
  {
    id: 4,
    name: "PORTFOLIO",
    title: "Look around!",
    company: "-",
    tag: "Side",
    type: "Web application",
    description: `<strong>Personal portfolio</strong> built with <strong>TypeScript, React and SCSS</strong> to showcase projects, skills and experience. It uses a <strong>modular data structure</strong> for projects, a <strong>minimal typographic design</strong>, responsive layout and light animations for clarity.`,
    role: "Fullstack developer & product owner",
    technologies: [
      "TypeScript",
      "React",
      "SCSS",
      "Vite",
      "Embla carousel",
      "Radix UI",
      "Framer Motion",
      "Git",
      "Docker"
    ],
    features: [
      "• <strong>Dynamic project listing</strong> from constants",
      "• <strong>Resume and project pages</strong>",
      "• <strong>Minimal typographic design</strong> and responsive layout",
      "• <strong>Light animations</strong> and theme support"
    ],
    challenges: [
      "• <strong>Keeping components modular</strong> and typed",
      "• <strong>Responsive design</strong> and accessibility",
      "• Maintaining a <strong>small, dependency-light stack</strong>",
      "• Designing an <strong>extendable content model</strong>"
    ],
    screenshots: [],
    sourceLink: "https://github.com/FlorentBelotti/another_boring_portfolio",
    demoLink: "https://florentbelotti.github.io/another_boring_portfolio/",
    year: "2024",
    projectType: "Personal",
    observation: `The portfolio is my <strong>technical showcase</strong> and an experimental playground for React/TS patterns. It balances a clean design with practical maintainability and easy content updates.`,
    tasks: [
      "• <strong>Implement React/TypeScript components</strong> and data model",
      "• Design <strong>responsive layouts</strong> and accessibility",
      "• Integrate <strong>animations and carousel</strong>",
      "• <strong>Deploy and iterate</strong> content"
    ]
  },
  {
    id: 5,
    name: "ODELIX",
    title: "Odélix",
    company: "RTE",
    tag: "Pro",
    type: "Business application",
    description: `<strong>Odelix</strong> aggregates RTE GIS asset data from cloud sources, computes discrepancies and exposes <strong>dashboards</strong> for operational teams and managers to monitor and edit data state. The app connects to <strong>RTE platforms</strong> and supports reporting workflows.`,
    role: "Full stack developer & data engineer",
    technologies: [
      "Docker",
      "Django",
      "Angular",
      "Oracle",
      "TypeScript",
      "Angular Material",
      "ECharts",
      "GitLab"
    ],
    features: [
      "• <strong>Aggregation and normalization</strong> of GIS asset data",
      "• <strong>Dashboards with ECharts</strong> for monitoring",
      "• <strong>Data editing workflows</strong> and state propagation",
      "• <strong>Integration with RTE services</strong> and cloud storage"
    ],
    challenges: [
      "• <strong>Adapting to RTE internal platforms</strong> and policies",
      "• <strong>Processing and aggregating large datasets</strong>",
      "• <strong>Optimizing performance</strong> for business UIs",
      "• <strong>Coordinating with multiple teams</strong> and tools"
    ],
    screenshots: [odlx_1, odlx_2, odlx_3, odlx_4, odlx_5, odlx_6, odlx_7, odlx_8, odlx_9, odlx_10],
    sourceLink: "",
    demoLink: "https://odelix.rte-france.com/",
    year: "2025",
    projectType: "Pro",
    observation: `Working at RTE exposed me to a <strong>demanding enterprise environment</strong> and many internal services. I learned Angular and TypeScript while navigating complex integrations across RTE platforms.`,
    tasks: [
      "• <strong>Develop dashboards</strong> and data aggregation components",
      "• <strong>Refactor large tables</strong> and optimize exports",
      "• <strong>Implement backend rules</strong> for new imports",
      "• <strong>Design visualization</strong> for chronological data"
    ]
  }
]