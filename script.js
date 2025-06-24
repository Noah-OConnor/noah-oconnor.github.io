document.addEventListener("DOMContentLoaded", function () {
  // Load PortfolioProjectData.csv and then enrich it with individual project CSVs
  Papa.parse("data/PortfolioProjectData.csv", {
    download: true,
    header: true,
    complete: async function(results) {
      const featured = results.data.filter(p => p.status === "featured");
      const featuredSection = document.getElementById("featured-projects");

      // Add section header
      const header = document.createElement("h2");
      header.className = "section-header";
      header.textContent = "Featured Projects";
      featuredSection.appendChild(header);

      // Load and parse all featured project data in order
      const allDetails = await Promise.all(
        featured.map(meta =>
          new Promise(resolve => {
            if (!meta.data) return resolve(null);
            Papa.parse(meta.data, {
              download: true,
              header: true,
              complete: function(detailResult) {
                resolve({ meta, details: detailResult.data[0], allRows: detailResult.data });
              }
            });
          })
        )
      );

      // Render in original CSV order
      allDetails.forEach((entry, index) => {
        if (entry) {
          createFeaturedProject(entry.meta, entry.details, index, entry.allRows);
        }
      });
    }
  });
});

function createFeaturedProject(meta, details, index, allRows) {
  const wrapper = document.createElement("a");
  wrapper.href = `project/project.html?name=${meta.slug}`;
  wrapper.className = "project-row";
  wrapper.style.textDecoration = "none";

  const image = document.createElement("img");
  image.src = meta.banner || details["cover-media"];
  image.alt = details["cover-alt-text"] || meta.title;
  image.className = "project-image";

  const info = document.createElement("div");
  info.className = "project-info";

  const title = document.createElement("h2");
  title.textContent = details["project-name"];
  title.style.textDecoration = "underline";
  info.appendChild(title);

  // Build project info fields
  allRows.forEach(row => {
    Object.keys(row).forEach(key => {
      if (key.startsWith("project-info-type") && row[key]) {
        const idx = key.replace("project-info-type", "");
        const label = row[key];
        const value = row[`project-info-value${idx}`];
        if (value) {
          const p = document.createElement("p");
          p.innerHTML = `<strong>${label}:</strong> ${value}`;
          info.appendChild(p);
        }
      }
    });
  });

  const isEven = index % 2 === 0;
  image.classList.add(isEven ? "left-image" : "right-image");
  info.classList.add(isEven ? "right-text" : "left-text");

  if (isEven) {
    wrapper.appendChild(image);
    wrapper.appendChild(info);
  } else {
    wrapper.appendChild(info);
    wrapper.appendChild(image);
  }

  document.getElementById("featured-projects").appendChild(wrapper);

  // ➕ Add contribution section
  const contributionSection = document.createElement("div");
  contributionSection.className = "project-contributions";

  const contributions = [];
  allRows.forEach(row => {
    if (row["project-section"]) {
      const label = row["project-section"];
      const slug = label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      const link = document.createElement("a");
      link.href = `project/project.html?name=${meta.slug}#${slug}`;
      link.textContent = label;
      contributions.push(link);
    }
  });

  const contributionContainer = document.createElement("div");
  contributionContainer.className = "contribution-links";

  contributions.forEach((link, index) => {
    contributionContainer.appendChild(link);
  });

  contributionSection.appendChild(contributionContainer);


  document.getElementById("featured-projects").appendChild(contributionSection);
}