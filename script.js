document.addEventListener("DOMContentLoaded", function () {
  Papa.parse("PortfolioProjectData.csv", {
    download: true,
    header: true,
    complete: function(results) {
      const projects = results.data;

      // === FEATURED PROJECTS ===
      const featuredSection = document.getElementById("featured-projects");
      const allProjectsSection = document.getElementById("all-projects");
      const featuredProjects = projects.filter(p => p.status === "featured" || p.featured === true);
      const shownProjects = projects.filter(p => p.status === "shown" || p.status === "featured" || p.shown === true);

      featuredSection.innerHTML = '<h2 class="section-header">Featured Projects</h2>';

      featuredProjects.forEach((project, index) => {
        const reverse = index % 2 !== 0;
        const image = `<img src="${project.banners}" alt="${project.title}" class="project-image ${reverse ? 'right-image' : 'left-image'}" />`;
        const info = `
          <div class="project-info ${reverse ? 'left-text' : 'right-text'}">
            <h3>${project.title}</h3>
            <p>Engine: ${project.engine}</p>
            <p>Language(s): ${project.languages}</p>
            <p>Genre: ${project.genre}</p>
            <p>Team Size: ${project.developers}</p>
            <p>Timeline: ${project.timeline}</p>
            <p>Roles: ${project.roles}</p>
          </div>`;

        const contributions = `
          <div class="project-contributions">
            <h4>Key Contributions</h4>
            <ul>
              <li>${project.contribution_1}</li>
              <li>${project.contribution_2}</li>
              <li>${project.contribution_3}</li>
              <li>${project.contribution_4}</li>
              <li>${project.contribution_5}</li>
            </ul>
          </div>`;

        featuredSection.innerHTML += `
          <div class="project-row">
            ${reverse ? info + image : image + info}
          </div>
          ${contributions}
        `;
      });

      if (shownProjects.length > featuredProjects.length)
      {
        allProjectsSection.innerHTML = '<h2 class="section-header">All Projects</h2>';

        // === ALL PROJECTS GRID ===
        const projectGrid = document.getElementById("projectGrid");
        shownProjects.forEach(project => {
          const wrapper = document.createElement("div");
          wrapper.className = "project-thumb-wrapper";

          wrapper.innerHTML = `
            <img class="project-thumb" src="${project.thumbs.split('|')[0]}" alt="${project.title}" />
            <div class="project-hover-info">
              <h3>${project.title}</h3>
              <p>Team Size: ${project.developers}</p>
              <p>Timeline: ${project.timeline}</p>
              <p>Roles: ${project.roles}</p>
            </div>
          `;

          projectGrid.appendChild(wrapper);
        });
      }
    }
  });
});
