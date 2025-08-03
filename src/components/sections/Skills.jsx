import { Code, Database, Palette, Smartphone, Wrench } from 'lucide-react';
import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        "C++",
        "C",
        "JavaScript",
        "Dart",
      ]
    },
    {
      title: "Web Development",
      icon: Palette,
      skills: [
        "React",
        "Node.js",
        "Express.js",
        "HTML/CSS"
      ]
    },
    {
      title: "App Development",
      icon: Smartphone,
      skills: [
        "Flutter",
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: [
        "PostgreSQL",
        "MySQL",
        "Firebase"
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        "Git",
        "Postman",
        "Wireshark",
      ]
    }
  ];

  return (
    <div className="skills-section">
      {skillCategories.map((category, index) => (
        <div key={index} className="skill-category">
          <div className="category-header">
            <div className="category-icon">
              <category.icon size={24} />
            </div>
            <h3>{category.title}</h3>
          </div>

          <div className="skills-list">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <div className="skill-info">
                  <span className="skill-name">{skill}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;