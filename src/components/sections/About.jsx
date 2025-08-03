import { Mail, MapPin } from 'lucide-react';
import './About.css';
import GitHub from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import Linkedin from '../../assets/linkedin.png';

function About() {
  const interests = [
    "Development",
    "Coding",
    "Photography",
    "Music",
    "Badminton",
    "Gym",
    "Outdoor Adventures",
    "Hiking",
    "Books",
    "Designing Software Solutions"
  ];
  return (
    <div className="about-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Ayush Agrawal</span>
          </h1>
          <h2 className="hero-subtitle">Final Year Computer Science Student at IIT Bhubaneswar</h2>

          <div className="contact-grid">
            <div className="contact-item">
              <Mail size={18} />
              <span>ayushagrawalgdbh@email.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} />
              <span>Sambalpur, Odisha</span>
            </div>
            <div className="social-links">
              <a href="https://github.com/ayush07agrawal" className="social-link">
                <img src={GitHub} alt="GitHub" width={28} height={28} style={{ borderRadius: 2 }} />
              </a>
              <a href="https://www.linkedin.com/in/ayush07agrawal/" className="social-link">
                <img src={Linkedin} alt="LinkedIn" width={28} height={28} />
              </a>
              <a href="https://www.instagram.com/ayush07agrawal/" className="social-link">
                <img src={Instagram} alt="Instagram" width={28} height={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3>9.37</h3>
            <p>CGPA</p>
          </div>
          <div className="stat-card">
            <h3>5+</h3>
            <p>Projects</p>
          </div>
        </div>
      </div>

      <div className="extracurriculars-section">
        <div className="interests-section">
          <h2>Personal Interests</h2>
          <div className="interests-grid">
            {interests.map((interest, index) => (
              <div key={index} className="interest-tag">
                {interest}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-details">
        <div className="detail-card">
          <h3>About Me</h3>
          <p>
            I'm a Computer Science student at IIT Bhubaneswar, enthusiastic about solving real-world problems
            through code. From backend systems to mobile apps, I love building things that matter.
            I'm experienced in C++, web and App development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
