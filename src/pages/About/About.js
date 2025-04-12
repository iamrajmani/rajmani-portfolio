import { motion } from 'framer-motion';
import skills from '../../constants/skills';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="about-container"
      >
        {/* Personal Bio Section */}
        <div className="bio-section">
          <h1><center>About Me</center></h1>
          
          <div className="bio-content">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bio-text"
            >
              <p>
                Hi, I'm <span className="highlight">Rajmani</span>, a passionate Frontend developer - React with 
                <span className="highlight"> 3+ years</span> of experience building modern web applications.
              </p>
              <p>
                I specialize in creating responsive, performant UIs with HTML , CSS , Javascript , React, TypeScript, Material UI.
                My background in both design and development allows me to bridge the gap between 
                <span className="highlight"> beautiful asthetic visuals</span> and 
                <span className="highlight"> clean code</span>.
              </p>
              <p>
                When I'm not coding, you'll find me traveling,Hiking and contributing to open source, or experimenting 
                with new web technologies.
              </p>
            </motion.div>

            <div className="personal-image">
              <img 
                src="/images/heroimage.png" 
                alt="Rajmani Singh" 
                className="profile-image"
              />
            </div>
          </div>
        </div>

        {/* Skills Visualization */}
        <div className="skills-section">
          <h3>My Skills</h3>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="skill-icon">
                  {skill.icon}
                </div>
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

     {/* Animated Education Timeline */}
<div className="education-section">
  <h3>Education & Experiences</h3>
  <div className="timeline">
    {[
      { degree: 'Project Engineer ', school: 'wipro  (Apr 2022 - Nov 2024)', side: 'left' },
      { degree: 'Software Developer', school: 'Exademy [Ed-Tech Startup](July 2021 - Mar 2022)', side: 'right' },
      { degree: 'B.Tech', school: 'Academy of Technology (AOT),Hooghly',course:'Computer Science & Engineering' ,side: 'left' },
      { degree: 'Senior Secondary', school: 'Shanti Mission, Saharsa', side: 'right' },
      { degree: 'Secondary', school: 'St. Judes Vidyalaya, Begusarai', side: 'left' },
    ].map((edu, index) => (
      <motion.div
        key={index}
        className={`timeline-item ${edu.side}`}
        initial={{ opacity: 0, x: edu.side === 'left' ? -100 : 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.3 }}
      >
        <div className="timeline-content">
          <h4>{edu.degree}</h4>
          <h5>{edu.course}</h5>
          <p>{edu.school}</p>
        </div>
      </motion.div>
    ))}
    <div className="timeline-line" />
  </div>
</div>

      </motion.div>
    </section>
  );
};

export default About;