import React from 'react';

function ProjectItem({ id, title, description, technologies }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>
            <span>{technology}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectItem;
