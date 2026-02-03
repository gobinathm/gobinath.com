export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Leadership & Strategy',
    icon: '🎯',
    skills: [
      { name: 'Program Management', level: 95 },
      { name: 'IT Project Management', level: 85 },
      { name: 'Stakeholder Management', level: 80 },
      { name: 'Vendor Management', level: 70 },
      { name: 'Enterprise Architecture', level: 80 },
      { name: 'Solutions Architecture', level: 85 },
      { name: 'Agile & Scrum', level: 90 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: '☁️',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Azure', level: 75 },
      { name: 'Google Cloud', level: 75 },
      { name: 'Cloud Architecture', level: 85 },
      { name: 'Docker', level: 75 },
      { name: 'DevOps', level: 85 },
      { name: 'CI/CD', level: 85 },
      { name: 'Linux', level: 75 },
      { name: 'Cloudflare', level: 75 },
      { name: 'Web Security', level: 75 },
      { name: 'Snyk', level: 70 },
    ],
  },
  {
    name: 'AI & Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'AI/ML', level: 90 },
      { name: 'Generative AI', level: 85 },
      { name: 'Large Language Models', level: 80 },
      { name: 'Prompt Engineering', level: 80 },
      { name: 'AI Strategy / Governance', level: 80 },
      { name: 'Computer Vision / NLP', level: 60 },
      { name: 'RAG', level: 60 },
      { name: 'MLOps', level: 50 },
      { name: 'AI Agents / Agentic AI', level: 50 },
    ],
  },
  {
    name: 'Web & Development',
    icon: '💻',
    skills: [
      { name: 'Python', level: 70 },
      { name: 'PHP', level: 95 },
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'SSG (Hugo, Gatsby, Astro)', level: 75 },
      { name: 'Perl', level: 75 },
      { name: 'CMS (Drupal / WordPress)', level: 95 },
      { name: 'GraphQL', level: 65 },
      { name: 'JAMStack', level: 65 },
      { name: 'Rust', level: 40 },
    ],
  },
];
