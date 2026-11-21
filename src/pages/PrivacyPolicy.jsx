
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy — veltro.co"
        description="Read Veltro's Privacy Policy to learn how personal information, website visitor data and project inquiry details are collected, used and protected."
        canonicalPath="/privacy-policy"
      />

      <article className="legal-container">
        <header className="legal-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="section-title" style={{ marginBottom: '12px' }}>
            Privacy Policy
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            Applies to veltro.co
          </p>
        </header>

        <section className="legal-section">
          <h2>1. Overview</h2>
          <p>
            veltro.co respects your privacy and aims to protect personal
            and business information shared while browsing this website
            or submitting a project inquiry.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Information We Collect</h2>
          <p>
            Information you may provide through the project inquiry form includes:
          </p>
          <ul>
            <li>Your name and brand or company name.</li>
            <li>Product category and project brief details.</li>
            <li>Information needed to respond to your inquiry.</li>
          </ul>
          <p>
            Website hosting services may also process standard technical
            information such as browser details and IP addresses.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. How Information Is Used</h2>
          <p>Information may be used to:</p>
          <ul>
            <li>Review project inquiries and respond to messages.</li>
            <li>Understand project requirements.</li>
            <li>Maintain website security and improve user experience.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Data Sharing &amp; Confidentiality</h2>
          <p>
            Personal information is not sold or rented. Information may
            be processed by hosting, form, or other service providers
            when necessary to operate the website and handle inquiries.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Third-Party Services</h2>
          <p>
            This website may use third-party services for hosting,
            fonts, and video delivery. These providers may process
            technical information according to their own privacy policies.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Policy Updates</h2>
          <p>
            This Privacy Policy may be updated when website features
            or data-handling practices change. Any updated version
            will be published on this page.
          </p>
        </section>
      </article>
    </>
  );
}
