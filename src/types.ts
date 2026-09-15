export interface SocialLinks {
  url: string;
  linkedin: string;
  github: string;
  instagram: string;
  facebook: string;
  twitter: string;
  youtube?: string;
  email: string;
}

export interface SkillItem {
  name: string;
  iconName?: string;
  category: string;
}

export interface SkillGroup {
  title: string;
  icon: string;
  description: string;
  bulletPoints: string[];
  technologies: string[];
}

export interface SkillBar {
  stack: string;
  progressPercentage: number;
  color: string;
}

export interface Education {
  schoolName: string;
  degree: string;
  duration: string;
  grade: string;
  desc: string;
  affiliation?: string;
  location: string;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  date: string;
  desc: string;
  skills: string[];
  current?: boolean;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  desc: string;
  category: 'AI / Machine Learning' | 'Mobile Apps' | 'Web & Full Stack' | 'WordPress / CMS' | 'Enterprise / ERP';
  github?: string;
  demoUrl?: string;
  tags: string[];
  featured?: boolean;
}

export interface Feedback {
  name: string;
  role: string;
  clientCompany?: string;
  clientProject?: string;
  feedback: string;
  avatarText: string;
  rating: number;
  verifiedClient?: boolean;
}
