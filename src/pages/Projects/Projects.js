import { useState } from 'react';
import { ProjectCard } from '../../components';
import { projects } from '../../constants/projects';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Reset to first page when filter changes
  useState(() => {
    setCurrentPage(1);
  }, [filter]);

  return (
    <section id="projects" className="projects">
      
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
        {currentProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`pagination-button ${currentPage === number ? 'active' : ''}`}
            >
              {number}
            </button>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
