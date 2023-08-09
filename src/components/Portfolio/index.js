import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Valet Employee Service',
      description: 'Lokaj',
      link: "https://github.com/BizTheHabesha/lokaj",
      repo: "https://github.com/BizTheHabesha/lokaj"
    },
    {
      name: 'README',
      description: 'README Generator',
      link: "https://github.com/JosephTeklu/README-Generator",
      repo: "https://github.com/JosephTeklu/README-Generator"
    },
    {
      name: 'RecipeHQ',
      description: 'RecipeHQ',
      link: "https://github.com/Sadat6/RecipeHQ",
      repo: "https://github.com/Sadat6/RecipeHQ"
    },
    {
      name: 'url-shortner',
      description: 'URL-Shortner',
      link: "https://github.com/JosephTeklu/Project-2",
      repo: "https://github.com/JosephTeklu/Project-2"
    },
    {
      name: 'Password-Generator',
      description: 'Password Generator',
      link: "https://github.com/JosephTeklu/Password-Generator",
      repo: "https://github.com/JosephTeklu/Password-Generator"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
