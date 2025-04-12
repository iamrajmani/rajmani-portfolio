import React from 'react';
import './DigitalResume.css';

const DigitalResume = () => {
  return (
    <div className="resume-container">
      <div className="resume-header">
        <h1>Rajmani</h1>
        <div className="contact-info">
          <span>LinkedIn +91-8789333132</span>
          <span className="email">iamrajmanisingh@gmail.com</span>
        </div>
      </div>

      <div className="resume-section">
        <p className="summary">
          Frontend developer with 3.2 years of hands-on experience specializing in Frontend development with the framework. 
          Passionate about learning new technologies and working with dedicated teams.
        </p>
      </div>

      <div className="resume-section">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        
        <div className="experience">
          <h3>Wipro</h3>
          <p className="position">Project Engineer</p>
          <ul>
            <li>Developed multiple user-friendly screens including product catalogue for the frontend using ReactJS. Utilized ready-made components from NPM and managed data efficiently with the Redux library to improve performance and user experience.</li>
            <li>Built a user-friendly dashboard using Chart.js and React to display sales trend.</li>
            <li>Integrated push notifications using Firebase Cloud Messaging (FCM) to keep users informed of new updates and offers.</li>
            <li>Collaborated with back-end developers to integrate REST APIs and enhance functionality.</li>
            <li>Integrated Azure Blob Storage for optimized media storage and retrieval, improving load times for product images.</li>
            <li>Integrated Google Analytics to track user behaviour and optimize UI/UX based on data insights.</li>
            <li>Utilized GIT for version control across all projects, ensuring seamless team collaboration.</li>
            <li>Actively participated in code reviews.</li>
          </ul>
        </div>

        <div className="experience">
          <h3>Exademy (Ed-Tech Startup)</h3>
          <p className="position">Software Developer</p>
          <ul>
            <li>Developed full-fledged website with the following features: Sell courses, Embedded video player to watch lectures, Payment integration with Razor pay, Student registration, student profile ,PYQ's page etc.</li>
            <li>Supervised and guided a team of 4 interns in Product development, providing mentorship, technical support, and strategic insights to enhance their skills and contribute effectively to project goals.</li>
            <li>Developed a platform to take MCQ Tests and publish result immediately after submission.</li>
          </ul>
        </div>
      </div>

      <div className="resume-section">
        <h2>EDUCATION</h2>
        <div className="education">
          <h3>Academy of Technology</h3>
          <p>Bachelor of Technology in Computer Science & Engineering, CGPA: 8.29</p>
        </div>
      </div>

      <div className="resume-section">
        <h2>SKILLS</h2>
        <div className="skills-grid">
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">BOOTSTRAP</div>
          <div className="skill">JAVASCRIPT</div>
          <div className="skill">REACTJS</div>
          <div className="skill">GIT</div>
          <div className="skill">TYPESCRIPT</div>
          <div className="skill">GENERATIVE AI</div>
          <div className="skill">AZURE</div>
          <div className="skill">GOOGLE ANALYTICS</div>
        </div>
      </div>
    </div>
  );
};

export default DigitalResume;