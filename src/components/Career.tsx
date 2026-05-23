import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Network security Intern</h4>
                <h5>Athreya Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed an Internet Protocol spoofing detection tool, focusing on packet tracing within
              computer networks. Monitored and analyzed network packets to ensure reliable communication
              between parties. Gained hands-on experience in Cybersecurity, Java, and Computer Networking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Science (Business Studies)</h4>
                <h5>BMS College of Engineering (BMSCE)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently pursuing a Bachelor of Engineering in Computer Science with a specialization in
              Business Studies. Maintaining a CGPA of 8 while actively working on AI/ML projects,
              full-stack development, and cybersecurity research.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in Computer Science</h4>
                <h5>K.L.E C.I. Munavalli Polytechnic</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed Diploma in Computer Science with a 94%, earning an All-Karnataka Rank of 470.
              Built a strong foundation in programming, networking, and software development principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
