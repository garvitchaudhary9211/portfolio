export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  status: string;
  githubUrl?: string;
  demoUrl?: string;
  highlights: string[];
}

export interface AcademicDoc {
  id: string;
  title: string;
  course: string;
  institution: string;
  term: string;
  fileUrl: string;
  filename: string;
  description: string;
  topics: string[];
  githubUrl?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  credentialType: string;
  status: 'Coursework Verified' | 'Completed';
  topics: string[];
}
