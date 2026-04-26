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
                <h4>B.Tech in Computer Science (AI Specialization)</h4>
                <h5>MIT-ADT University, Pune</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Pursuing B.Tech in Computer Science with AI Specialization.
              Maintaining a GPA of 8.74/10. Coursework includes Data Structures
              & Algorithms, OOP, DBMS, Machine Learning, and Artificial Intelligence.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>Intangles Lab Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed ML models for vehicle metadata prediction using telemetry data.
              Processed and analyzed large datasets using Pandas and NumPy.
              Improved model accuracy through feature engineering and hyperparameter tuning.
              Assisted in API testing and deployment workflows for real-time inference systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Open to Opportunities</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Actively seeking opportunities in software development, AI/ML engineering,
              and backend systems. Strong problem-solving ability, quick learner,
              team collaboration, and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
