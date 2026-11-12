import { SkillCategory, Project, AcademicDoc, Certificate } from '../types';

export const PERSONAL_INFO = {
  name: 'Garvit Chaudhary',
  title: 'B.E. CSE AI Student',
  institution: 'Chandigarh University',
  degree: 'Bachelor of Technology – Artificial Intelligence',
  batch: '2025–2029',
  uid: '25BAI10055',
  email: 'garvitchaudhary9211@gmail.com',
  phone: '+91 7740016161',
  github: 'https://github.com/garvitchaudhary9211',
  linkedin: 'https://www.linkedin.com/in/garvit-chaudhary-b45080384/',
  headline: 'Building Intelligent Solutions with AI',
  bio: 'Second-year Artificial Intelligence student at Chandigarh University with hands-on project experience in machine learning, automation, and computer architecture. Passionate about applying AI/ML, Python, and cloud technologies to solve real-world engineering problems.',
  schooling: [
    {
      level: 'Senior Secondary (Class XII)',
      school: 'Satluj Public School',
      period: '2024–2025',
    },
    {
      level: 'Secondary (Class X)',
      school: 'Satluj Public School',
      period: '2022–2023',
    },
  ],
  documents: {
    resumePdf: '/documents/resume.pdf',
    coaAssignmentPdf: '/documents/academic/coa-assignment.pdf',
    fallbackResumePdf: '/documents/garvit_chaudhary_resume.pdf',
    fallbackCoaAssignmentPdf: '/documents/garvit_chaudhary_coa_assignment.pdf',
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    description: 'Core languages for systems engineering, algorithmic logic, and rapid AI scripting.',
    skills: ['C++', 'Python', 'Java'],
    icon: 'Code2',
  },
  {
    title: 'AI & Data Engineering',
    description: 'Foundations and frameworks for intelligent systems and analytical insight.',
    skills: ['Artificial Intelligence', 'Machine Learning', 'Natural Language Processing (NLP)', 'SQL', 'Data Analytics'],
    icon: 'Cpu',
  },
  {
    title: 'Cloud & Developer Tools',
    description: 'Infrastructure, version control, and environments used for development pipelines.',
    skills: ['Microsoft Azure', 'Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
    icon: 'Cloud',
  },
  {
    title: 'Professional Capabilities',
    description: 'Interpersonal and execution capabilities driving collaborative delivery.',
    skills: ['Problem Solving', 'Communication', 'Teamwork', 'Adaptability', 'Continuous Learning'],
    icon: 'Sparkles',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'adgenix',
    title: 'AdGenix',
    tagline: 'AI Advertisement Generator',
    description:
      'Developed a tool that uses pre-trained AI models to generate advertisements from user input. Designed for brands, businesses, influencers, and events to quickly create tailored ad content.',
    technologies: ['AI/ML', 'Python', 'Pre-trained AI Models', 'Prompt Engineering'],
    status: 'In Active Development',
    highlights: [
      'Automated marketing copy and creative ad generation from custom prompts',
      'Targeted audience adaptation for brands, retail events, and social campaigns',
      'Integrates pre-trained natural language and generative model pipelines',
    ],
  },
  {
    id: 'instruction-set-simulator',
    title: 'Instruction Set Simulator',
    tagline: 'Computer Organization & Architecture Project',
    description:
      'A Computer Organization & Architecture project implementing an instruction set simulator for analyzing instruction decode cycles, register states, and low-level execution logic.',
    technologies: ['C++', 'Computer Architecture', 'Assembly Logic', 'Register Emulation'],
    status: 'Open Source',
    githubUrl: 'https://github.com/garvitchaudhary9211/InstructionSetSimulator',
    highlights: [
      'Emulates CPU fetch-decode-execute cycle and arithmetic logic operations',
      'Tracks register state transitions and program counter progression',
      'Built as coursework in Computer Organization & Architecture at Chandigarh University',
    ],
  },
];

export const ACADEMIC_DOCS: AcademicDoc[] = [
  {
    id: 'coa-assignment',
    title: 'Computer Organization & Architecture Assignment',
    course: 'Computer Organization & Architecture (COA)',
    institution: 'Chandigarh University',
    term: 'Semester Coursework (UID: 25BAI10055)',
    fileUrl: '/documents/academic/coa-assignment.pdf',
    filename: 'coa-assignment.pdf',
    description:
      'Comprehensive university submission covering low-level computer architecture, hardware acceleration (CPU vs GPU vs TPU), memory hierarchies, system architecture paradigms, and distributed system bottlenecks.',
    topics: [
      'Raspberry Pi ARM Architecture & GPIO',
      'AI Summit Key Industry Takeaways',
      'Yotta Cloud AI Infrastructure',
      'Language Selection Parameters for Software Engineering',
      'RAM Sizing, Word Length & 64-bit Systems',
      'GPU Parallel Speedup over CPU Cores',
      'CPU vs GPU vs TPU Architecture Comparison',
      '2025 Turing Award: Reinforcement Learning (Barto & Sutton)',
      'Distributed Systems: Stampeding Herd Mitigation',
      'Processor Industry Founders (Intel & AMD)',
      'Von Neumann x86 Architecture Analysis',
      'Cryptanalysis & Turing Enigma (Imitation Game Review)',
    ],
  },
  {
    id: 'coa-simulator-project',
    title: 'Instruction Set Simulator — COA Practicum',
    course: 'Computer Organization & Architecture (COA)',
    institution: 'Chandigarh University',
    term: 'Semester Coursework Practicum',
    fileUrl: '',
    filename: '',
    githubUrl: 'https://github.com/garvitchaudhary9211/InstructionSetSimulator',
    description:
      'Architectural software implementation demonstrating low-level instruction execution, register management, and instruction word decoding.',
    topics: [
      'Instruction Decoding Logic',
      'ALU Status & Flag Management',
      'Program Counter Progression',
      'Memory Addressing Modes',
    ],
  },
];

export interface AcademicCourseworkDoc {
  id: string;
  title: string;
  category: string;
  subject: string;
  institution: string;
  studentName: string;
  uid: string;
  className: string;
  description: string;
  pdfUrl: string;
  pdfFilename: string;
  docxUrl: string;
  docxFilename: string;
  topics: string[];
  keyCalculations?: { label: string; formula: string; result: string }[];
  performanceObservations?: string[];
}

export const CASE_STUDY_3: AcademicCourseworkDoc = {
  id: 'case-study-3',
  title: 'Cache Memory Performance Analysis',
  category: 'Case Study 3',
  subject: 'Computer Organization and Architecture (COA)',
  institution: 'Chandigarh University',
  studentName: 'Garvit Chaudhary',
  uid: '25BAI10055',
  className: '25BAI-601',
  description:
    'Analysis of cache memory performance, cache hits and misses, hit ratio, miss ratio, locality of reference and cache effectiveness.',
  pdfUrl: '/documents/Garvit_Chaudhary_Case_Study_3_Cache_Memory.pdf',
  pdfFilename: 'Garvit_Chaudhary_Case_Study_3_Cache_Memory.pdf',
  docxUrl: '/documents/Garvit_Chaudhary_Case_Study_3_Cache_Memory.docx',
  docxFilename: 'Garvit_Chaudhary_Case_Study_3_Cache_Memory.docx',
  topics: [
    'Cache Memory Structure & Multi-Level Hierarchy (L1, L2, L3)',
    'Cache Hit vs. Cache Miss Mechanics',
    'Hit Ratio Calculation: 850 / 1,000 = 85%',
    'Miss Ratio Calculation: 150 / 1,000 = 15%',
    'Temporal, Spatial & Sequential Locality of Reference',
    'AMAT Sensitivity Analysis & Miss Penalty Impact',
  ],
  keyCalculations: [
    { label: 'Total Memory Accesses', formula: 'Given Scenario', result: '1,000 accesses' },
    { label: 'Cache Hits', formula: 'Found in cache', result: '850 hits' },
    { label: 'Cache Misses', formula: 'Not found in cache', result: '150 misses' },
    { label: 'Cache Hit Ratio', formula: '850 / 1,000 × 100%', result: '85%' },
    { label: 'Cache Miss Ratio', formula: '150 / 1,000 × 100%', result: '15%' },
    { label: 'AMAT (Average Memory Access Time)', formula: '2 ns + (0.15 × 50 ns)', result: '9.5 ns' },
  ],
};

export const ASSIGNMENT_3: AcademicCourseworkDoc = {
  id: 'assignment-3',
  title: 'Average Memory Access Time (AMAT)',
  category: 'Assignment 3',
  subject: 'Computer Organization and Architecture (COA)',
  institution: 'Chandigarh University',
  studentName: 'Garvit Chaudhary',
  uid: '25BAI10055',
  className: '25BAI-601',
  description:
    'Calculation of Average Memory Access Time using cache hit time, miss rate and miss penalty, including a CPU–Cache–RAM diagram and three performance observations.',
  pdfUrl: '/documents/Garvit_Chaudhary_AMAT_Assignment.pdf',
  pdfFilename: 'Garvit_Chaudhary_AMAT_Assignment.pdf',
  docxUrl: '/documents/Garvit_Chaudhary_AMAT_Assignment.docx',
  docxFilename: 'Garvit_Chaudhary_AMAT_Assignment.docx',
  topics: [
    'AMAT Formulation: Hit Time + (Miss Rate × Miss Penalty)',
    'Miss Rate Derivation: 150 / 1,000 = 15%',
    'Calculated AMAT: 2 ns + (0.15 × 50 ns) = 9.5 ns',
    'CPU–Cache–RAM Memory Architecture Routing Diagram',
    '3 Core Performance Observations on Processor Delays',
    'Hit Ratio Optimization Impact (9.5 ns → 7.0 ns)',
  ],
  keyCalculations: [
    { label: 'Hit Time', formula: 'Base cache cycle', result: '2 ns' },
    { label: 'Miss Penalty', formula: 'RAM access penalty', result: '50 ns' },
    { label: 'Miss Rate', formula: '150 / 1,000', result: '0.15 (15%)' },
    { label: 'Calculated AMAT', formula: '2 + (0.15 × 50)', result: '9.5 ns' },
    { label: 'Optimized AMAT (at 90% hit)', formula: '2 + (0.10 × 50)', result: '7.0 ns' },
  ],
  performanceObservations: [
    '1. Most requests are served by cache: The cache hit ratio is 85%, satisfying most memory requests directly and avoiding slow RAM bus traversal.',
    '2. Cache misses increase access time: Although only 15% are misses, each miss adds a heavy 50 ns penalty, contributing 7.5 ns (78.9%) of total AMAT.',
    '3. A higher hit ratio improves performance: Increasing the hit ratio to 90% drops AMAT from 9.5 ns to 7.0 ns, reducing processor stall time significantly.',
  ],
};

export const CERTIFICATES: Certificate[] = [
  {
    title: 'Microsoft Azure Fundamentals (AZ-900)',
    issuer: 'Microsoft',
    credentialType: 'Cloud Infrastructure Certification',
    status: 'Completed',
    topics: ['Cloud Concepts', 'Azure Architecture and Services', 'Azure Management and Governance'],
  },
  {
    title: 'Critical Enquiry and Research Methodology',
    issuer: 'Coursera',
    credentialType: 'Academic Specialization',
    status: 'Completed',
    topics: ['Systematic Inquiry', 'Hypothesis Testing', 'Data Validation', 'Analytical Synthesis'],
  },
  {
    title: 'Entrepreneurial Mindset: Build, Grow, & Lead Your Own Venture',
    issuer: 'Coursera',
    credentialType: 'Venture & Leadership Specialization',
    status: 'Completed',
    topics: ['Value Proposition Design', 'Lean Product Iteration', 'Execution Leadership', 'Strategic Growth'],
  },
  {
    title: 'Design Thinking and Creativity for Innovation',
    issuer: 'LinkedIn Learning',
    credentialType: 'Product Strategy Course',
    status: 'Completed',
    topics: ['User-Centric Empathy', 'Ideation Frameworks', 'Rapid Prototyping', 'Creative Synthesis'],
  },
];

export const COA_QUESTIONS = [
  {
    num: 1,
    title: 'Raspberry Pi',
    content:
      "The Raspberry Pi is a small computer that's about the size of a credit card. The Raspberry Pi Foundation has created it to teach programming and computer science in schools. It's small, but has a lot of capabilities such as the normal computer.",
    points: [
      'ARM-based processor',
      'HDMI display output',
      'Wireless (for most models) and Bluetooth (for Wireless-enabled models)',
      'General Purpose Input/Output Pins to connect electronic devices (GPIO pin to connect electronic components)',
      'Supports Linux based operating systems (Works on Linux operating systems)',
    ],
  },
  {
    num: 2,
    title: 'AI SUMMIT – 10 Key Takeaways',
    points: [
      'AI has started playing a significant role in nearly every industry.',
      'Generative AI is leveraged for enhanced productivity and creativity.',
      'It is a must to use AI in an ethical and responsible manner.',
      'Quality data is essential to develop AI models.',
      'AI is to assist human beings; it is not to take their place.',
      'AI is more easily accessible thanks to cloud computing.',
      'The trend of Open Source AI is gaining momentum.',
      'Security and privacy is gaining in significance for AI.',
      'There is need for constant learning in the field of Artificial Intelligence.',
      'There is a need for AI skills.',
    ],
  },
  {
    num: 3,
    title: 'Yotta',
    content:
      "Yotta Infrastructure is an Indian cloud computer and data centre services provider company. It offers cloud storage, cloud for AI (GPU), disaster recovery and secure data hosting. It plays an important role in India's AI and Digital transformation.",
  },
  {
    num: 4,
    title: 'How to decide a programming language to design an application and what are parameters?',
    content:
      'The program language used is the one being developed to the application. Important decision parameters include: Performance and speed, Memory usage, Security, Target platform (Web, Mobile or Desktop), Libraries and frameworks, Community support, Ease of development, and Scalability & maintenance.',
    points: [
      'Python – AI and Machine Learning',
      'Java – Enterprise applications',
      'C++ – Game development & Systems',
      'JavaScript – Web development',
      'Swift – iOS applications',
      'Kotlin – Android applications',
    ],
  },
  {
    num: 5,
    title: 'RAM Size, Word Size, 64-bit System, Speed and Operating System',
    content:
      'RAM is temporary memory to store data used while a program is running. The size of a word is the quantity of data that a processor can use simultaneously (e.g., 32-bit vs. 64-bit). More data can be handled by a 64-bit system than a 32-bit system, addressing vastly more memory. Speed is measured in gigahertz (GHz). The Operating System (Windows, Ubuntu Linux, macOS) manages system hardware and software resources.',
  },
  {
    num: 6,
    title: 'Reason behind the speed of a GPU over that of a CPU',
    content:
      'A GPU will be faster than a CPU at doing tasks where lots of calculations need to be done simultaneously. A CPU has a few powerful cores optimized for serial control, whereas a GPU has hundreds or thousands of smaller cores operating concurrently, ideal for parallel computation such as video rendering, matrix multiplication, and scientific computing.',
  },
  {
    num: 7,
    title: 'CPU vs GPU vs TPU',
    content:
      'CPU (Central Processing Unit): An ordinary processor with some powerful cores (the computer\'s general-purpose brain).\nGPU (Graphics Processing Unit): A massively parallel chip with lots of cores used for graphics rendering and parallel matrix arithmetic.\nTPU (Tensor Processing Unit): A dedicated ASIC designed specifically for accelerated Artificial Intelligence tensor and deep learning operations.',
  },
  {
    num: 8,
    title: 'The Turing Award',
    content:
      'Andrew G. Barto and Richard S. Sutton won the 2025 ACM A.M. Turing Award for their groundbreaking foundational work in Reinforcement Learning, which powers modern frontier AI and autonomous agent systems.',
  },
  {
    num: 9,
    title: 'Stampeding Herd Problem',
    content:
      'A scenario where numerous processes or clients attempt to access or recompute the same shared resource simultaneously (e.g., on cache expiry), overloading backend servers.',
    points: [
      'Caching with early refresh',
      'Load balancing across compute nodes',
      'Request queuing & collapsing',
      'Distributed locking (mutex)',
      'Exponential backoff and randomized jitter on retries',
    ],
  },
  {
    num: 10,
    title: 'Founders of Intel and AMD',
    content:
      'Intel was co-founded by Robert Noyce and Gordon Moore (1968). AMD was established by seven co-founders, led by Jerry Sanders (1969).',
  },
  {
    num: 11,
    title: 'Laptop CPU Architecture Analysis',
    content:
      'Personal workstation powered by an Intel Core i7-240H processor, utilizing a 64-bit x86 instruction set architecture based on the classical Von Neumann architectural model.',
  },
  {
    num: 12,
    title: 'The Imitation Game Reflection',
    content:
      'Explores Alan Turing\'s wartime cryptographic breakthrough cracking the German Enigma machine at Bletchley Park, illustrating mathematical persistence, analytical endurance, and the inception of foundational computational theory.',
  },
];
