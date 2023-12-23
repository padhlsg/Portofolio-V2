window.addEventListener("scroll", function () {
  let navbar = document.querySelector("nav");
  navbar.classList.toggle("sticky", window.scrollY > 720);
});

document.addEventListener("DOMContentLoaded", function () {
  // Reference to the container and the original set of projects
  const projects = document.querySelectorAll(".project");

  // Clone the original set of projects
  const cloneProjects = Array.from(projects).map((project) => project.cloneNode(true));

  // Append the cloned projects to the container
});

AOS.init();
