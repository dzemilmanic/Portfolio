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
    details: "Ova igra sadrži i Django backend koji omogućava praćenje rezultata, istoriju igara i matchmaking za dva igrača u realnom vremenu. Frontend je kreiran pomoću React-a kako bi se obezbedio gladak i reaktivan korisnički interfejs. Dodatno su implementirane animacije padanja žetona i provere pobedničkih kombinacija u realnom vremenu, kao i podrška za lokalni mod igranja."
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
    details: "Kolekcija se sastoji od više praktičnih projekata, uključujući pametne sisteme kućne automatizacije (Smart Home), ultrazvučne senzore udaljenosti, displeje, automatsko zalivanje biljaka na osnovu vlažnosti zemljišta, kao i IoT integraciju za slanje podataka na cloud i kontrolu preko mobilnih telefona."
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
    details: "Ova klinika omogućava kompletno upravljanje zdravstvenim kartonima pacijenata, zakazivanje i otkazivanje pregleda, kao i uvid u istoriju bolesti i prepisane terapije. Sistem poseduje tri uloge: pacijent, lekar i administrator, sa prilagođenim interfejsom za svaku od uloga radi maksimalne efikasnosti rada."
  },
  {
    title: "E-commerce WPF Platform",
    description:
      "A desktop-based E-commerce platform developed using C# and WPF with SQL Server as the database. It supports two types of users: Customers and Sellers (Companies).",
    technologies: ["C#", "WPF", "SQL Server", "Desktop App"],
    githubUrl: "https://github.com/dzemilmanic/E-market",
    hostedUrl: "https://presentation-wpf-project.netlify.app/",
    image: "https://dzemil.blob.core.windows.net/slike/ecomerc.png",
  },
  {
    title: "Oculus clinic mobile app",
    description:
      "Oculus is a full-stack mobile built with React Native, Node.js with GraphQL and .NET. The app allows patients, doctors, and administrators to efficiently manage appointments, view medical history, and access clinic-related services and information — all from a mobile device.",
    technologies: ["Full-stack", "Medical System", "Mobile App"],
    githubUrl: "https://github.com/dzemilmanic/Oculus-app",
    hostedUrl: "",
    image: "https://dzemil.blob.core.windows.net/slike/app.jpg",
  },
  {
    title: "Sunrise and Sunset",
    description:
      "A modern web application that provides users with real-time solar information — including sunrise, sunset, and other solar events — for locations around the world using the SunriseSunset.io API.",
    technologies: ["JavaScript", "API Integration", "Web Development"],
    githubUrl: "https://github.com/dzemilmanic/Sunrise-and-Sunset",
    hostedUrl: "https://sunristeandsunset.netlify.app/",
    image: "https://dzemil.blob.core.windows.net/slike/sunrise.png",
  },
  {
    title: "Rijad software",
    description:
      "This project is a React-based website for Rijad Software, an IT company located in Germany.",
    technologies: ["React", "Web Development"],
    githubUrl: "https://github.com/dzemilmanic/rijad-software",
    hostedUrl: "https://rijadsoftware.com/",
    image: "https://i.postimg.cc/wMbFLTRP/rijad.png",
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
  },
  {
    title: "Air Quality Monitor",
    description:
      "Design and Implementation of a Real-time Air Pollution Monitoring System for Novi Pazar and Tutin.",
    technologies: ["React"],
    githubUrl: "https://github.com/dzemilmanic/Monitor-kvaliteta-vazduha",
    hostedUrl: "https://vazduh.netlify.app/",
    image: "https://i.postimg.cc/pTRVtNhx/vazduh.png",
  },
  {
    title: "HopMe",
    description:
      "A modern ride-sharing platform connecting drivers with passengers traveling the same route.",
    technologies: ["Swift", "NodeJs", "IOS"],
    githubUrl: "https://github.com/dzemilmanic/HopMe",
    hostedUrl: "",
    image: "https://i.postimg.cc/T20jGdtV/image.png",
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
  },
];
