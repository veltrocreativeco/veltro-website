
import { useState } from 'react';
import { Send, Globe, Sparkles, Clock } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: 'Skincare',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact — veltro.co AI Video Advertising"
        description="Get in touch with veltro.co to discuss AI-generated product commercials, video advertisements, and creative visual campaigns."
        canonicalPath="/contact"
      />

      <section className="section-block" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'start' }}>
            <div>
              <div className="eyebrow">
                <span className="eyebrow-dot" />
                <span>Project Inquiry</span>
              </div>

              <h1 className="section-title" style={{ marginBottom: '20px' }}>
                Let's Create Something Visual
              </h1>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  marginBottom: '36px',
                  fontSize: '1.05rem'
                }}
              >
                Tell me about your product, creative direction, and advertising
                goals. Share your project details using the inquiry form.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px'
                }}
              >
                <div className="feature-card" style={{ padding: '24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px'
                    }}
                  >
                    <Globe size={18} style={{ color: 'var(--accent)' }} />
                    <h3 style={{ fontSize: '1.05rem' }}>
                      Remote Collaboration
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.9rem' }}>
                    Work together remotely through digital communication
                    and creative project reviews.
                  </p>
                </div>

                <div className="feature-card" style={{ padding: '24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px'
                    }}
                  >
                    <Sparkles size={18} style={{ color: 'var(--accent)' }} />
                    <h3 style={{ fontSize: '1.05rem' }}>
                      Creative Focus
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.9rem' }}>
                    Product commercials, skincare visuals, luxury fragrances,
                    footwear, and fashion accessories.
                  </p>
                </div>

                <div className="feature-card" style={{ padding: '24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px'
                    }}
                  >
                    <Clock size={18} style={{ color: 'var(--accent)' }} />
                    <h3 style={{ fontSize: '1.05rem' }}>
                      Project Details
                    </h3>
                  </div>

                  <p style={{ fontSize: '0.9rem' }}>
                    Include your product category, preferred video format,
                    visual references, and campaign goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-card">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="brand" className="form-label">
                    Brand or Company Name *
                  </label>

                  <input
                    id="brand"
                    name="brand"
                    type="text"
                    required
                    className="form-input"
                    placeholder="Enter your brand name"
                    value={formData.brand}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category" className="form-label">
                    Product Category
                  </label>

                  <select
                    id="category"
                    name="category"
                    className="form-select"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="Skincare">Skincare</option>
                    <option value="Perfume">Perfume / Fragrance</option>
                    <option value="Fashion">Fashion / Accessories</option>
                    <option value="Other">Other Product Category</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Project Brief &amp; Creative Goals *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    className="form-textarea"
                    placeholder="Describe your product, visual style, and video requirements..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  Submit Project Brief
                  <Send size={17} />
                </button>

                {submitted && (
                  <div className="form-success" role="status">
                    Your form is ready, {formData.name}. This is currently
                    a demo submission and has not been sent. A form service
                    will be connected before the website goes live.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
