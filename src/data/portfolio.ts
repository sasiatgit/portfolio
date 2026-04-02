export type SkillGroup = {
  title: string
  description: string
  items: string[]
}

export type Project = {
  title: string
  stack: string
  description: string
}

export type ExperienceItem = {
  period: string
  role: string
  summary: string
}

export const navigation: string[] = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend Engineering',
    description:
      'Building responsive and high-performance interfaces with clean architecture, reusable components, and polished UX.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'Bootstrap', 'HTML', 'CSS', 'Responsive UI'],
  },
  {
    title: 'Backend and APIs',
    description:
      'Designing secure APIs and server-side logic that support scalable products and reliable integrations.',
    items: ['Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Business Logic', 'Postman', 'Data Validation'],
  },
  {
    title: 'QA, Cloud and Delivery',
    description:
      'Driving product quality through automation, CI/CD, and production-focused release practices used in large-scale systems.',
    items: ['Selenium WebDriver', 'Jenkins', 'GitHub', 'AWS (EC2, S3, Lambda)', 'CI/CD', 'PostgreSQL', 'MySQL', 'MongoDB', 'Agile'],
  },
]

export const projects: Project[] = [
  {
    title: 'Full-Stack Web Application Delivery (Freelance)',
    stack: 'React • TypeScript • Node.js • Express • MongoDB/MySQL',
    description:
      'Building and maintaining modern client-facing applications from frontend UI to backend API integration, with strong focus on performance, clean code, and reliable releases.',
  },
  {
    title: 'VR 3D Music Application (U.S. Client)',
    stack: 'Unity • QA Testing • Performance Tuning',
    description:
      'Contributed to testing and development for an immersive VR 3D music platform, improving responsiveness, fixing core issues, and helping deliver a stable production-ready experience.',
  },
  {
    title: 'Access Manager Rostering Platform',
    stack: 'Microservices • API Testing • CI/CD • Selenium',
    description:
      'Led quality engineering for a large education platform serving U.S. schools, helping scale support from 1,800 users to 18 million with consistent release quality.',
  },
]

export const experience: ExperienceItem[] = [
  {
    period: '2024 - Present',
    role: 'Full Stack Developer (Freelance)',
    summary:
      'Delivering full-stack applications using React, TypeScript, Node.js, and Express with MongoDB/MySQL integration, API design, testing, and CI/CD support.',
  },
  {
    period: '2023 - 2024',
    role: 'VR 3D Application Tester and Developer (Freelance)',
    summary:
      'Worked with a U.S.-based client on a VR 3D music app using Unity, handling bug fixing, functional testing, performance improvements, and release readiness.',
  },
  {
    period: '2015 - 2021',
    role: 'Lead Quality Assurance Engineer, Wipro Technologies',
    summary:
      'Owned quality strategy for a mission-critical education platform, led 300+ releases, managed integration testing across microservices, and contributed to a 30X product scale-up.',
  },
  {
    period: '2010 - 2015',
    role: 'Quality Assurance Engineer, Wipro Technologies',
    summary:
      'Delivered QA and automation for major U.S. eCommerce and education clients, covering cross-browser testing, API validation, and end-to-end quality for production systems.',
  },
]
