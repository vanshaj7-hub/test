export type Skill = {
  name: string;
  level: number;
};

export type SkillGroup = {
  category: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "PostgreSQL", level: 4 },
      { name: "GraphQL", level: 4 },
      { name: "Redis", level: 3 },
    ],
  },
  {
    category: "Design",
    skills: [
      { name: "UI/UX Design", level: 4 },
      { name: "Design Systems", level: 5 },
      { name: "Figma", level: 5 },
      { name: "Accessibility", level: 4 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git / GitHub", level: 5 },
      { name: "Docker", level: 3 },
      { name: "Vercel / CI/CD", level: 4 },
      { name: "Storybook", level: 4 },
    ],
  },
];

export function getSkillsForHomepage() {
  return skillGroups.map((group) => ({
    category: group.category,
    skills: group.skills.map((skill) => skill.name),
  }));
}

export function getSkillsForAbout() {
  return skillGroups;
}
