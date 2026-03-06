export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  hostedUrl: string;
  image: string;
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
  },
  {
    title: "Pyzzle",
    description:
      "An interactive puzzle-solving application built with Django and React, providing users with engaging puzzle challenges and solutions.",
    technologies: ["Django", "React", "Problem Solving"],
    githubUrl: "https://github.com/dzemilmanic/Puzzle",
    hostedUrl: "https://pyzzle.up.railway.app/",
    image: "https://dzemil.blob.core.windows.net/slike/puzla.png",
  },
  {
    title: "Structo",
    description:
      "Structo is a full-stack web application built with Laravel (Blade) and MySQL. It serves as a bridge between everyday users and professionals in the architecture and construction industries.",
    technologies: ["Laravel", "PHP", "Blade", "MySQL", "Full-stack"],
    githubUrl: "https://github.com/dzemilmanic/Structo",
    hostedUrl: "https://structo.up.railway.app/",
    image: "https://dzemil.blob.core.windows.net/slike/structo.png",
  },
  {
    title: "Oculus Clinic",
    description:
      "A full-stack web application developed for a private eye clinic. It allows patients, doctors, and administrators to manage appointments, access medical history, and view important clinic services.",
    technologies: ["Full-stack", "User Management", "Medical System"],
    githubUrl: "https://github.com/dzemilmanic/Oculus-web",
    hostedUrl: "https://oculusklinika.up.railway.app/",
    image: "https://dzemil.blob.core.windows.net/slike/oculus_home.png",
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
];
