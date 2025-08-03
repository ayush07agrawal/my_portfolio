import { useState, useEffect } from 'react';
import About from './sections/About';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Achievements from './sections/Achievements';
import Responsibilities from './sections/Responsibilities';
import './MainContent.css';

const sections = {
  home: About,
  education: Education,
  experience: Experience,
  projects: Projects,
  skills: Skills,
  achievements: Achievements,
  responsibilities: Responsibilities,
};

function MainContent({ activeSection }) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 150);
    return () => clearTimeout(timer);
  }, [activeSection]);

  const ActiveComponent = sections[activeSection];

  return (
    <div className="main-content">
      <div className={`content-wrapper ${isVisible ? 'visible' : ''}`}>
        <ActiveComponent />
      </div>
    </div>
  );
}

export default MainContent;