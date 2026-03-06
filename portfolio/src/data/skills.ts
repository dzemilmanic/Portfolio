import { Globe, Server, Terminal, Monitor, Cpu, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: string[];
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: ["React", "JavaScript", "Swift", "HTML/CSS", "Tailwind CSS"],
    description: "Creating responsive and interactive user interfaces",
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["ASP.NET", "Django", "Laravel", "PHP"],
    description: "Building robust server-side applications and APIs",
  },
  {
    title: "Programming Languages",
    icon: Terminal,
    skills: ["C#", "Python", "C/C++", "VHDL"],
    description: "Proficient in multiple programming paradigms",
  },
  {
    title: "Desktop & Database",
    icon: Monitor,
    skills: ["WPF", "SQL Server", "MySQL", "PostgreSQL"],
    description: "Desktop applications and database management",
  },
  {
    title: "System Design",
    icon: Cpu,
    skills: ["Architecture", "Design Patterns", "Problem Solving"],
    description: "Designing scalable and maintainable systems",
  },
  {
    title: "Development Tools",
    icon: Layers,
    skills: ["Git", "Visual Studio", "VS Code", "Debugging"],
    description: "Professional development workflow and tools",
  },
];
