
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sliders, Sparkles, MonitorPlay, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <>
      <SEO
        title="About — veltro.co AI Video Advertising"
        description="Discover how veltro.co creates AI-powered product advertisements and cinematic visual content for modern brands."
        canonicalPath="/about"
      />

      <section className="section-block">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>About veltro.co</span>
              </div>

              <h1 className="section-title" style={{ marginBottom: '22px' }}>
                Where Art Direction Meets Generative Cinematography.
              </h1>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '18px', fontSize: '1.05rem' }}>
                veltro.co is an independent AI creative brand focused on crafting high-impact
                product visuals and commercial concept films. I combine creative direction
                with generative AI workflows to bring product ideas to life.
              </p>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', fontSize: '1.05rem' }}>
                I use AI as a creative production tool, carefully shaping camera movement,
                lighting, surface reflections, and brand-inspired visual styles to create
                engaging product advertisements.
              </p>

              <Link to="/portfolio" className="btn-primary">
                Watch Concept Showcase
                <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="workspace-visual" aria-label="AI Creative Production Workspace Interface">
              <div className="workspace-topbar">
                <div className="workspace-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="workspace-tag">VELTRO // STAGE_01 RENDER PIPELINE</span>
              </div>

              <div className="workspace-viewport">
                <div className="workspace-viewport-grid">
                  <div className="viewport-frame">
                    <div>
                      <span
                        style={{
                          fontSize: '0.72rem',
                          color: 'var(--accent)',
                          fontFamily: 'var(--font-display)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em'
                        }}
                      >
                        OPTICAL &amp; LIGHTING PASS
                      </span>
                      <h3 style={{ fontSize: '1.05rem', marginTop: '4px' }}>
                        35mm Anamorphic Studio Rig
                      </h3>
                    </div>

                    <div className="viewport-bars" aria-hidden="true">
                      <span style={{ height: '42%' }} />
                      <span style={{ height: '78%' }} />
                      <span style={{ height: '55%' }} />
                      <span style={{ height: '92%' }} />
                      <span style={{ height: '68%' }} />
                      <span style={{ height: '84%' }} />
                      <span style={{ height: '48%' }} />
                    </div>
                  </div>

                  <div className="viewport-nodes">
                    <div className="node-item">
                      <strong>01. Material Shader</strong>
                      <span>Subsurface glass &amp; micro-texture</span>
                    </div>
                    <div className="node-item">
                      <strong>02. Motion Vector</strong>
                      <span>24fps smooth dolly interpolation</span>
                    </div>
                    <div className="node-item">
                      <strong>03. Color Grade</strong>
                      <span>ACES filmic tone mapping</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="workspace-timeline">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-display)'
                  }}
                >
                  <span>SEQUENCE COMPOSITING</span>
                  <span style={{ color: 'var(--accent)' }}>24 FPS / 4K MASTER</span>
                </div>
                <div className="timeline-track">
                  <div className="timeline-fill" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Creative Principles</span>
              </div>
              <h2 className="section-title">How I Approach Every Frame</h2>
            </div>
          </div>

          <div className="grid-2">
            <div className="feature-card">
              <div className="feature-icon">
                <Sliders size={22} />
              </div>
              <h3>Creative Direction</h3>
              <p>
                I carefully plan camera angles, lighting, and visual details to
                match the intended style of each product advertisement.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <MonitorPlay size={22} />
              </div>
              <h3>Platform-Ready Content</h3>
              <p>
                I create visual content suited to website displays, digital
                storefronts, and vertical social media formats.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Sparkles size={22} />
              </div>
              <h3>Custom Visual Concepts</h3>
              <p>
                From elegant product scenes to cinematic environments, I shape
                visual concepts around each product's identity.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck size={22} />
              </div>
              <h3>Creative Transparency</h3>
              <p>
                I clearly label AI-generated concept advertisements so visitors
                can distinguish concept work from commissioned client projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
