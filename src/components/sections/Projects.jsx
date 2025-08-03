import { Calendar, } from 'lucide-react';
import github from "../../assets/github.png";
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "MyFi",
      category: "Mobile App (Flutter)",
      duration: "July 2025 - Ongoing",
      description: "MyFi is a personal finance tracking mobile application designed to help users manage their daily expenses, monitor account balances, and develop better financial habits. It aims to provide an intuitive and intelligent way to stay financially aware and in control.",
      features: [
        "Track income and expenses across multiple accounts with categorized transactions.",
        "Visualize spending patterns with charts and summaries.",
        "Add notes, tags, and categories for better transaction management.",
        "Sync data with Firebase for secure cloud backup and multi-device access."
      ],
      technologies: ["Flutter", "Firebase (Auth, Firestore, Storage)", "Riverpod", "Dart"],
      github: "https://github.com/ayush07agrawal/myfi",
      status: "in-progress"
    },
    {
      title: "CodeForge",
      category: "Web Dev Project",
      duration: "June 2024 - Dec 2024 (Phase 1)",
      description: "CodeForge is a web application designed to streamline the management and execution of computer science labs, particularly for Data Structures and Algorithms (DSA) courses. It aims to empower instructors to create and assign DSA problems, track student progress, and analyze their performance.",
      features: [
        "Enables instructors to create, manage, and assign DSA lab problems.",
        "Provides a platform for students to submit solutions and receive feedback.",
        "Features tools for tracking individual and class-wide student progress.",
        "Includes analytics to help instructors assess student performance and identify common difficulties."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/ayush07agrawal/CodeForge_FrontEnd",
      status: "Completed"
    },
    {
      title: "RiscV_Assembler_Processor_Simulator",
      category: "Course Project",
      duration: "Oct 2024 - Nov 2024",
      description: "A C++ project that provides a simplified RISC-V toolchain by assembling assembly code into machine-readable binary and simulating its execution on a 5-stage pipelined processor. The simulator meticulously models each stage—Fetch, Decode, Execute, Memory, and Write-back—providing deep insights into the core principles of processor design.",
      features: [
        "Deep understanding of RISC-V instruction encoding (R, I, S, B, U, J types)", "Implementation of a two-pass assembler",
        "Simulation of a 5-stage processor pipeline with hazard detection",
        "Advanced C++ usage, including bitwise operations, file I/O, and OOP design."
      ],
      technologies: ["C++17", "Object Oriented Programming", "RISC V Architecture"],
      github: "https://github.com/ayush07agrawal/RiscV_Assembler_Processor_Simulator",
      status: "Completed"
    },
    {
      title: "Chat Application Using Socket Programming",
      category: "Course Project",
      duration: "Feb 2025 - Mar 2025",
      description: "Designed and implemented a multi-client client-server chat application in C. The project explores two concurrent server architectures: one using multi-threading (pthreads) and another using the I/O multiplexing `select()` system call to handle multiple clients simultaneously.",
      features: [
        "Supports multiple simultaneous clients.",
        "Enables one-to-one private messaging and group chat to selected clients.",
        "Broadcast functionality to send messages to all connected users.",
        "Implemented a custom signal-based protocol for client-server communication.",
        "Developed two separate server backends using both multi-threading and the `select()` system call."
      ],
      technologies: ["C", "Socket Programming", "pthreads", "Computer Networks"],
      github: "https://github.com/ishankinger/Chat-Application-using-Socket-Programming",
      status: "Completed"
    },
    {
      title: "Hospital Management System",
      category: "Course Project",
      duration: "Mar 2025 - April 2025",
      description: "A comprehensive, responsive, and secure web application to streamline hospital operations. Built with React.js, Node.js (Express), and MySQL, the system provides specialized dashboards and features for patients, doctors, and administrators.",
      features: [
        "Role-based access control with secure JWT authentication for Patients, Doctors, and Admins.",
        "Comprehensive dashboards for managing appointments, patient records, and hospital resources.",
        "Patient portal for booking appointments, viewing medical history, and accessing prescriptions.",
        "Administrator console for staff, room, and department management with interactive analytics.",
        "Doctor console with scheduling, consultation notes, and treatment planning tools."
      ],
      technologies: ["React.js", "Node.js", "Express", "MySQL", "Sequelize"],
      github: "https://github.com/ayush07agrawal/Hospital_Mangement_Frontend",
      status: "Completed"
    }
  ];

  return (
    <div className="projects-section">
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <div className="project-title-section">
                <h3>{project.title}</h3>
                <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              <p className="project-category">{project.category}</p>
              <div className="project-meta">
                <div className="meta-item">
                  <Calendar size={14} />
                  <span>{project.duration}</span>
                </div>
              </div>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="project-features">
              <h5>Key Features:</h5>
              <ul>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-technologies">
              <h5>Technologies:</h5>
              <div className="tech-tags">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <a href={project.github} className="project-link github">
                <img src={github} alt="github" style={{ height: 30, width: 30 }} />
                <span>Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;