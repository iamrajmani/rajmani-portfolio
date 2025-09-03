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
         Full-stack developer with 3.4 years of experience in React.js, Java, and Spring Boot, specializing in building scalable
enterprise applications. Proficient in designing responsive UIs, developing secure RESTful APIs, and implementing
microservices with JPA, Hibernate, and Docker. Skilled in cloud deployment on Azure and CI/CD automation with
Jenkins, with a proven record of delivering high-performance, production-ready solutions.
        </p>
      </div>

      <div className="resume-section">
        <h2>PROFESSIONAL EXPERIENCE</h2>
        
        <div className="experience">
          <h3>Wipro</h3>
          <p className="position">Project Engineer</p>
          <ul>
            <li>Built a responsive, data-rich dashboard with React.js and Chart.js, improving decision-making by 40% and enabling 5+ stakeholders to track sales trends in real time.</li>
            <li>Designed and deployed multiple UI screens (catalogue, shopping cart, OTP authentication), improving customer experience and reducing cart abandonment rate.</li>
            <li>Developed RESTful APIs in Java (Spring Boot) for product listing and order management, cutting API response times by 25% , and secured them with JWT autehtication and role-based access control.</li>
            <li>Integrated Firebase Cloud Messaging (FCM) with a Kafka-based event-driven architecture to deliver push notifications, improving scalability and increasing engagement by 35%.</li>
            <li>Optimized media delivery with Azure Blob Storage and CDN, reducing page load times by 1.2s and improving Core web vitals.</li>
            <li>Utilized SQL, JPA, and Hibernate ORM for efficient database operations, implementing optimized queries for search , filtering, and pagination in e-commerce product management.</li>
            <li>Streamlined Performance by implementing Jenkins CI/CD Pipelines and removing 10+ unused NPM dependencies , reducing load time by 30% and bundle size by 20%.</li>
            <li>Colaborated in Agile ceremonies (daily stand-ups, sprint planning, retrospectives) and performed code reviews,
ensuring maintainable, testable, and scalable codebase.</li>
          </ul>
        </div>

        <div className="experience">
          <h3>Exademy (Ed-Tech Startup)</h3>
          <p className="position">Software Developer</p>
          <ul>
            <li>Developed UI of an e-learning platform with course catalogue, student onboarding, profile management, and Zoom integration for seamless live lecture experience.</li>
            <li>Built Secure and Scalabale Spring Boot REST APIs with MYSQL for courses and assessments.</li>
            <li>Implemented PYQ & MCQ testing module with real-time scoring, analytics dashboards, and optimized SQL queries for large datasets.</li>
            <li> Integrated Razorpay payment gateway SDK in React.js UI with multi-method support (UPI, cards, net banking) and EMI facilities. <li>
            <li>Mentored 4 interns on React, Java, and Git best practices, providing technical guidance, code reviews, and sprint planning support.<li>
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
          <div className="skill">HTML/CSS</div>
          <div className="skill">React.JS</div>
          <div className="skill"></div>
          <div className="skill">JAVASCRIPT/TypeScript</div>
          <div className="skill">Java</div>
          <div className="skill">Spring Boot</div>
          <div className="skill">SQL</div>
          <div className="skill">JPA/Hibernate</div>
          <div className="skill">GIT</div>
          <div className="skill">JENKINS</div>
          <div className="skill">Kafka</div>
          <div className="skill">Microservices</div>
          <div className="skill">REST APIs</div>
          <div className="skill">AZURE</div>
        </div>
      </div>
    </div>
  );
};

export default DigitalResume;
