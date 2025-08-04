import { Calendar, MapPin, Award } from 'lucide-react';
import './Education.css';

function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "IIT Bhubaneswar",
      location: "Bhubaneswar, Odisha",
      duration: "2022 - 2026*",
      cgpa: "9.37/10",
      highlights: [
        "Relevant Coursework: Data Structures, Algorithms, Operating Systems, Database Management Systems, Computer Networks, Computer Architecture, Formal Languages and Automata theory",
        "Final Year Project: Experimental Analysis of Dynamic Data Structures"
      ]
    },
    {
      degree: "Higher Secondary Education (Class XII, CBSE Board)",
      institution: "Siddhartha Public School",
      location: "Bargarh, Odisha",
      duration: "2020 - 2022",
      cgpa: "97.8%",
      highlights: [
        "School Topper",
        "Science Stream with Computer Science",
        "100% Marks in Computer Science and Mathematics",
      ]
    },
    {
      degree: "Secondary Education (Class I - Class X, CBSE Board)",
      institution: "Siddhartha Public School",
      location: "Bargarh, Odisha",
      duration: "2010 - 2020",
      cgpa: "98%",
      highlights: [
        "School Topper",
        "Perfect score in Mathematics and Social Science",
      ]
    }
  ];

  return (
    <div className="education-section">
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              {index < education.length - 1 && <div className="timeline-line"></div>}
            </div>
            
            <div className="education-content">
              <div className="education-header">
                <h3>{edu.degree}</h3>
                <div className="education-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{edu.duration}</span>
                  </div>
                  <div className="meta-item">
                    <MapPin size={16} />
                    <span>{edu.location}</span>
                  </div>
                  <div className="meta-item grade">
                    <Award size={16} />
                    <span>{edu.cgpa}</span>
                  </div>
                </div>
              </div>
              
              <h4 className="institution">{edu.institution}</h4>
              
              <ul className="highlights">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;