import { Trophy, Award, Medal, Star, Calendar, ExternalLink } from 'lucide-react';
import './Achievements.css';

function Achievements() {
  const achievements = [
    {
      title: "Meta Hacker Cup 2024",
      category: "Competitive Programming",
      date: "Aug 2024",
      icon: Trophy,
      description: "Competed in the global coding competition, advancing to Round 2.",
      impact: "Secured a global rank of 3139, demonstrating strong algorithmic problem-solving skills.",
      recognition: "Official ranking published by Meta"
    },
    {
      title: "Indian Case Challenge 2024",
      category: "Case Competition",
      date: "Apr 2024",
      icon: Award,
      description: "Analyzed complex business scenarios and presented strategic solutions.",
      impact: "Finished in the Top-15 teams nationally out of over 5,500 participating teams.",
      recognition: "Certificate of Achievement for reaching the final rounds"
    },
    {
      title: "Competitive Programming Profile",
      category: "Problem Solving",
      date: "Present",
      icon: Star,
      description: "Actively participate in contests on Codeforces and CodeChef, consistently improving ratings.",
      impact: "Achieved Specialist rating (1482) on Codeforces and 3-Star rating (1770) on CodeChef.",
      recognition: "Public profiles on competitive programming platforms"
    },
    {
      title: "LeetCode Dedication",
      category: "Problem Solving",
      date: "Present",
      icon: Medal,
      description: "Consistently practice data structures and algorithms to build a strong foundation.",
      impact: "Solved over 750 problems and maintained a daily coding streak of more than 575 days.",
      recognition: "Knight Badge for consistent performance"
    },
    {
      title: "JEE Ranks (2022)",
      category: "Academic",
      date: "Jun 2022",
      icon: Award,
      description: "Secured high ranks in one of India's most competitive engineering entrance examinations.",
      impact: "All India Rank 1702 in JEE Advanced and 2806 in JEE Mains out of ~1 million candidates.",
      recognition: "Qualified for admission into top-tier engineering institutes (IITs/NITs)"
    }
  ];

  const certifications = [
    {
      name: "Software Engineering and SDLC Phases",
      issuer: "Percipio, Accenture",
      date: "May, 2025",
      link: "https://drive.google.com/file/d/1Q93Px_bD5iGPaC1-9KcVffq1tCKn3SfJ/view?usp=drive_link",
    },
    {
      name: "OWASP: Web Application Security",
      issuer: "Percipio, Accenture",
      date: "May, 2025",
      link: "https://drive.google.com/file/d/1QABq-M08IDXPp4QxBJSuWDnQGSyBbJYS/view?usp=drive_link",
    },
    {
      name: "Ethical Hacker: Hacking Concepts",
      issuer: "Percipio, Accenture",
      date: "May, 2025",
      link: "https://drive.google.com/file/d/1QE8aa0PDETSL5ZFosMSJLxATVjKHDtVl/view?usp=drive_link",
    },
    {
      name: "Securing the SDLC and Software Development Ecosystems",
      issuer: "Percipio, Accenture",
      date: "May, 2025",
      link: "https://drive.google.com/file/d/1QFMhVlJ1adu9A81twSnSWsPgghFFYdbJ/view?usp=drive_link",
    },
    {
      name: "Defining Cryptography",
      issuer: "Percipio, Accenture",
      date: "May, 2025",
      link: "https://drive.google.com/file/d/1QER59rX7A71IQqb0ixQs-4YQiVblk5_q/view?usp=drive_link",
    },
  ];

  return (
    <div className="achievements-section">
      <div className="achievements-acheivement">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-header">
              <div className="achievement-icon">
                <achievement.icon size={24} />
              </div>
              <div className="achievement-meta">
                <span className={`achievement-category ${achievement.category.toLowerCase().replace(' ', '-')}`}>
                  {achievement.category}
                </span>
                <div className="achievement-date">
                  <Calendar size={14} />
                  <span>{achievement.date}</span>
                </div>
              </div>
            </div>

            <h3>{achievement.title}</h3>
            <p className="achievement-description">{achievement.description}</p>

            <div className="achievement-details">
              <div className="detail-item">
                <h5>Impact:</h5>
                <p>{achievement.impact}</p>
              </div>
              <div className="detail-item">
                <h5>Recognition:</h5>
                <p>{achievement.recognition}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="achievements-certificates">
        <h2>Professional Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-content">
                <h4>{cert.name}</h4>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-meta">
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
              <div className="cert-action">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="verify-btn"
                >
                  <ExternalLink size={16} style={{ marginRight: "6px" }} />
                  Verify
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Achievements;