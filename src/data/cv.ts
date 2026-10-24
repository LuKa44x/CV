import type { Cv } from "../types";

function calculateAge() {
  const myBirthday = new Date("2002-09-02");
  const today = new Date();

  let years = today.getFullYear() - myBirthday.getFullYear();
  const monthDiff = today.getMonth() - myBirthday.getMonth(); //controllo se ha gia compiuto gli anni
  const dayDiff = today.getDate() - myBirthday.getDate(); //controllo se ha gia compiuto gli anni

  // se non ha compiuto gli anni sottrai uno
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    years--;
  }

  return years.toString();
}

const cv: Cv = {
  name: "Luca Vicari",
  role: "Junior Front End Developer",
  summary: `Sono Luca, un ragazzo di ${calculateAge()} anni, junior front end developer e laureato in informatica (L-31). 
  Ho costruito le mie basi attraverso l'università e vari corsi svolti dal 2024 ad oggi.
  Adesso sviluppo interfacce web con React e TypeScript.

  Fuori dal codice sono un atleta agonista di calisthenics, mi piace gareggiare e con costanza migliorare le mie skills.`,
  courses: [
    { title: "TODO1", date: "TODO", description: "TODO1" },
    { title: "TODO2", date: "TODO", description: "TODO2" },
    { title: "TODO3", date: "TODO", description: "TODO3" },
  ],
  education: [
    { title: "Superiori", date: "TODO1", description: "TODO1", vote: "95/100" },
    { title: "Uni", date: "TODO2", description: "TODO2", vote: "106/110" },
  ],
  technologies: ["HTML5", "CSS3", "JS + TS", "React", "Bootstrap"],
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
