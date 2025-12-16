import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css'; // We might not need this if we use global CSS, but good for local scoped

// Simple Brain/Chip Icon SVG
const BrainIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-4z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-4z" />
  </svg>
);

function HomepageHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', 'hero-container')}>
      <div className="container">
        <div className="row">
          {/* Left Column: Typography */}
          <div className="col col--6 hero-content-left">
            <div className="badge badge--secondary margin-bottom--md" style={{background: 'rgba(168,85,247,0.2)', color: '#A855F7', border: '1px solid #A855F7'}}>
              AI-NATIVE TEXTBOOK
            </div>
            <h1 className="hero__title" style={{fontSize: '3.5rem', lineHeight: '1.2'}}>
              Physical AI & <br />
              <span className="neon-text" style={{color: '#A855F7'}}>Humanoid Robotics</span>
            </h1>
            <p className="hero__subtitle margin-vert--md" style={{fontSize: '1.2rem', color: '#94a3b8'}}>
              Master the future of embodiment. From Sim2Real to VLA Models, 
              dive into the next generation of intelligent machines.
            </p>
            <div className={styles.buttons}>
              <Link
                className="button button--lg"
                to="/docs/intro"
                style={{
                  background: 'linear-gradient(135deg, #A855F7 0%, #3B82F6 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '30px',
                  padding: '1rem 2.5rem',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  boxShadow: '0 0 20px rgba(168, 85, 247, 0.5)'
                }}>
                Start Reading
              </Link>
            </div>
          </div>

          {/* Right Column: Visual */}
          <div className="col col--6 hero-visual-right">
            <div className="spotlight-effect"></div>
            <div className="robot-hologram-placeholder glass-panel">
              <div style={{textAlign: 'center'}}>
                <BrainIcon />
                <h3>HOLOGRAPHIC INTERFACE</h3>
                <p>Analyzing Hardware...</p>
                <div style={{marginTop: '20px', width: '80%', height: '4px', background: '#333', borderRadius: '2px', margin: '20px auto'}}>
                  <div style={{width: '60%', height: '100%', background: '#3B82F6', borderRadius: '2px', boxShadow: '0 0 10px #3B82F6'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Physical AI & Humanoid Robotics Textbook">
      <HomepageHero />
      <main>
        {/* Module Cards Section */}
        <div className="container padding-vert--xl">
          <div className="row">
            <div className="col col--12 text--center margin-bottom--lg">
              <h2 className="neon-text">Core Modules</h2>
            </div>
          </div>
          <div className="row">
            {[
              {title: 'Modern AI Engineering', desc: 'Sim2Real, Embodiment, and VLA Models', link: '/docs/intro'},
              {title: 'ROS 2 & Middleware', desc: 'The nervous system of modern robots', link: '/docs/module-2'},
              {title: 'Simulation Environments', desc: 'Isaac Sim, Gazebo, and Physics Engines', link: '/docs/module-3'},
              {title: 'VLA Models', desc: 'Vision-Language-Action pipelines', link: '/docs/module-4'},
            ].map((module, idx) => (
              <div className="col col--3 margin-bottom--lg" key={idx}>
                <Link to={module.link} style={{textDecoration: 'none'}}>
                  <div className="glass-panel padding--md" style={{height: '100%', transition: 'transform 0.2s'}}>
                    <h3 style={{color: '#A855F7'}}>{module.title}</h3>
                    <p style={{color: '#cbd5e1'}}>{module.desc}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
