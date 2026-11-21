
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Film, Layers, Cpu, Info } from 'lucide-react';
import SEO from '../components/SEO';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <>
      <SEO
        title="Veltro | Cinematic AI Video Ads for Product Brands"
        description="Veltro creates cinematic AI video advertisements, product commercials and creative campaigns for fashion, perfume, skincare and modern product brands."
        canonicalPath="/"
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-ambient" aria-hidden="true" />

        <div className="container hero-content">
          <div className="eyebrow animate-fade-up">
            <span className="eyebrow-dot" />
            <span>AI Creative Production Studio</span>
          </div>

          <h1 className="hero-title animate-fade-up delay-1">
            Cinema-Grade Brand Films Powered by <span>Generative AI.</span>
          </h1>

          <p className="hero-subtitle animate-fade-up delay-2">
            veltro.co directs, simulates, and renders luxury product commercials without physical
            set limitations—crafted for modern skincare, fragrance, and fashion houses.
          </p>

          <div className="hero-cta-group animate-fade-up delay-3">
            <Link to="/portfolio" className="btn-primary">
              Explore Concept Reel
              <ArrowUpRight size={18} />
            </Link>
            <Link to="/services" className="btn-secondary">
              View Production Services
            </Link>
          </div>
        </div>
      </section>

      {/* Capabilities Snapshot */}
      <section className="section-block">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Studio Architecture</span>
              </div>
              <h2 className="section-title">Built for Visual Precision</h2>
            </div>
            <p className="section-desc">
              Every frame is directed through controlled lighting models, synthetic camera
              choreography, and tactile material rendering.
            </p>
          </div>

          <div className="grid-3">
            <div className="feature-card">
              <div className="feature-icon">
                <Film size={22} />
              </div>
              <h3>AI Commercial Direction</h3>
              <p>
                Storyboard-to-screen commercial spots engineered with deliberate pacing, lens depth,
                and editorial color grading.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Layers size={22} />
              </div>
              <h3>Material &amp; Fluid Simulation</h3>
              <p>
                Hyper-realistic glass refraction, botanical serum droplets, smoke dispersion, and
                woven fabric motion.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Cpu size={22} />
              </div>
              <h3>Rapid Campaign Iteration</h3>
              <p>
                Deliver multi-aspect social cutdowns, seasonal lighting variations, and hero visual
                assets from a unified creative pipeline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Concept Work */}
      <section className="section-block" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Selected Showcase</span>
              </div>
              <h2 className="section-title">Featured Concept Productions</h2>
            </div>

            <Link to="/portfolio" className="btn-secondary">
              View All 6 Projects
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="concept-banner">
            <Info size={18} style={{ color: 'var(--accent)', flexShrink: 0 }} />
            <span>
              <strong>Transparency Notice:</strong> All showcase films below are original{' '}
              <strong>AI-generated concept advertisements</strong> produced internally by veltro.co
              to demonstrate visual direction and technical capability.
            </span>
          </div>

          <div className="portfolio-grid">
            {featuredProjects.map((project) => (
              <VideoCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
