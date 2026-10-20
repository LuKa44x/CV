import type { Entry, EntryProject } from "../types";

export function EntryItem({ title, subtitle, date, description, vote }: Entry) {
  return (
    <article>
      <h3>{title}</h3>
      {subtitle && <p>{subtitle}</p>}
      <p>{date}</p>
      <p>{description}</p>
      {vote && <p>{vote}</p>}
    </article>
  );
}

export function EntryProjects({
  title,
  description,
  linkDemo,
  linkGithub,
  technology,
}: EntryProject) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={linkDemo} target="_blank" rel="noreferrer">
        Demo
      </a>
      <a href={linkGithub} target="_blank" rel="noreferrer">
        GitHub
      </a>
      <ul className="list-unstyled">
        {technology.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </article>
  );
}
