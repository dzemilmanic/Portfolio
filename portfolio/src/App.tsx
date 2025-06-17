import { useState, useEffect } from 'react';
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
} from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS'],
      description: 'Creating responsive and interactive user interfaces'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['ASP.NET', 'Django', 'Laravel', 'PHP'],
      description: 'Building robust server-side applications and APIs'
    },
    {
      title: 'Programming Languages',
      icon: Terminal,
      skills: ['C#', 'Python', 'C/C++', 'VHDL'],
      description: 'Proficient in multiple programming paradigms'
    },
    {
      title: 'Desktop & Database',
      icon: Monitor,
      skills: ['WPF', 'SQL Server', 'MySQL', 'PostgreSQL'],
      description: 'Desktop applications and database management'
    },
    {
      title: 'System Design',
      icon: Cpu,
      skills: ['Architecture', 'Design Patterns', 'Problem Solving'],
      description: 'Designing scalable and maintainable systems'
    },
    {
      title: 'Development Tools',
      icon: Layers,
      skills: ['Git', 'Visual Studio', 'VS Code', 'Debugging'],
      description: 'Professional development workflow and tools'
    }
  ];

  const projects = [
    {
      title: 'Sunrise and Sunset',
      description: 'A modern web application that provides users with real-time solar information — including sunrise, sunset, and other solar events — for locations around the world using the SunriseSunset.io API.',
      technologies: ['JavaScript', 'API Integration', 'Web Development'],
      liveUrl: 'https://sunristeandsunset.netlify.app/',
      image: 'https://dzemil.blob.core.windows.net/slike/sunrise.png'
    },
    {
      title: 'E-commerce WPF Platform',
      description: 'A desktop-based E-commerce platform developed using C# and WPF with SQL Server as the database. It supports two types of users: Customers and Sellers (Companies).',
      technologies: ['C#', 'WPF', 'SQL Server', 'Desktop App'],
      liveUrl: 'https://presentation-wpf-project.netlify.app/',
      image: 'https://dzemil.blob.core.windows.net/slike/ecomerc.png'
    },
    {
      title: 'Oculus Clinic',
      description: 'A full-stack web application developed for a private eye clinic. It allows patients, doctors, and administrators to manage appointments, access medical history, and view important clinic services.',
      technologies: ['Full-stack', 'User Management', 'Medical System'],
      liveUrl: 'https://oculusklinika.up.railway.app/',
      image: 'https://dzemil.blob.core.windows.net/slike/oculus_home.png'
    },
    {
      title: 'Connect 4 Game',
      description: 'A classic two-player strategy game where players take turns dropping their pieces into a 7x6 grid. This project delivers a modern version using Django backend and React frontend.',
      technologies: ['Django', 'React', 'Game Development'],
      liveUrl: 'https://connect4-game.up.railway.app/',
      image: 'https://dzemil.blob.core.windows.net/slike/connect4.png'
    },
    {
      title: 'Pyzzle',
      description: 'An interactive puzzle-solving application built with Django and React, providing users with engaging puzzle challenges and solutions.',
      technologies: ['Django', 'React', 'Problem Solving'],
      liveUrl: 'https://pyzzle.up.railway.app/',
      image: 'https://dzemil.blob.core.windows.net/slike/puzla.png'
    },
    {
      title: 'Arduino Projects',
      description: 'A collection of Arduino-based hardware projects showcasing embedded systems programming, sensor integration, and IoT applications. Various projects demonstrating microcontroller programming and electronics.',
      technologies: ['Arduino', 'C++', 'Electronics', 'IoT'],
      liveUrl: 'https://github.com/dzemilmanic/Arduino-projects',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio">
      {/* Floating Profile Image */}
      <div 
        className="floating-profile"
        style={{
          transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`
        }}
      >
        <img 
          src="https://dzemil.blob.core.windows.net/slike/ja_kotor.jpg" 
          alt="Dzemil Manic" 
          className="floating-profile-image"
        />
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-text">Dzemil Manic</span>
              <span className="logo-subtitle">Software Engineer</span>
            </div>
            <div className="nav-links">
              {[
                { id: 'home', label: 'Home', icon: User },
                { id: 'about', label: 'About', icon: User },
                { id: 'skills', label: 'Skills', icon: Code },
                { id: 'projects', label: 'Projects', icon: Briefcase },
                { id: 'contact', label: 'Contact', icon: MessageSquare }
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
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
      <section id="home" className="hero-section">
        <div className="container">
          <div className={`hero-content ${isLoaded ? 'loaded' : ''}`}>
            <div className="hero-avatar">
              <div className="avatar-circle">
                <img 
                  src="https://dzemil.blob.core.windows.net/slike/ja_kotor.jpg" 
                  alt="Dzemil Manic" 
                  className="avatar-image"
                />
              </div>
              <h1 className="hero-title">
                Dzemil <span className="gradient-text">Manic</span>
              </h1>
              <p className="hero-subtitle">
                Software Engineering Student & Full-Stack Developer
              </p>
              <p className="hero-description">
                Third-year Software Engineering student passionate about creating innovative solutions 
                with modern technologies across web, desktop, and system programming.
              </p>
            </div>
            
            <div className="hero-buttons">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
              >
                Get In Touch
              </button>
            </div>

            <div className="scroll-indicator">
              <ChevronDown className="scroll-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="about-content">
            <div className="about-visual">
              <div className="code-illustration">
                <Code className="code-icon" />
              </div>
            </div>
            
            <div className="about-text">
              <h3 className="about-title">Passionate Software Engineer</h3>
              <p className="about-paragraph">
                I'm currently in my third year of Software Engineering studies, where I've developed 
                a strong foundation in multiple programming paradigms and technologies. My journey 
                spans from low-level hardware description languages like VHDL to modern web frameworks.
              </p>
              <p className="about-paragraph">
                I believe in writing clean, efficient code and creating user-centric applications. 
                My experience ranges from desktop applications using C# and WPF to full-stack web 
                development with modern frameworks like React and Django.
              </p>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">12+</div>
                  <div className="stat-label">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="section-divider"></div>
            <p className="section-description">
              A comprehensive overview of my technical skills and areas of expertise
            </p>
          </div>

          <div className="skills-grid">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="skill-card">
                  <div className="skill-card-header">
                    <div className="skill-icon-wrapper">
                      <IconComponent className="skill-icon" />
                    </div>
                    <h3 className="skill-card-title">{category.title}</h3>
                  </div>
                  <p className="skill-card-description">{category.description}</p>
                  <div className="skill-tags">
                    {category.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">
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
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-divider"></div>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-image"
                  />
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {project.title === 'Arduino Projects' ? 'View Repository' : 'View Live Demo'}
                    <ExternalLink className="link-icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title white">Let's Connect</h2>
            <div className="section-divider light"></div>
            <p className="section-subtitle">
              I'm always interested in discussing new opportunities, projects, or collaborations.
              Feel free to reach out through any of my social platforms or email!
            </p>
          </div>

          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-title">Get In Touch</h3>
              <p className="contact-description">
                Whether you're looking for a developer for your next project, want to collaborate, 
                or just want to connect, I'd love to hear from you. You can find me on various 
                platforms or reach out directly via email.
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

            <div className="social-platforms">
              <h3 className="form-title">Connect With Me</h3>
              <div className="social-grid">
                <a 
                  href="https://github.com/dzemilmanic" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <Github className="social-card-icon" />
                  <div className="social-card-content">
                    <h4>GitHub</h4>
                    <p>Check out my repositories and projects</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/d%C5%BEemil-mani%C4%87-6b18862a5/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <Linkedin className="social-card-icon" />
                  <div className="social-card-content">
                    <h4>LinkedIn</h4>
                    <p>Professional network and career updates</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.instagram.com/dzemilmanic/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <Instagram className="social-card-icon" />
                  <div className="social-card-content">
                    <h4>Instagram</h4>
                    <p>Personal updates and behind the scenes</p>
                  </div>
                </a>
                
                <a 
                  href="https://orcid.org/0009-0008-9867-0905" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-card"
                >
                  <ExternalLink className="social-card-icon" />
                  <div className="social-card-content">
                    <h4>ORCID</h4>
                    <p>Academic profile and research contributions</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="footer">
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
              <a 
                href="mailto:dzemilmanic@hotmail.com"
                className="social-link"
              >
                <Mail />
              </a>
            </div>
            <p className="copyright">
              © 2025 Dzemil Manic. Built with React.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;