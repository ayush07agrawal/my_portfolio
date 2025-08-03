import {
  Home,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Trophy,
  Users
} from 'lucide-react';
import './Sidebar.css';
import mypic from "../assets/my_pic.jpg";

const menuItems = [
  { id: 'home', label: 'About', icon: Home },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'projects', label: 'Projects', icon: Code },
  { id: 'skills', label: 'Key Skills', icon: Award },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'responsibilities', label: 'Responsibilities', icon: Users },
];

function Sidebar({ activeSection, setActiveSection }) {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="profile-section">
          <div className="profile-avatar">
            <img src={mypic} alt="User" />
          </div>
          <div>
            <h2 className="profile-name">Ayush Agrawal</h2>
            <p className="profile-title">Final Year CSE Student</p>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            className={`nav-item ${activeSection === id ? 'active' : ''}`}
            onClick={() => setActiveSection(id)}
          >
            <Icon size={20} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;