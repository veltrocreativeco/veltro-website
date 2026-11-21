
import { useState } from 'react';
import { Send, Globe, Sparkles, Clock } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    category: 'Skincare',
    message: ''
  });

  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setStatus('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus('');

    try {
      const response = await fetch(
        'https://formspree.io/f/xqpqdzde',
        {
          method: 'POST',
          body: new FormData(e.target),
          headers: {
            Accept: 'application/json'
          }
        }
      );

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          brand: '',
          category: 'Skincare',
          message: ''
        });
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact — veltro.co AI Video Advertising"
        description="Contact Veltro to discuss cinematic AI video ads, product commercials and creative advertising campaigns for fashion, perfume, skincare and other product brands."
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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <Globe size={18} style={{ color: 'var(--accent)' }} />
                    <h3 style={{ fontSize: '1.05rem' }}>Remote Collaboration</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem' }}>
                    Work together remotely through digital communication
                    and creative project reviews.
                  </p>
                </div>

                <div className="feature-card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <Sparkles size={18} style={{ color: 'var(--accent)' }} />
                    <h3 style={{ fontSize: '1.05rem' }}>Creative Focus</h3>
                  </div>
                  <p style={{ fontSize: '0.9rem' }}>
                    Product commercials, skincare visuals, luxury fragrances,
                    footwear, and fashion accessories.
                  </p>
                </div>

                <div className="feature-card" style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <Clock size={18} style={{ color: 'var(--accent)' }} />
                    <h3 style={{ fontSize: '1.05rem' }}>Project Details</h3>
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
                  <label htmlFor="email" className="form-label">
                    Your Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="form-input"
                    placeholder="Enter your email address"
                    value={formData.email}
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
                  disabled={submitting}
                >
                  {submitting ? 'Sending...' : 'Submit Project Brief'}
                  <Send size={17} />
                </button>

                {status === 'success' && (
                  <div className="form-success" role="status">
                    Thank you, {formData.name || 'your message'}! Your project inquiry has been sent successfully.
                  </div>
                )}

                {status === 'error' && (
                  <div className="form-success" role="alert">
                    Sorry, your message could not be sent. Please try again.
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
