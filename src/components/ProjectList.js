import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  return (
    <div>
      {projects.map(project => (
        <ProjectItem 
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
}

export default ProjectList;

