export type Entry = {
  title: string;
  subtitle?: string; //opzionale
  date: string;
  description?: string;
  vote?: string;
};

export type EntryProject = {
  title: string;
  description: string;
  linkDemo?: string;
  linkGithub: string;
  technology: string[];
};

export type EntryContact = {
  label: string;
  value: string;
  href?: string;
};

export type Cv = {
  name: string; //hero
  role: string; //hero
  summary: string; //hero
  courses: Entry[]; //sezione corsi
  education: Entry[]; //sezione educazione
  work: Entry[]; //sezione lavoro
  technologies: string[]; //sezione tecnologie
  projects: EntryProject[]; //sezione progetti
  info: EntryContact[]; //sezione info
  contacts: EntryContact[]; //sezione contatti
};
