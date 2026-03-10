import data from "./content/data/portfolio.json";

export const roles = data.roles;

export const projects = data.projectRows.map((row) => row.projects);

export const aboutMe = data.aboutMe;

export const pastProjects = data.pastProjects.map((project, index) => ({
  ...project,
  id: index.toString(),
  direction: Number(project.direction)
}));

export const moreProjects = data.moreProjects;
