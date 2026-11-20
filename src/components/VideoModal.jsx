
import { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

export default function VideoModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-video-title"
      onClick={onClose}
    >
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-group">
            <h3 id="modal-video-title" style={{ fontSize: '1.2rem' }}>
              {project.title}
            </h3>
            <span
              className="badge-ai-concept"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <Sparkles size={12} />
              {project.conceptLabel}
            </span>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            aria-label="Close video player"
            onClick={onClose}
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-video-wrapper">
          <video
            src={project.videoUrl}
            controls
            autoPlay
            playsInline
          />
        </div>

        <div className="modal-details">
          <div>
            <p style={{ marginBottom: '6px' }}>{project.description}</p>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Production Pipeline: {project.productionNotes}
            </span>
          </div>
          <span className="badge-category">{project.category}</span>
        </div>
      </div>
    </div>
  );
}
