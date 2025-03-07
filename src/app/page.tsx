'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Animation variants for cards
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section" style={{ background: 'linear-gradient(to bottom, var(--dark-bg), var(--dark-card))' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="heading">Hi, I&apos;m <span style={{ color: 'var(--primary-color)' }}>Sourabh</span></h1>
              <p className="subheading">MERN Stack & React Native Developer</p>
              <p style={{ color: 'var(--dark-text-secondary)', marginBottom: '2rem' }}>
                I create beautiful and functional web and mobile applications using modern technologies.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#contact" className="btn">Get in Touch</a>
                <a href="/resume.pdf" className="btn-outline">Download Resume</a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{ position: 'relative', height: '400px' ,width:'400px'}}
            >
              <Image
                src="/profile.png"
                alt="Your Name"
                fill
                style={{ objectFit: 'cover', borderRadius: '50%', border: '4px solid var(--primary-color)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading">About Me</h2>
            <p style={{ color: 'var(--dark-text)', maxWidth: '800px' }}>
              I&apos;m a passionate developer with 2.5 years of experience in building web and mobile applications.
              My journey in software development started october 2022. I specialize in creating scalable
              and maintainable applications using the MERN stack and React Native.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section" style={{ backgroundColor: 'var(--dark-card)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading">Skills & Technologies</h2>
            <div className="grid grid-3">
              {/* Frontend */}
              <motion.div
                className="card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                <div className="card-content">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--dark-text)' }}>Frontend</h3>
                  <ul style={{ listStyle: 'none' }}>
                    <li style={{ marginBottom: '0.5rem', color: 'var(--dark-text-secondary)' }}>React.js</li>
                    <li style={{ marginBottom: '0.5rem', color: 'var(--dark-text-secondary)' }}>Next.js</li>
                    <li style={{ marginBottom: '0.5rem', color: 'var(--dark-text-secondary)' }}>TypeScript</li>
                    <li style={{ marginBottom: '0.5rem', color: 'var(--dark-text-secondary)' }}>CSS3</li>
                  </ul>
                </div>
              </motion.div>
              {/* Backend */}
              <motion.div
                className="card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                <div className="card-content">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--dark-text)' }}>Backend</h3>
                  <ul style={{ listStyle: 'none' }}>
                    <li style={{ marginBottom: '0.5rem', color: 'var(--dark-text-secondary)' }}>Node.js</li>
                    <li style={{ marginBottom: '0.5rem', color: 'var(--dark-text-secondary)' }}>Express.js</li>
                    <li style={{ marginBottom: '0.5rem', color: 'var(--dark-text-secondary)' }}>MongoDB</li>
                    <li style={{ marginBottom: '0.5rem', color: 'var(--dark-text-secondary)' }}>RESTful APIs</li>
                  </ul>
                </div>
              </motion.div>
              {/* Mobile */}
              <motion.div
                className="card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                <div className="card-content">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--dark-text)' }}>Mobile</h3>
                  <ul style={{ listStyle: 'none' }}>
                    <li style={{ marginBottom: '0.5rem', color: 'var(--dark-text-secondary)' }}>React Native</li>
                    <li style={{ marginBottom: '0.5rem', color: 'var(--dark-text-secondary)' }}>iOS Development</li>
                    <li style={{ marginBottom: '0.5rem', color: 'var(--dark-text-secondary)' }}>Android Development</li>
                    <li style={{ marginBottom: '0.5rem', color: 'var(--dark-text-secondary)' }}>Cross-platform Apps</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading">Featured Projects</h2>
            <div className="grid grid-3">
              {/* Project 1 */}
              <motion.div
                className="card"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                <div style={{ position: 'relative', height: '200px' }}>
                  <Image
                    src="/laptop.avif"
                    alt="Project 1"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="card-content">
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--dark-text)' }}>Project Name</h3>
                  <p style={{ color: 'var(--dark-text-secondary)', marginBottom: '1rem' }}>
                    Brief description of the project and your role in it.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
                    <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--dark-bg)', borderRadius: '9999px', fontSize: '0.875rem', color: 'var(--dark-text-secondary)' }}>
                      React
                    </span>
                    <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--dark-bg)', borderRadius: '9999px', fontSize: '0.875rem', color: 'var(--dark-text-secondary)' }}>
                      Node.js
                    </span>
                    <span style={{ padding: '0.25rem 0.75rem', backgroundColor: 'var(--dark-bg)', borderRadius: '9999px', fontSize: '0.875rem', color: 'var(--dark-text-secondary)' }}>
                      MongoDB
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>Live Demo</a>
                    <a href="#" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>GitHub</a>
                  </div>
                </div>
              </motion.div>
              {/* Add more project cards here */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section" style={{ backgroundColor: 'var(--dark-card)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading">Get in Touch</h2>
            <div className="grid grid-2">
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
              >
                <p style={{ color: 'var(--dark-text-secondary)', marginBottom: '1.5rem' }}>
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                  <a href="#" style={{ color: 'var(--dark-text-secondary)', transition: 'color 0.2s' }}>
                    <FaGithub size={24} />
                  </a>
                  <a href="#" style={{ color: 'var(--dark-text-secondary)', transition: 'color 0.2s' }}>
                    <FaLinkedin size={24} />
                  </a>
                  <a href="#" style={{ color: 'var(--dark-text-secondary)', transition: 'color 0.2s' }}>
                    <FaTwitter size={24} />
                  </a>
                </div>
                <a href="mailto:sourabhpatidar389@gmail.com" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>
                    sourabhpatidar389@gmail.com
                </a>
              </motion.div>
              <motion.form
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="form-input"
                  ></textarea>
                </div>
                <button type="submit" className="btn">
                  Send Message
                </button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
