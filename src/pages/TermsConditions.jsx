
import SEO from '../components/SEO';

export default function TermsConditions() {
  return (
    <>
      <SEO
        title="Terms & Conditions — veltro.co"
        description="Read Veltro's Terms and Conditions covering website use, AI-generated concept advertisements, intellectual property, project inquiries and service agreements."
        canonicalPath="/terms-and-conditions"
      />

      <article className="legal-container">
        <header className="legal-header">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            <span>Legal Documentation</span>
          </div>

          <h1 className="section-title" style={{ marginBottom: '12px' }}>
            Terms &amp; Conditions
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            Applies to veltro.co
          </p>
        </header>

        <section className="legal-section">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using veltro.co, you agree to these
            Terms &amp; Conditions. If you do not agree with these
            terms, please discontinue use of the website.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. AI-Generated Concept Advertisements</h2>
          <p>
            Projects displayed in the portfolio are AI-generated
            concept advertisements created for creative demonstration.
            They do not represent paid client campaigns or imply
            endorsement or affiliation with any third-party brand.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Intellectual Property</h2>
          <p>
            Website branding, original written content, design,
            and custom visual elements are associated with veltro.co.
            They may not be copied, redistributed, or reused without
            appropriate permission.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Project Inquiries &amp; Deliverables</h2>
          <p>
            Submitting an inquiry does not create a client agreement
            or guarantee that a project will be accepted. Project
            scope, pricing, usage rights, and delivery timelines
            should be agreed upon separately in writing.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Third-Party Services</h2>
          <p>
            This website may use third-party hosting, fonts, and
            media services. Their services are subject to their
            respective terms and policies.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Limitation of Liability</h2>
          <p>
            The website and its showcase content are provided
            for general information and demonstration purposes.
            veltro.co does not guarantee uninterrupted website
            availability or error-free content.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Updates to These Terms</h2>
          <p>
            These Terms &amp; Conditions may be updated when
            necessary. Updated terms will be published on this page.
          </p>
        </section>
      </article>
    </>
  );
}
