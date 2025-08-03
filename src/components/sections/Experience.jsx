import { Calendar, MapPin } from 'lucide-react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      title: "Advanced Application Engineering Intern",
      company: "Accenture",
      location: "Bangalore, India",
      duration: "May 2025 – Jul 2025",
      type: "Internship",
      description: "Contributed to the development of enterprise-grade cross-platform applications.",
      achievements: [
        "Developed an MVP for a food ordering app tailored for a restaurant client",
        "Collaborated on building a scalable, cross-platform mobile application using Flutter",
        "Participated in Agile ceremonies including daily stand-ups, sprint planning, and reviews"
      ],
      technologies: ["Flutter", "Dart", "REST APIs", "Agile"]
    }
  ];

  return (
    <div className="experience-section">
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              {index < experiences.length - 1 && <div className="timeline-line"></div>}
            </div>

            <div className="experience-content">
              <div className="experience-header">
                <div className="title-section">
                  <h3>{exp.title}</h3>
                  <span className={`experience-type ${exp.type.toLowerCase()}`}>
                    {exp.type}
                  </span>
                </div>

                <div className="experience-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <h4 className="company">{exp.company}</h4>
              <p className="description">{exp.description}</p>

              <div className="achievements">
                <h5>Key Achievements:</h5>
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="technologies">
                <h5>Technologies Used:</h5>
                <div className="tech-tags">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;