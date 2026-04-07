import { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Globe,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  User,
  Briefcase,
  MessageSquare,
  Instagram,
  GitBranch,
} from "lucide-react";
import "./App.css";
import { projects } from "./data/projects";
import { skillCategories } from "./data/skills";


function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [, setVisibleSections] = useState(new Set(["home"]));
  const [currentPage, setCurrentPage] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(() =>
    window.innerWidth <= 640 ? 1 : window.innerWidth <= 1024 ? 2 : 3
  );
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

    // Responsive projects per page
    const handleResize = () => {
      const perPage =
        window.innerWidth <= 640 ? 1 : window.innerWidth <= 1024 ? 2 : 3;
      setProjectsPerPage((prev) => {
        if (prev !== perPage) setCurrentPage(0);
        return perPage;
      });
    };
    window.addEventListener("resize", handleResize);

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
      window.removeEventListener("resize", handleResize);
      observerRef.current?.disconnect();
      clearInterval(loadingInterval);
    };
  }, []);


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
                  <div className="stat-number">15+</div>
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
            <span className="section-eyebrow">What I work with</span>
            <h2 className="section-title skills-title">Skills &amp; Expertise</h2>
            <div className="section-divider skills-divider"></div>
            <p className="skills-section-description">
              A comprehensive overview of my technical skills and areas of expertise
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
                  <div className="skill-card-index">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="skill-card-header">
                    <div className="skill-icon-wrapper">
                      <IconComponent className="skill-icon" />
                    </div>
                    <h3 className="skill-card-title">{category.title}</h3>
                  </div>
                  <div className="skill-card-divider"></div>
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

          {/* Carousel wrapper */}
          <div className="projects-carousel">
            <button
              className="carousel-btn carousel-btn-prev"
              onClick={() =>
                setCurrentPage((p) =>
                  p === 0 ? Math.ceil(projects.length / projectsPerPage) - 1 : p - 1
                )
              }
              aria-label="Previous projects"
            >
              <ChevronLeft className="carousel-btn-icon" />
            </button>

            <div className="projects-grid">
              {projects
                .slice(
                  currentPage * projectsPerPage,
                  currentPage * projectsPerPage + projectsPerPage
                )
                .map((project, index) => (
                  <div
                    key={currentPage * projectsPerPage + index}
                    className="project-card animated-project-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image — links to hosted project if available */}
                    <div className="project-header">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image"
                      />
                      {project.hostedUrl && (
                        <a
                          href={project.hostedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-overlay"
                          title="View live project"
                        >
                          <Globe className="overlay-icon" />
                          <span className="overlay-label">Live Demo</span>
                        </a>
                      )}
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
                              animationDelay: `${index * 0.1 + techIndex * 0.05}s`,
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="project-links">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <GitBranch className="link-icon" />
                          View Repository
                        </a>
                        {project.hostedUrl && (
                          <a
                            href={project.hostedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link project-link-hosted"
                          >
                            <Globe className="link-icon" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            <button
              className="carousel-btn carousel-btn-next"
              onClick={() =>
                setCurrentPage((p) =>
                  p >= Math.ceil(projects.length / projectsPerPage) - 1 ? 0 : p + 1
                )
              }
              aria-label="Next projects"
            >
              <ChevronRight className="carousel-btn-icon" />
            </button>
          </div>

          {/* Dot pagination */}
          <div className="carousel-dots">
            {Array.from({
              length: Math.ceil(projects.length / projectsPerPage),
            }).map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === currentPage ? " active" : ""}`}
                onClick={() => setCurrentPage(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="carousel-counter">
            Showing {currentPage * projectsPerPage + 1}–
            {Math.min(
              (currentPage + 1) * projectsPerPage,
              projects.length
            )}{" "}
            of {projects.length} projects
          </p>
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
