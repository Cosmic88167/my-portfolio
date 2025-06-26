import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Participant</h4>
                <h5>Hackathon - Graphic Era Hill University</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Participated in a hackathon held at Graphic Era Hill University, collaborating with peers to develop innovative solutions under time constraints.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Project</h4>
                <h5>Self-Initiated</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed an AI/ML project independently, applying machine learning algorithms to solve real-world problems and enhance technical skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Fresher</h4>
                <h5>Seeking Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively looking for opportunities to apply my skills and grow professionally in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
