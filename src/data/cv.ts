import type { Cv } from "../types";

const cv: Cv = {
  name: "Luca Vicari",
  role: "Junior Front End Developer",
  summary: "boh",
  courses: [
    { title: "TODO1", date: "TODO", description: "TODO1" },
    { title: "TODO2", date: "TODO", description: "TODO2" },
    { title: "TODO3", date: "TODO", description: "TODO3" },
  ],
  education: [
    { title: "Superiori", date: "TODO1", description: "TODO1", vote: "95/100" },
    { title: "Uni", date: "TODO2", description: "TODO2", vote: "106/110" },
  ],
  technologies: ["HTML5", "CSS3", "JS + TS", "React", "Visual Studio Code"],
  projects: [
    {
      title: "Gestionale B&B",
      description: "TODO",
      linkDemo: "TODO",
      linkGithub: "TODO",
      technology: ["TODO", "TODO1", "TODO2", "TODO3"],
    },
  ],
  info: [
    //coppia eitchetta-valore
    {
      label: "Lingue",
      value: "Italiano, Inglese",
    },
    {
      label: "Patente",
      value: "B",
    },
  ],
  contacts: [
    //coppia eitchetta-valore
    {
      label: "Email",
      value: "lucavicari44@gmail.com",
      href: "mailto:lucavicari44@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/LuKa44x",
      href: "https://github.com/LuKa44x",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/luca-vicari",
      href: "https://www.linkedin.com/in/luca-vicari",
    },
  ],
};

export default cv;
