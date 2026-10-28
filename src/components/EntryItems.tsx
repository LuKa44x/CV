import type { Entry, EntryProject } from "../types";

export function EntryItem({ title, subtitle, date, description, vote }: Entry) {
  return (
    <article>
      <header className="d-flex justify-content-between align-items-center flex-wrap">
        <h3>{title}</h3>

        <p className="date">{date}</p>
      </header>
      <div className="d-flex flex-column gap-1">
        {subtitle && <p>{subtitle}</p>}
        <p>{description}</p>
        {vote && <p>{vote}</p>}
      </div>
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
      <ul className="list-unstyled">
        {technology.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
      <div className="d-flex gap-3">
        {linkDemo && (
          <a href={linkDemo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
        <a href={linkGithub} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </article>
  );
}
