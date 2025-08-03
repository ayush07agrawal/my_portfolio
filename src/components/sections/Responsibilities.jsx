import { Users, Target, TrendingUp, Calendar, Award } from 'lucide-react';
import './Responsibilities.css';

function Responsibilities() {
  const positions = [
    {
      title: "Deputy Contingent Leader",
      organization: "IIT Bhubaneswar",
      duration: "Oct 2024 - Dec 2024",
      type: "Leadership",
      description:
        "Represented IIT Bhubaneswar's Tech Contingent at the 13th Inter IIT Tech Meet held at IIT Bombay.",
      responsibilities: [
        "Acted as the official representative for the technical contingent of IIT Bhubaneswar.",
      ],
      achievements: [],
      skills: ["Team Representation", "Communication", "Leadership"],
    },
    {
      title: "Governor",
      organization: "Neuromancers – Programming Society, IIT Bhubaneswar",
      duration: "Jun 2024 - Jul 2025",
      type: "Technical",
      description:
        "Led a 50+ member society focused on programming, technical competitions, and peer learning initiatives.",
      responsibilities: [
        "Organized events, workshops, and coding competitions for the student community.",
        "Mentored society members and encouraged technical upskilling.",
      ],
      achievements: [],
      skills: ["Leadership", "Mentorship", "Technical Coordination"],
    },
    {
      title: "Relations Team Member",
      organization: "Science & Technology Council, IIT Bhubaneswar",
      duration: "Jul 2024 - Jun 2025",
      type: "Organizational",
      description:
        "Worked on strengthening the council's relationships with alumni and industry leaders.",
      responsibilities: [
        "Facilitated collaborations between STC and external industry/alumni networks.",
        "Assisted in organizing guest lectures, webinars, and outreach events.",
      ],
      achievements: [],
      skills: ["Relationship Management", "Event Planning", "Communication"],
    },
    {
      title: "Member",
      organization: "FEBS (Finance, Economics and Business Society), IIT Bhubaneswar",
      duration: "Jan 2023 - Present",
      type: "Academic",
      description:
        "Contributing member in initiatives related to finance, economics, and business case study discussions.",
      responsibilities: [
        "Participated in events and research discussions across business and economics topics.",
        "Assisted in organizing finance-oriented workshops and competitions.",
      ],
      achievements: [],
      skills: ["Critical Thinking", "Team Collaboration", "Market Awareness"],
    },
  ];

  return (
    <div className="responsibilities-section">
      <div className="leadership-summary">
        <div className="summary-stats">
          <div className="stat-item">
            <TrendingUp size={24} />
            <div className="stat-content">
              <h4>4</h4>
              <p>Key Positions</p>
            </div>
          </div>
          <div className="stat-item">
            <Users size={24} />
            <div className="stat-content">
              <h4>80+</h4>
              <p>Team Members Led</p>
            </div>
          </div>
          <div className="stat-item">
            <Award size={24} />
            <div className="stat-content">
              <h4>5+</h4>
              <p>Events Organized</p>
            </div>
          </div>
          <div className="stat-item">
            <Target size={24} />
            <div className="stat-content">
              <h4>2</h4>
              <p>Societies Involved</p>
            </div>
          </div>
        </div>
      </div>
      <div className="responsibilities-timeline">
        {positions.map((position, index) => (
          <div key={index} className="responsibility-card">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              {index < positions.length - 1 && <div className="timeline-line"></div>}
            </div>

            <div className="responsibility-content">
              <div className="responsibility-header">
                <div className="title-section">
                  <h3>{position.title}</h3>
                  <span className={`position-type ${position.type.toLowerCase()}`}>
                    {position.type}
                  </span>
                </div>

                <div className="responsibility-meta">
                  <h4 className="organization">{position.organization}</h4>
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{position.duration}</span>
                  </div>
                </div>
              </div>

              <p className="responsibility-description">{position.description}</p>

              {position.responsibilities.length > 0 && (
                <div className="responsibilities-list">
                  <h5><Users size={16} /> Key Responsibilities:</h5>
                  <ul>
                    {position.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              )}

              {position.skills.length > 0 && (
                <div className="skills-developed">
                  <h5><Target size={16} /> Skills Developed:</h5>
                  <div className="skill-tags">
                    {position.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Responsibilities;
