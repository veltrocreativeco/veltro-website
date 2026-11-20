
import { useRef } from 'react';
import { Play, Sparkles } from 'lucide-react';

export default function VideoCard({ project, onSelect }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <article
      className="video-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="video-card-media"
        style={{ background: project.posterGradient }}
        onClick={() => onSelect(project)}
        role="button"
        tabIndex={0}
        aria-label={`Play ${project.title} — ${project.conceptLabel}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect(project);
          }
        }}
      >
        <video
          ref={videoRef}
          src={project.videoUrl}
          muted
          loop
          playsInline
          preload="metadata"
        />

        <div className="video-card-overlay">
          <div className="video-card-badges">
            <span className="badge-category">{project.category}</span>
            <span className="badge-ai-concept">AI Concept Ad</span>
          </div>

          <span className="play-trigger" aria-hidden="true">
            <Play size={22} fill="#151515" />
          </span>

          <span className="video-duration">{project.duration}</span>
        </div>
      </div>

      <div className="video-card-body">
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.76rem',
            color: 'var(--accent)',
            marginBottom: '6px',
            fontWeight: 500
          }}
        >
          <Sparkles size={13} />
          <span>{project.conceptLabel}</span>
        </div>

        <h3 className="video-card-title">{project.title}</h3>
        <p className="video-card-desc">{project.description}</p>

        <div className="video-card-footer">
          <span>{project.aspectRatio}</span>
          <button
            type="button"
            className="watch-btn"
            onClick={() => onSelect(project)}
          >
            Watch Film
            <Play size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}
