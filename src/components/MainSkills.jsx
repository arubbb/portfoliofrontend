import {
  FaHtml5 as HtmlIcon,
  FaCss3Alt as CssIcon,
  FaJsSquare as JavascriptIcon,
  FaNodeJs as NodeJsIcon,
  FaReact as ReactIcon,
  FaJava as JavaIcon,
  FaDatabase as SqlIcon,
  FaPhp as PhpIcon,
  FaLaravel as LaravelIcon,
  FaPython as PythonIcon,
} from 'react-icons/fa';
import {
  SiExpress as ExpressIcon,
  SiMongodb as MongoDbIcon,
  SiC as CIcon,
  SiCplusplus as CppIcon,
  SiPandas as PandasIcon,
} from 'react-icons/si';
import './skills.css';

export default function MainSkills() {
  const skills = [
    { name: 'HTML', icon: <HtmlIcon className="skill-icon" /> },
    { name: 'CSS', icon: <CssIcon className="skill-icon" /> },
    { name: 'JavaScript', icon: <JavascriptIcon className="skill-icon" /> },
    { name: 'Node.js', icon: <NodeJsIcon className="skill-icon" /> },
    { name: 'Express', icon: <ExpressIcon className="skill-icon" /> },
    { name: 'MongoDB', icon: <MongoDbIcon className="skill-icon" /> },
    { name: 'SQL/T-SQL', icon: <SqlIcon className="skill-icon" /> },
    { name: 'React', icon: <ReactIcon className="skill-icon" /> },
    { name: 'C', icon: <CIcon className="skill-icon" /> },
    { name: 'C++', icon: <CppIcon className="skill-icon" /> },
    { name: 'Java', icon: <JavaIcon className="skill-icon" /> },
    { name: 'PHP', icon: <PhpIcon className="skill-icon" /> },
    { name: 'Laravel', icon: <LaravelIcon className="skill-icon" /> },
    { name: 'Python', icon: <PythonIcon className="skill-icon" /> },
    { name: 'Pandas', icon: <PandasIcon className="skill-icon" /> },
  ];

  return (
    <div className="skills-container" data-aos="fade-up" data-aos-delay="500">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill.icon}
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}