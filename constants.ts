import { Code2, Database, Layout, Server, Globe, Cpu, UserRound } from 'lucide-react';

export const NAV_LINKS = [
  { name: 'Accueil', href: '#home' },
  { name: 'À propos', href: '#about' },
  { name: 'Compétences', href: '#skills' },
  { name: 'Projets', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["Angular", "React", "Tailwind CSS", "Three.js", "Typescript"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "MySQL", "PostgreSQL", "PHP"]
  },
  {
    category: "Soft Skills",
    icon: UserRound,
    items: ["Travail d'équipe", "Gestion d'équipe", "Communication", "Adaptation", "Empathie"]
  }
];

export const CONTACT_INFO = {
  email: "contact.julien.sicard@gmail.com",
  phone: "+33 7 83 19 92 69",
  linkedin: "https://www.linkedin.com/in/julien-sicard-446a81221/",
  github: "https://github.com/JulienSic"
};