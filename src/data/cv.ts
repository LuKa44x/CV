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
    {
      title: "Università Telematica Pegaso",
      subtitle: "L-31 - Scienze e tecnologie informatiche",
      date: "2022-2025",
      description: `Tesi - Sviluppo di una pagina web per il download del report di sostenibilità di Ferrero S.p.A.`,
      vote: "106/110",
    },
    {
      title: "Istituto Tecnico Industriale",
      subtitle: "Informatica e Telecomunicazioni",
      date: "2016-2021",
      vote: "95/100",
    },
  ],
  work: [
    {
      title: "Junior Full Stack Developer",
      subtitle: "Etjca Group",
      date: "Giugno 2026",
      description:
        "Sviluppo individuale di un gestionale completo per Bed and Breakfast",
    },
  ],
  technologies: ["HTML5", "CSS3", "JS + TS", "React", "Bootstrap"],
  projects: [
    {
      title: "Gestionale B&B",
      description: "Gestionale web per Bed & Breakfast ",
      linkDemo: "https://gestionale-b-b.vercel.app/",
      linkGithub: "https://github.com/LuKa44x/gestionale-B-B",
      technology: [
        "React",
        "TypeScript",
        "Bootstrap",
        "Next.js",
        "PostgreSQL",
        "Node.js",
      ],
    },
    {
      title: "Curriculum Vitae",
      description: "Curriculum personale - 2026",
      linkGithub: "https://github.com/LuKa44x/CV",
      technology: ["React", "TypeScript", "CSS3", "Bootstrap"],
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
