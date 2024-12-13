// components/skills.jsx


import IconCloud from './magicui/icon-cloud';
import './skills.css';

const iconSlugs = [
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "cplusplus",    // C++
  "c",            // C
  "mongodb",
  "mysql",
  "microsoftsqlserver",
  "php",
  "laravel",
  "python",
  "pandas"
];
export default function Skills() {
  return (
    <div className="skills-container" data-aos="fade-up">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-icon-cloud">
        <IconCloud iconSlugs={iconSlugs} theme="light" />
      </div>
    </div>
  );
}
