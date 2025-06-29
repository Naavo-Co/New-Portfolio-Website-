import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Code, Palette, Zap, Database, Globe, Server, Figma, Github, Chrome, Globe2 } from 'lucide-react';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'End-to-end web applications with modern technologies'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces and experiences'
    },
    {
      icon: Zap,
      title: 'Digital Innovation',
      description: 'Cutting-edge solutions for modern businesses'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working closely with clients to achieve their goals'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '30+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  // Floating skill cards for the right side visual
  const floatingCards = [
    { icon: Code, label: 'React', className: 'card-1' },
    { icon: Palette, label: 'Design', className: 'card-2' },
    { icon: Zap, label: 'Innovation', className: 'card-3' },
    { icon: Database, label: 'MongoDB', className: 'card-4' },
    { icon: Server, label: 'Node.js', className: 'card-5' },
    { icon: Figma, label: 'Figma', className: 'card-6' },
    { icon: Github, label: 'GitHub', className: 'card-7' },
    { icon: Chrome, label: 'SEO', className: 'card-8' },
    { icon: Globe, label: 'Web', className: 'card-9' },
    { icon: Globe2, label: 'WordPress', className: 'card-10' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">
            About <span className="text-gradient">Us</span>
          </h2>
          <p className="section-subtitle">
            We're Naavo&Co. – Where Ideas Become Digital Reality
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3>Transforming Visions Into Digital Excellence</h3>
            <p>
              Naavo&Co. is a forward-thinking web development studio focused on crafting 
              cutting-edge websites and digital experiences. Our mission is to turn creative 
              visions into future-ready web solutions for businesses, entrepreneurs, and brands 
              that want to stand out online.
            </p>
            <p>
              From sleek landing pages to full-fledged web applications, we specialize in 
              building user-friendly, scalable, and visually stunning digital products. 
              Powered by passion and precision, we ensure every line of code delivers value.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="about-image">
              <div className="image-container">
                {floatingCards.map((card, i) => (
                  <div key={card.label} className={`floating-card ${card.className}`}>
                    <card.icon size={24} />
                    <span>{card.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="services-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="service-icon">
                <service.icon size={32} />
              </div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 