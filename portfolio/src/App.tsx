import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Server,
  Globe,
  ChevronDown,
  User,
  Briefcase,
  MessageSquare,
  Monitor,
  Layers,
  Terminal,
  Cpu,
  Instagram,
} from "lucide-react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [, setVisibleSections] = useState(new Set(["home"])); // Start with home visible
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Loading sequence
    const loadingInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(loadingInterval);
          setTimeout(() => {
            setIsLoading(false);
            setTimeout(() => {
              setIsLoaded(true);
              // Make all sections visible after loading
              setVisibleSections(
                new Set(["home", "about", "skills", "projects", "contact"])
              );
            }, 100);
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 150);

    // Scroll handler
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe sections after loading
    setTimeout(() => {
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        observerRef.current?.observe(section);
      });
    }, 2000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observerRef.current?.disconnect();
      clearInterval(loadingInterval);
    };
  }, []);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "JavaScript", "Swift", "HTML/CSS", "Tailwind CSS"],
      description: "Creating responsive and interactive user interfaces",
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["ASP.NET", "Django", "Laravel", "PHP"],
      description: "Building robust server-side applications and APIs",
    },
    {
      title: "Programming Languages",
      icon: Terminal,
      skills: ["C#", "Python", "C/C++", "VHDL"],
      description: "Proficient in multiple programming paradigms",
    },
    {
      title: "Desktop & Database",
      icon: Monitor,
      skills: ["WPF", "SQL Server", "MySQL", "PostgreSQL"],
      description: "Desktop applications and database management",
    },
    {
      title: "System Design",
      icon: Cpu,
      skills: ["Architecture", "Design Patterns", "Problem Solving"],
      description: "Designing scalable and maintainable systems",
    },
    {
      title: "Development Tools",
      icon: Layers,
      skills: ["Git", "Visual Studio", "VS Code", "Debugging"],
      description: "Professional development workflow and tools",
    },
  ];

  const projects = [
    {
      title: "Connect 4 Game",
      description:
        "A classic two-player strategy game where players take turns dropping their pieces into a 7x6 grid. This project delivers a modern version using Django backend and React frontend.",
      technologies: ["Django", "React", "Game Development"],
      liveUrl: "https://github.com/dzemilmanic/Connect4",
      image: "https://dzemil.blob.core.windows.net/slike/connect4.png",
    },
    {
      title: "Arduino Projects",
      description:
        "A collection of Arduino-based hardware projects showcasing embedded systems programming, sensor integration, and IoT applications. Various projects demonstrating microcontroller programming and electronics.",
      technologies: ["Arduino", "C++", "Electronics", "IoT"],
      liveUrl: "https://github.com/dzemilmanic/Arduino-projects",
      image:
        "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Pyzzle",
      description:
        "An interactive puzzle-solving application built with Django and React, providing users with engaging puzzle challenges and solutions.",
      technologies: ["Django", "React", "Problem Solving"],
      liveUrl: "https://github.com/dzemilmanic/Puzzle",
      image: "https://dzemil.blob.core.windows.net/slike/puzla.png",
    },
    {
      title: "Structo",
      description:
        "Structo is a full-stack web application built with Laravel (Blade) and MySQL. It serves as a bridge between everyday users and professionals in the architecture and construction industries. ",
      technologies: ["Laravel", "PHP", "Blade", "MySQL", "Full-stack"],
      liveUrl: "https://github.com/dzemilmanic/Structo",
      image: "https://dzemil.blob.core.windows.net/slike/structo.png",
    },
    {
      title: "Oculus Clinic",
      description:
        "A full-stack web application developed for a private eye clinic. It allows patients, doctors, and administrators to manage appointments, access medical history, and view important clinic services.",
      technologies: ["Full-stack", "User Management", "Medical System"],
      liveUrl: "https://github.com/dzemilmanic/Oculus-web",
      image: "https://dzemil.blob.core.windows.net/slike/oculus_home.png",
    },
    {
      title: "E-commerce WPF Platform",
      description:
        "A desktop-based E-commerce platform developed using C# and WPF with SQL Server as the database. It supports two types of users: Customers and Sellers (Companies).",
      technologies: ["C#", "WPF", "SQL Server", "Desktop App"],
      liveUrl: "https://github.com/dzemilmanic/E-market",
      image: "https://dzemil.blob.core.windows.net/slike/ecomerc.png",
    },
    {
      title: "Oculus clinic mobile app",
      description:
        "Oculus is a full-stack mobile built with React Native, Node.js with GraphQL and .NET. The app allows patients, doctors, and administrators to efficiently manage appointments, view medical history, and access clinic-related services and information — all from a mobile device.",
      technologies: ["Full-stack", "Medical System", "Mobile App"],
      liveUrl: "https://github.com/dzemilmanic/Oculus-app",
      image: "https://dzemil.blob.core.windows.net/slike/app.jpg",
    },
    {
      title: "Sunrise and Sunset",
      description:
        "A modern web application that provides users with real-time solar information — including sunrise, sunset, and other solar events — for locations around the world using the SunriseSunset.io API.",
      technologies: ["JavaScript", "API Integration", "Web Development"],
      liveUrl: "https://github.com/dzemilmanic/Sunrise-and-Sunset",
      image: "https://dzemil.blob.core.windows.net/slike/sunrise.png",
    },
    {
      title: "Rijad software",
      description:
        "This project is a React-based website for Rijad Software, an IT company located in Germany.",
      technologies: ["React", "Web Development"],
      liveUrl: "https://github.com/dzemilmanic/rijad-software",
      image: "https://i.postimg.cc/wMbFLTRP/rijad.png",
    },
    {
      title: "NaviGo",
      description:
        "NaviGo is a modern React-.NET application for the Digital Logistics & Transportation Platform.",
      technologies: ["React", "ASP.NET", "CQRS", "Web Development"],
      liveUrl: "https://github.com/dzemilmanic/navigo",
      image: "https://i.postimg.cc/TPTMj4K1/navigo.png",
    },
    {
      title: "Air Quality Monitor",
      description:
        "Real-time Air Pollution Monitoring for the City of Novi Pazar.",
      technologies: ["React"],
      liveUrl: "https://github.com/dzemilmanic/Monitor-kvaliteta-vazduha",
      image: "https://i.postimg.cc/pTRVtNhx/vazduh.png",
    },
    {
      title: "HopMe",
      description:
        "A modern ride-sharing platform connecting drivers with passengers traveling the same route.",
      technologies: ["Swift", "NodeJs", "IOS"],
      liveUrl: "https://github.com/dzemilmanic/HopMe",
      image: "",
    },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className="loader-container">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>

        <div className="loader-content">
          <div className="loader-logo">
            <div className="logo-circle">
              <div className="logo-inner">
                <Code className="logo-icon" />
              </div>
            </div>
          </div>

          <div className="loader-text">
            <h1 className="loader-name">
              <span className="letter" style={{ animationDelay: "0.1s" }}>
                D
              </span>
              <span className="letter" style={{ animationDelay: "0.2s" }}>
                ž
              </span>
              <span className="letter" style={{ animationDelay: "0.3s" }}>
                e
              </span>
              <span className="letter" style={{ animationDelay: "0.4s" }}>
                m
              </span>
              <span className="letter" style={{ animationDelay: "0.5s" }}>
                i
              </span>
              <span className="letter" style={{ animationDelay: "0.6s" }}>
                l
              </span>
              <span className="space"></span>
              <span className="letter" style={{ animationDelay: "0.7s" }}>
                M
              </span>
              <span className="letter" style={{ animationDelay: "0.8s" }}>
                a
              </span>
              <span className="letter" style={{ animationDelay: "0.9s" }}>
                n
              </span>
              <span className="letter" style={{ animationDelay: "1.0s" }}>
                i
              </span>
              <span className="letter" style={{ animationDelay: "1.1s" }}>
                ć
              </span>
            </h1>
            <p className="loader-subtitle">Software Engineer</p>
          </div>

          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <span className="progress-text">
              {Math.round(loadingProgress)}%
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="portfolio">
      {/* Animated Background */}
      <div className="animated-background">
        <canvas id="particles-canvas"></canvas>
      </div>

      {/* Floating Profile Image */}
      <div
        className="floating-profile"
        style={{
          transform: `translateY(${scrollY * 0.1}px) rotate(${
            scrollY * 0.05
          }deg)`,
        }}
      >
        <img
          src="https://dzemil.blob.core.windows.net/slike/ja_kotor.jpg"
          alt="Džemil Manić"
          className="floating-profile-image"
        />
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-text">Džemil Manić</span>
              <span className="logo-subtitle">Software Engineer</span>
            </div>
            <div className="nav-links">
              {[
                { id: "home", label: "Home", icon: User },
                { id: "about", label: "About", icon: User },
                { id: "skills", label: "Skills", icon: Code },
                { id: "projects", label: "Projects", icon: Briefcase },
                { id: "contact", label: "Contact", icon: MessageSquare },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link ${
                      activeSection === item.id ? "active" : ""
                    }`}
                  >
                    <IconComponent className="nav-icon" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section visible">
        <div className="container">
          <div className={`hero-content ${isLoaded ? "loaded" : ""}`}>
            <div className="hero-avatar">
              <div className="avatar-circle">
                <img
                  src="https://dzemil.blob.core.windows.net/slike/ja_kotor.jpg"
                  alt="Džemil Manić"
                  className="avatar-image"
                />
              </div>
              <h1 className="hero-title">
                <span className="title-word" style={{ animationDelay: "0.2s" }}>
                  Džemil
                </span>
                <span
                  className="title-word "
                  style={{ animationDelay: "0.4s" }}
                >
                  Manić
                </span>
              </h1>
              <p
                className="hero-subtitle animated-text"
                style={{ animationDelay: "0.6s" }}
              >
                Software Engineering Student & Full-Stack Developer
              </p>
              <p
                className="hero-description animated-text"
                style={{ animationDelay: "0.8s" }}
              >
                Final-year Software Engineering student passionate about
                creating innovative solutions with modern technologies across
                web, desktop, and system programming.
              </p>
            </div>

            <div
              className="hero-buttons animated-buttons"
              style={{ animationDelay: "1.0s" }}
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="btn btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="btn btn-secondary"
              >
                Get In Touch
              </button>
            </div>

            <div
              className="scroll-indicator animated-scroll"
              style={{ animationDelay: "1.2s" }}
            >
              <ChevronDown className="scroll-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section visible">
        <div className="container">
          <div className="section-header animated-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-divider"></div>
          </div>

          <div className="about-content">
            <div className="about-visual animated-visual">
              <div className="code-illustration">
                <Code className="code-icon" />
              </div>
            </div>

            <div className="about-text animated-text-content">
              <h3 className="about-title">Passionate Software Engineer</h3>
              <p className="about-paragraph">
                I'm currently in my final year of Software Engineering studies,
                where I've developed a strong foundation in multiple programming
                paradigms and technologies. My journey spans from low-level
                hardware description languages like VHDL to modern web
                frameworks.
              </p>
              <p className="about-paragraph">
                I believe in writing clean, efficient code and creating
                user-centric applications. My experience ranges from desktop
                applications using C# and WPF to full-stack web development with
                modern frameworks like React and Django.
              </p>

              <div className="stats-grid">
                <div
                  className="stat-card animated-stat"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="stat-number">10+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div
                  className="stat-card animated-stat"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section visible">
        <div className="container">
          <div className="section-header animated-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              A comprehensive overview of my technical skills and areas of
              expertise
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="skill-card animated-skill-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="skill-card-header">
                    <div className="skill-icon-wrapper">
                      <IconComponent className="skill-icon" />
                    </div>
                    <h3 className="skill-card-title">{category.title}</h3>
                  </div>
                  <p className="skill-card-description">
                    {category.description}
                  </p>
                  <div className="skill-tags">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="skill-tag animated-tag"
                        style={{
                          animationDelay: `${index * 0.1 + skillIndex * 0.05}s`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section visible">
        <div className="container">
          <div className="section-header animated-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-divider"></div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-card animated-project-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="project-header">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-overlay">
                    <ExternalLink className="overlay-icon" />
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="tech-tag animated-tech-tag"
                        style={{
                          animationDelay: `${index * 0.15 + techIndex * 0.05}s`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {(project.title = "View Repository")}
                    <ExternalLink className="link-icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section visible">
        <div className="container">
          <div className="section-header animated-header">
            <h2 className="section-title white">Let's Connect</h2>
            <div className="section-divider light"></div>
            <p className="section-subtitle">
              I'm always interested in discussing new opportunities, projects,
              or collaborations. Feel free to reach out through any of my social
              platforms or email!
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info animated-contact-info">
              <h3 className="contact-title">Get In Touch</h3>
              <p className="contact-description">
                Whether you're looking for a developer for your next project,
                want to collaborate, or just want to connect, I'd love to hear
                from you. You can find me on various platforms or reach out
                directly via email.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <Mail className="contact-icon" />
                  <div className="contact-emails">
                    <div>dzemilmanic@hotmail.com</div>
                    <div>manicdzemil@gmail.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <MessageSquare className="contact-icon" />
                  <span>Open to project discussions and collaborations</span>
                </div>
                <div className="contact-item">
                  <Code className="contact-icon" />
                  <span>Available for software development opportunities</span>
                </div>
              </div>
            </div>

            <div className="social-platforms animated-social-platforms">
              <h3 className="form-title">Connect With Me</h3>
              <div className="social-grid">
                {[
                  {
                    href: "https://github.com/dzemilmanic",
                    icon: Github,
                    title: "GitHub",
                    description: "Check out my repositories and projects",
                  },
                  {
                    href: "https://www.linkedin.com/in/d%C5%BEemil-mani%C4%87-6b18862a5/",
                    icon: Linkedin,
                    title: "LinkedIn",
                    description: "Professional network and career updates",
                  },
                  {
                    href: "https://www.instagram.com/dzemilmanic/",
                    icon: Instagram,
                    title: "Instagram",
                    description: "Personal updates and behind the scenes",
                  },
                  {
                    href: "https://orcid.org/0009-0008-9867-0905",
                    icon: ExternalLink,
                    title: "ORCID",
                    description: "Academic profile and research contributions",
                  },
                ].map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-card animated-social-card"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <IconComponent className="social-card-icon" />
                      <div className="social-card-content">
                        <h4>{social.title}</h4>
                        <p>{social.description}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="footer animated-footer">
            <div className="social-links">
              <a
                href="https://github.com/dzemilmanic"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/in/d%C5%BEemil-mani%C4%87-6b18862a5/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.instagram.com/dzemilmanic/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram />
              </a>
              <a href="mailto:dzemilmanic@hotmail.com" className="social-link">
                <Mail />
              </a>
            </div>
            <p className="copyright">© 2025 Džemil Manić. Built with React.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
