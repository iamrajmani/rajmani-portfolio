import { useState } from 'react';
import { ProjectCard } from '../../components';
import { projects } from '../../constants/projects';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      
      <div className="filter-buttons">
        {['All', 'Frontend', 'Full-Stack'].map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={filter === tag ? 'active' : ''}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
export default Projects;