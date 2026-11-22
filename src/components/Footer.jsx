
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link to="/" className="brand-logo">
              <span className="brand-logo-mark">V</span>
              <span>
                veltro<span className="brand-dot">.co</span>
              </span>
            </Link>
            <p className="footer-tagline">
              AI-powered video advertising and cinematic visual
              storytelling for brands across every industry.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Studio</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Concept Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Legal &amp; Transparency</h4>
            <ul className="footer-links">
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms &amp; Conditions</Link></li>
            </ul>

            <h4 className="footer-heading" style={{ marginTop: '24px' }}>
              Follow Veltro
            </h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://www.instagram.com/official_veltro.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61597030761617"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/asghar-husain786/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} veltro.co. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
