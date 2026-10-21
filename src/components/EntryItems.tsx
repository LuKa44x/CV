import type { Entry, EntryProject } from "../types";

export function EntryItem({ title, subtitle, date, description, vote }: Entry) {
  return (
    <article>
      <header className="d-flex justify-content-between flex-wrap">
        <h3>{title}</h3>

        <p>{date}</p>
      </header>
      {subtitle && <p>{subtitle}</p>}
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
      <div className="d-flex gap-3">
        <a href={linkDemo} target="_blank" rel="noreferrer">
          Demo
        </a>
        <a href={linkGithub} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <ul className="list-unstyled">
        {technology.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
    </article>
  );
}
