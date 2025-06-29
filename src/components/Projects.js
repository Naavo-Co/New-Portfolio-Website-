import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Eye } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const projects = [
    {
      title: 'Caroline Seiffert',
      description: 'Portfolio & Coaching Website',
      image: '/logo1.png',
      technologies: ['React', 'Three.js', 'Framer Motion'],
      liveUrl: 'https://www.carolineseiffert.com/',
      githubUrl: '#',
      year: '2025'
    },
    {
      title: 'Little Ashe',
      description: 'Minimal E-Commerce Store',
      image: '/image.png',
      technologies: ['Next.js', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://littleashe.com/',
      githubUrl: '#',
      year: '2025'
    },
    {
      title: 'TechFlow Dashboard',
      description: 'Analytics & Data Visualization Platform',
      image: '/logo1.png',
      technologies: ['React', 'D3.js', 'Node.js'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      title: 'EcoTracker Mobile',
      description: 'Environmental Impact Tracking App',
      image: '/image.png',
      technologies: ['React Native', 'Firebase', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      title: 'Creative Studio',
      description: 'Design Agency Portfolio',
      image: '/logo1.png',
      technologies: ['Vue.js', 'GSAP', 'WebGL'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2024'
    },
    {
      title: 'SmartHome Hub',
      description: 'IoT Device Management System',
      image: '/image.png',
      technologies: ['Angular', 'Python', 'AWS'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      title: 'Fitness Tracker Pro',
      description: 'Advanced Workout & Nutrition App',
      image: '/logo1.png',
      technologies: ['React', 'GraphQL', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      title: 'CryptoTrade Pro',
      description: 'Real-time Cryptocurrency Trading Platform',
      image: '/image.png',
      technologies: ['TypeScript', 'WebSocket', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2023'
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent Customer Support Bot',
      image: '/logo1.png',
      technologies: ['Python', 'TensorFlow', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      year: '2022'
    }
  ];

  return (
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            Our <span className="text-gradient">Works</span>
          </h2>
          <p className="section-subtitle">
            Showcasing our latest projects and digital innovations
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye size={20} />
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <span className="project-year">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 