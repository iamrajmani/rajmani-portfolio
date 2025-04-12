import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tags, githubLink, liveLink, image }) => {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ y: -5 }}
    >
      {/* Image Container - Top Section */}
      <div className="image-wrapper">
        <img 
          src={image} 
          alt={title}
          className="project-image"
          onError={(e) => {
            e.target.src = '/images/fallback-project.jpg';
            e.target.className = 'project-image fallback';
          }}
        />
      </div>
      
      {/* Text Content - Bottom Section */}
      <div className="text-content">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <div className="tags-container">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        
        <div className="action-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub /> Code
          </a>
          {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt /> Live
          </a>
        )}
      </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;