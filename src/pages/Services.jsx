
import { Link } from 'react-router-dom';
import {
  Video,
  Sparkles,
  Layers,
  Aperture,
  Compass,
  Repeat,
  ArrowUpRight
} from 'lucide-react';
import SEO from '../components/SEO';

const SERVICES_LIST = [
   {
    icon: Video,
    title: 'AI Product Commercials',
    description:
      'AI-powered product advertisements designed for skincare, fragrance, footwear, and luxury accessories.'
  },
  {
    icon: Compass,
    title: 'Concept Visualisation & Pitch Films',
    description:
      'Creative concept films and visual mood reels to help brands explore campaign ideas before production.'
  },
  {
    icon: Aperture,
    title: 'Macro Texture & Fluid Motion',
    description:
      'Detailed product visuals featuring serum textures, water effects, mist, leather grain, and metallic finishes.'
  },
  {
    icon: Layers,
    title: 'Campaign Key Visuals & Stills',
    description:
      'High-quality product imagery and campaign visuals that complement your video advertisements.'
  },
  {
    icon: Repeat,
    title: 'Multi-Format Social Adaptations',
    description:
      'Video formats for websites, Instagram Reels, TikTok, and other digital advertising platforms.'
  },
  {
    icon: Sparkles,
    title: 'Creative Direction & Look Development',
    description:
      'Custom visual styles, lighting concepts, and creative direction shaped around your brand identity.'
  }
];

export default function Services() {
  return (
    <>
     <SEO
  title="Services — veltro.co AI Video Advertising"
  description="Explore Veltro's AI video advertising services, including cinematic product commercials, creative concept films, campaign visuals and social media video ads for fashion, perfume, skincare and modern brands."
  canonicalPath="/services"
/>

      <section className="section-block">
        <div className="container">
          <div className="section-header">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Capabilities</span>
              </div>
              <h1 className="section-title">AI Production Services</h1>
            </div>
            <p className="section-desc">
              Creative video production designed to turn product ideas into engaging
              visual content for modern brands.
            </p>
          </div>

          <div className="grid-3">
            {SERVICES_LIST.map((service) => {
              const IconComponent = service.icon;
              return (
                <div key={service.title} className="feature-card">
                  <div className="feature-icon">
                    <IconComponent size={22} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-block" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div
            className="feature-card"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              borderColor: 'var(--border-accent)'
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Let's Collaborate</span>
              </div>
              <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>
                Have a product or campaign idea?
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Share your product details, creative references, and goals to discuss
                a suitable video advertising concept.
              </p>
            </div>

            <Link to="/contact" className="btn-primary">
              Discuss Your Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
