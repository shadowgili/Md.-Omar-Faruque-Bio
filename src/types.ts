export interface ProfileData {
  name: string;
  titles: string[];
  tagline: string;
  summary: string;
  detailedBio: string[];
  avatarUrl: string;
  coverUrl?: string;
  location: {
    address: string;
    city: string;
    country: string;
  };
  contact: {
    emails: string[];
    phones: string[];
    linkedin: string;
    github?: string;
    whatsapp?: string;
    website?: string;
  };
  stats: {
    label: string;
    value: string;
    subtext: string;
  }[];
  languages: {
    language: string;
    proficiency: string;
  }[];
  coreSkills: {
    category: string;
    skills: string[];
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  orgTagline?: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  category: 'hr' | 'hospitality' | 'tech';
  logoPlaceholder?: string;
  responsibilities: string[];
  achievements: string[];
  technologiesUsed?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  gradeOrCgpa: string;
  highlights?: string;
  field: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  badgeColor?: string;
  skills: string[];
  featured?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'game-dev' | 'hr-tech' | 'analytics' | 'it-systems';
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
  metrics?: string;
}

export interface BlogPostItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export interface PhotoItem {
  id: string;
  url: string;
  title: string;
  caption: string;
  category: 'portrait' | 'workplace' | 'projects' | 'certificates' | 'general';
  uploadedAt: string;
}

export type PageSection =
  | 'home'
  | 'biography'
  | 'hr-leadership'
  | 'game-dev'
  | 'hospitality'
  | 'academic-certs'
  | 'portfolio'
  | 'blog'
  | 'photos'
  | 'resume'
  | 'contact';
