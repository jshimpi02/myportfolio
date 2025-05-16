import { Project } from "./ProjectsGallery";
import { SkillStat } from "./RadarChart";

// This file serves as a central place to map skills to projects

export const getProjectsBySkill = (
  skill: string,
  projects: Project[],
): Project[] => {
  return projects.filter((project) =>
    project.tools.some((tool) => tool.toLowerCase() === skill.toLowerCase()),
  );
};

export const getProjectIdsBySkill = (
  skill: string,
  projects: Project[],
): string[] => {
  return getProjectsBySkill(skill, projects).map((project) => project.id);
};

export const enrichSkillsWithProjects = (
  skills: SkillStat[],
  projects: Project[],
): SkillStat[] => {
  return skills.map((skill) => ({
    ...skill,
    projectIds: getProjectIdsBySkill(skill.name, projects),
  }));
};

export const getSkillsFromProjects = (projects: Project[]): string[] => {
  const skillSet = new Set<string>();

  projects.forEach((project) => {
    project.tools.forEach((tool) => {
      skillSet.add(tool);
    });
  });

  return Array.from(skillSet);
};
