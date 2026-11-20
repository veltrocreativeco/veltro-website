
import { useState } from 'react';
import { Info } from 'lucide-react';
import SEO from '../components/SEO';
import VideoCard from '../components/VideoCard';
import VideoModal from '../components/VideoModal';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_PROJECTS
} from '../data/portfolioData';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter(
          (project) => project.category === activeCategory
        );

  return (
    <>
      <SEO
        title="AI Video Advertising Portfolio — veltro.co"
        description="Explore AI-generated concept advertisements by veltro.co across skincare, perfume, and fashion product categories."
        canonicalPath="/portfolio"
      />

      <section className="section-block" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Concept Archive</span>
              </div>
              <h1 className="section-title">
                AI-Generated Concept Advertisements
              </h1>
            </div>

            <p className="section-desc">
              Explore the video concepts and filter them by product category.
              Select any project to watch its video.
            </p>
          </div>

          <div className="concept-banner">
            <Info
              size={18}
              style={{ color: 'var(--accent)', flexShrink: 0 }}
            />
            <span>
              <strong>Portfolio Disclosure:</strong> Every project featured
              here is an <strong>AI-generated concept advertisement</strong>
              created by veltro.co to demonstrate creative and visual
              production capabilities. These are concept projects, not paid
              client campaigns.
            </span>
          </div>

          <div
            className="filter-bar"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`filter-pill ${
                  activeCategory === category ? 'active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <VideoCard
                key={project.id}
                project={project}
                onSelect={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
