// Generate the All Projects thumbnails dynamically
const allProjects = [
  {
    name: "Crimson Knight",
    team: "17",
    timeline: "Jan – Aug 2025",
    roles: "Technical Designer",
    image: "media/thumbnail1.jpg"
  },
  {
    name: "Relict",
    team: "15",
    timeline: "Sep 2023 – May 2024",
    roles: "Code Lead",
    image: "media/RelictThumb.jpg"
  },
  {
    name: "Bone Brigade Lite",
    team: "2",
    timeline: "May 2025",
    roles: "Systems Design",
    image: "media/thumbnail3.jpg"
  },
  {
    name: "Terraria Roguelike",
    team: "1",
    timeline: "Dec 2024",
    roles: "Solo Developer",
    image: "media/thumbnail4.jpg"
  },
  {
    name: "Meaty Meteor Madness",
    team: "2",
    timeline: "Fall 2024",
    roles: "Programmer",
    image: "media/MeatyMeteorMadnessThumb.jpg"
  },
  {
    name: "Kitty Casino",
    team: "7",
    timeline: "2023",
    roles: "Producer",
    image: "media/KittyCasinoThumb.jpg"
  },
  {
    name: "Project Lutr",
    team: "1",
    timeline: "Ongoing",
    roles: "Solo Developer",
    image: "media/thumbnail7.jpg"
  },
  {
    name: "Bloxels",
    team: "2",
    timeline: "Mar – May 2025",
    roles: "Systems Programmer",
    image: "media/thumbnail8.jpg"
  }
];

const projectGrid = document.getElementById("projectGrid");

allProjects.forEach(project => {
  const wrapper = document.createElement("div");
  wrapper.className = "project-thumb-wrapper";

  wrapper.innerHTML = `
    <img class="project-thumb" src="${project.image}" alt="${project.name}" />
    <div class="project-hover-info">
      <h3>${project.name}</h3>
      <p>Team Size: ${project.team}</p>
      <p>Timeline: ${project.timeline}</p>
      <p>Roles: ${project.roles}</p>
    </div>
  `;

  projectGrid.appendChild(wrapper);
});