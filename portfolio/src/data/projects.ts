export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  hostedUrl: string;
  image: string;
  images?: string[];
  details?: string;
}

export const projects: Project[] = [
  {
    title: "Connect 4 Game",
    description:
      "A classic two-player strategy game where players take turns dropping their pieces into a 7x6 grid. This project delivers a modern version using Django backend and React frontend.",
    technologies: ["Django", "React", "Game Development"],
    githubUrl: "https://github.com/dzemilmanic/Connect4",
    hostedUrl: "https://connect4-game.up.railway.app/",
    image: "https://dzemil.blob.core.windows.net/slike/connect4.png",
    images: [
      "https://dzemil.blob.core.windows.net/slike/connect4.png",
      "https://i.postimg.cc/y8V29PT4/image.png",
      "https://i.postimg.cc/L8DK07s4/image.png"
    ],
    "details": "Connect 4 is a classic two-player strategy game where players take turns dropping their pieces into a 7x6 grid. The goal is to be the first to connect four pieces — vertically, horizontally, or diagonally. This project delivers a modern version built with a Django backend and a React frontend, offering a smooth and interactive gaming experience. Features: AI Opponent – Play against a computer with adjustable difficulty levels. Responsive Design – Fully optimized for desktop and mobile devices. Real-Time Gameplay – Seamless interaction through REST APIs. Tech Stack: Backend – Django (web framework for server-side logic and game engine), Django REST Framework (API layer for frontend communication). Frontend – React (dynamic and interactive user interface)."
  },
  {
    title: "Arduino Projects",
    description:
      "A collection of Arduino-based hardware projects showcasing embedded systems programming, sensor integration, and IoT applications. Various projects demonstrating microcontroller programming and electronics.",
    technologies: ["Arduino", "C++", "Electronics", "IoT"],
    githubUrl: "https://github.com/dzemilmanic/Arduino-projects",
    hostedUrl: "https://www.youtube.com/@dzemilmanic",
    image:
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1105379/pexels-photo-1105379.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "details": "A collection of Arduino-based hardware projects showcasing embedded systems programming, sensor integration, and IoT applications. Each project is organized in its own folder with the necessary Arduino code, wiring instructions, and setup guide. To use: navigate to the desired project folder, upload the code via Arduino IDE, and follow the wiring instructions. Commonly used components include Arduino boards (Uno, Mega, Nano), ESP32 (for IoT and WiFi projects), ultrasonic sensors, servo motors, LEDs, push buttons, buzzers, resistors, breadboards, and jumper wires. Projects are open-source and fully customizable — experiment with different sensors, adjust timing and logic, or extend functionality with additional components."
  },
  {
    title: "Pyzzle",
    description:
      "An interactive puzzle-solving application built with Django and React, providing users with engaging puzzle challenges and solutions.",
    technologies: ["Django", "React", "Problem Solving"],
    githubUrl: "https://github.com/dzemilmanic/Puzzle",
    hostedUrl: "https://pyzzle.up.railway.app/",
    image: "https://dzemil.blob.core.windows.net/slike/puzla.png",
    images: [
      "https://dzemil.blob.core.windows.net/slike/puzla.png",
      "https://i.postimg.cc/zXffjn7p/image.png",
      "https://i.postimg.cc/YqL5M0Cp/image.png"
    ],
    "details": "Puzzle Solver Game is a fun and educational logic game where players solve image-based sliding puzzles in 3x3, 4x4, and 5x5 grid sizes. Players can upload their own image to turn it into a puzzle, play manually, or let the game solve it automatically. Automated solving is powered by 5 search algorithms: Breadth-First Search (BFS), Best-First Search with Manhattan Distance, Best-First Search with Hamming Distance, A* Search with Manhattan Distance, and A* Search with Hamming Distance. Each algorithm provides detailed statistics including number of moves and visited nodes, with a step-by-step visual simulation of the solution. The game features a fully responsive design for desktop and mobile. Built with Django and Django REST Framework on the backend, and React on the frontend. Live demo available at pyzzle.app.",
  },
  {
    title: "Structo",
    description:
      "Structo is a full-stack web application built with Laravel (Blade) and MySQL. It serves as a bridge between everyday users and professionals in the architecture and construction industries.",
    technologies: ["Laravel", "PHP", "Blade", "MySQL", "Full-stack"],
    githubUrl: "https://github.com/dzemilmanic/Structo",
    hostedUrl: "https://structo.up.railway.app/",
    image: "https://dzemil.blob.core.windows.net/slike/structo.png",
    images: [
      "https://dzemil.blob.core.windows.net/slike/structo.png",
      "https://i.postimg.cc/9Qrtvwmd/image.png",
      "https://i.postimg.cc/4x7V8CP2/image.png",
      "https://i.postimg.cc/BvfLMjX3/image.png",
    ],
    "details": "Structo is a full-stack web application built with Laravel (Blade) and MySQL that connects everyday users with professionals in the architecture and construction industries. Users can post jobs, browse professionals, request services, ask community questions, and stay updated through an industry news feed powered by external news APIs. The platform supports four user roles: Guest (browse public content and professional listings), Registered User (post jobs, request services, participate in Q&A, submit testimonials, and apply to become a professional by uploading a CV and credentials), Professional (create and manage service offerings, apply for jobs, answer questions), and Admin (full control over users, roles, jobs, services, testimonials, categories, and professional applications). Role upgrades from user to professional require admin approval. Key features include job posting, professional listings with service categories, Q&A community interaction, testimonials, a news feed, a professional application system, and a full admin dashboard."
  },
  {
    title: "Oculus Clinic",
    description:
      "A full-stack web application developed for a private eye clinic. It allows patients, doctors, and administrators to manage appointments, access medical history, and view important clinic services.",
    technologies: ["Full-stack", "User Management", "Medical System"],
    githubUrl: "https://github.com/dzemilmanic/Oculus-web",
    hostedUrl: "https://oculusklinika.up.railway.app/",
    image: "https://dzemil.blob.core.windows.net/slike/oculus_home.png",
    images: [
      "https://dzemil.blob.core.windows.net/slike/oculus_home.png",
      "https://i.postimg.cc/Z5HnFwtj/image.png",
      "https://i.postimg.cc/wjqTvDyY/image.png",
      "https://i.postimg.cc/j57R9X9Q/image.png",
    ],
    "details": "Oculus is a full-stack web application developed for a private eye clinic, designed to digitize clinic workflows by offering a centralized system for scheduling appointments, managing services, and maintaining patient medical records. The platform supports four user roles: Guest (browse clinic info, doctors, services, price list, news, and reviews), Patient (schedule appointments, view personal medical history, submit reviews, edit profile, and apply for a doctor position by submitting a CV and photo), Doctor (view personal appointment schedule and edit own profile), and Admin (manage service listings, approve doctor employment requests, publish clinic news, and assign appointments to doctors)."
  },
  {
    title: "E-commerce WPF Platform",
    description:
      "A desktop-based E-commerce platform developed using C# and WPF with SQL Server as the database. It supports two types of users: Customers and Sellers (Companies).",
    technologies: ["C#", "WPF", "SQL Server", "Desktop App"],
    githubUrl: "https://github.com/dzemilmanic/E-market",
    hostedUrl: "https://presentation-wpf-project.netlify.app/",
    image: "https://dzemil.blob.core.windows.net/slike/ecomerc.png",
    "details": "A desktop-based E-commerce platform developed using C# and WPF with SQL Server as the database. The application supports two user roles with separate interfaces: Customer and Seller (Company). Customers can add products to a cart and place orders, view order history with status updates, send and receive in-app messages with sellers, contact sellers via email, and generate a spending report exported as a .txt file. Sellers can add, edit, and delete products from their inventory, manage and update the status of received orders, communicate with customers through in-app messaging and email (SMTP), and generate an earnings report exported as a .txt file. Built with C# and WPF on the frontend, SQL Server as the database, with role-based authentication and SMTP email support.",
  },
  {
    title: "Oculus clinic mobile app",
    description:
      "Oculus is a full-stack mobile built with React Native, Node.js with GraphQL and .NET. The app allows patients, doctors, and administrators to efficiently manage appointments, view medical history, and access clinic-related services and information — all from a mobile device.",
    technologies: ["Full-stack", "Medical System", "Mobile App"],
    githubUrl: "https://github.com/dzemilmanic/Oculus-app",
    hostedUrl: "",
    image: "https://dzemil.blob.core.windows.net/slike/app.jpg",
    "details": "Oculus is a full-stack mobile application developed for a private eye clinic, designed to modernize and simplify daily clinic operations through a mobile-first solution. The app supports four user roles: Guest (browse clinic info, doctor profiles, services, price list, news, reviews, and take the Ishihara Color Blindness Test), Patient (schedule and manage appointments, view personal medical history, submit reviews, edit profile, and apply for a doctor position by uploading a CV and photo), Doctor (view appointment schedule and manage personal profile), and Admin (add, update, and delete clinic services, approve doctor applications, publish news and announcements, and assign appointments to doctors — without access to patient medical data)."
  },
  {
    title: "Sunrise and Sunset",
    description:
      "A modern web application that provides users with real-time solar information — including sunrise, sunset, and other solar events — for locations around the world using the SunriseSunset.io API.",
    technologies: ["JavaScript", "API Integration", "Web Development"],
    githubUrl: "https://github.com/dzemilmanic/Sunrise-and-Sunset",
    hostedUrl: "https://sunristeandsunset.netlify.app/",
    image: "https://dzemil.blob.core.windows.net/slike/sunrise.png",
    "details": "A modern web application that provides real-time solar information for locations around the world using the SunriseSunset.io API. The home page displays current time, date, and solar data for a default location (Novi Pazar). Users can fetch solar data by manually entering latitude, longitude, and date, or by selecting from predefined locations (Novi Pazar, Tutin, Sjenica, Prijepolje, Sarajevo). Additional pages include an image gallery with a carousel of sunrise and sunset photos, and a contact page with a validated contact form. The app includes user authentication (login and registration via mock API) with session management, Google Translate integration for multilingual support, and a fully responsive design optimized for all screen sizes."
  },
  {
    title: "Rijad software",
    description:
      "This project is a React-based website for Rijad Software, an IT company located in Germany.",
    technologies: ["React", "Web Development"],
    githubUrl: "https://github.com/dzemilmanic/rijad-software",
    hostedUrl: "https://rijadsoftware.com/",
    image: "https://i.postimg.cc/wMbFLTRP/rijad.png",
    "details": "A React-based company website for Rijad Software, an IT company located in Germany. The website showcases the company profile, services, and contact information. Services offered include Sage 100 solutions and extensions, custom software development, ERP integration, CRM systems, mobile development, cloud solutions, support and maintenance, desktop applications, and project planning and consulting. Built with React, JavaScript/JSX, and Lucide React for icons.",
  },
  {
    title: "NaviGo",
    description:
      "NaviGo is a modern React-.NET application for the Digital Logistics & Transportation Platform.",
    technologies: ["React", "ASP.NET", "CQRS", "Web Development"],
    githubUrl: "https://github.com/dzemilmanic/navigo",
    hostedUrl: "https://navigo.up.railway.app/",
    image: "https://i.postimg.cc/TPTMj4K1/navigo.png",
    images: [
      "https://i.postimg.cc/TPTMj4K1/navigo.png",
      "https://i.postimg.cc/4ysj5QTB/image.png",
    ],
    "details": "NaviGo is a modern React-based frontend for a Digital Logistics and Transportation Platform, providing intuitive dashboards and tools for three user roles. Transport Companies can manage vehicles, drivers, and service schedules, define routes and pricing models, handle incidents such as breakdowns and rerouting, apply penalties for delivery delays, and access performance analytics. Freight Forwarders can browse available routes and vehicles, negotiate commissions and discounts, track contract and shipment statuses, and manage client portfolios. Clients can search and filter transport offers by route, cargo type, date, and price, reserve transport services, upload payment proofs, and track shipments in real time. Technical highlights include Google OAuth authentication, interactive dashboards with Chart.js, route tracking with Leaflet maps, PDF contract export via jsPDF, real-time backend sync, lazy loading, and code splitting.",
  },
  {
    title: "Air Quality Monitor",
    description:
      "Design and Implementation of a Real-time Air Pollution Monitoring System for Novi Pazar and Tutin.",
    technologies: ["React"],
    githubUrl: "https://github.com/dzemilmanic/Monitor-kvaliteta-vazduha",
    hostedUrl: "https://vazduh.netlify.app/",
    image: "https://i.postimg.cc/pTRVtNhx/vazduh.png",
    "details": "Air Quality Monitor is a modern platform dedicated to real-time air pollution monitoring in the Sandžak region, initially developed for Novi Pazar and later expanded to include Tutin. The goal of the project is to provide citizens with accurate, transparent, and easily accessible information about the air quality in their community, raising awareness of environmental challenges. Key features include real-time monitoring of pollutant concentrations (PM2.5, PM10, and others) for both locations, historical data charts and tables for trend analysis, and a fully responsive design optimized for mobile, tablet, and desktop."
  },
  {
    title: "HopMe",
    description:
      "A modern ride-sharing platform connecting drivers with passengers traveling the same route.",
    technologies: ["Swift", "NodeJs", "IOS"],
    githubUrl: "https://github.com/dzemilmanic/HopMe",
    hostedUrl: "",
    image: "https://i.postimg.cc/T20jGdtV/image.png",
    "details": "HopMe is a comprehensive ride-sharing platform designed to make carpooling easy and efficient, connecting drivers with empty seats to passengers traveling the same route. Passengers can search for rides by origin, destination, date, and time, book seats with instant confirmation, track ride routes and driver locations in real time, rate drivers, and receive push notifications on booking status. Drivers can post rides with detailed information, manage multiple vehicles with photos, receive and manage booking requests with full approve/reject control, and track trip history and earnings. Security features include JWT authentication, email verification via Resend, password recovery, and granular profile privacy controls. Additional features include maps integration with geocoding and route calculation, multi-language support (English and Serbian), vehicle photo storage on Azure Blob Storage, push notifications, and a comprehensive admin dashboard."
  },
  {
    title: "Trainify",
    description:
      "Trainify – a modern solution for managing football clubs, group training sessions, participants, coaches, as well as internal communication and progress tracking.",
    technologies: ["Angular", "ASP.NET", "PostgreSQL"],
    githubUrl: "https://github.com/dzemilmanic/Trainify-frontend",
    hostedUrl: "https://trainify.up.railway.app/",
    image: "https://i.postimg.cc/Nf2cF5F4/image.png",
    images: [
      "https://i.postimg.cc/Nf2cF5F4/image.png",
      "https://i.postimg.cc/h450MGsc/image.png",
      "https://i.postimg.cc/cJF9QGLv/image.png",
      "https://i.postimg.cc/L53Z12m0/image.png",
    ],
    "details": "Trainify is a modern frontend application for managing football clubs, built with Angular using standalone components and a modular role-based architecture with JWT authentication. The platform supports four user roles. Administrators have access to a club activity dashboard, full user management (creating, editing, and deleting coaches and participants), training group management with coach and participant assignments, global system notifications, and a chat interface for internal communication. Coaches can view their daily training schedule, track participant attendance by group, access detailed participant profiles including health status, goals, and performance data, and communicate with administration and assigned participants. Participants can view upcoming trainings and recent activity on their dashboard, track their progress through visual charts (weight, measurements, performance), review their attendance history, and message their assigned coach or administration. All roles share a secure authentication flow with JWT token generation, mandatory password change on first login, and hierarchical route guards preventing unauthorized access."
  },
];
