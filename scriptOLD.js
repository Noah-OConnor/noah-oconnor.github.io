document.addEventListener("DOMContentLoaded", function () {
  Papa.parse("PortfolioProjectData.csv", {
    download: true,
    header: true,
    complete: function(results) {
      const projects = results.data;

      // === FEATURED PROJECTS ===
      const featuredSection = document.getElementById("featured-projects");
      const featuredProjects = projects.filter(p => p.status === "featured" || p.featured === true);

      featuredSection.innerHTML = '<h2 class="section-header">Featured Projects</h2>';

      featuredProjects.forEach((project, index) => {
        const reverse = index % 2 !== 0;
        const image = `<img src="${project.banners}" alt="${project.title}" class="project-image ${reverse ? 'right-image' : 'left-image'}" />`;
        const info = `
            <div class="project-info ${reverse ? 'left-text' : 'right-text'}">
              <h3>${project.title}</h3>
              <p><b>Dev Tools:</b> ${project.engine}, ${project.languages}</p>
              <p><b>Team Tools:</b> ${project.team_tools}</p>
              <p><b>Genre:</b> ${project.genre}</p>
              <p><b>Team Size:</b> ${project.developers}</p>
              <p><b>Timeline:</b> ${project.timeline}</p>
              <p><b>Primary Role:</b> ${project.roles}</p>
            </div>`;

        const contributions = `
          <div class="project-contributions">
              <a href="${project.contribution_1_link}">${project.contribution_1}</a>
              <span>|</span>
              <a href="${project.contribution_2_link}">${project.contribution_2}</a>
              <span>|</span>
              <a href="${project.contribution_3_link}">${project.contribution_3}</a>
              <br>
              <a href="${project.contribution_4_link}">${project.contribution_4}</a>
              <span>|</span>
              <a href="${project.contribution_5_link}">${project.contribution_5}</a>
              <span>|</span>
              <a href="${project.contribution_6_link}">${project.contribution_6}</a>
          </div>`;

        featuredSection.innerHTML += `
        <a href="${project.project_page}" class="project-link" style="text-decoration: none; color: inherit;">
          <div class="project-row">
            ${reverse ? info + image : image + info}
          </div>
        </a>
          ${contributions}
        `;
      });

      const allProjectsSection = document.getElementById("all-projects");
      const shownProjects = projects.filter(p => p.status === "shown" || p.status === "featured" || p.shown === true);

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
