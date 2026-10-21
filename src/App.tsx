import "./App.css";
import Hero from "./components/Hero";
import Section from "./components/Section";
import { EntryItem, EntryProjects } from "./components/EntryItems";
import cv from "./data/cv";
function App() {
  return (
    <>
      <div className="container">
        <header>
          <Hero name={cv.name} role={cv.role} summary={cv.summary} />
        </header>
        <main>
          <Section title="Corsi">
            {cv.courses.map((e) => (
              <EntryItem key={e.title} {...e} />
            ))}
          </Section>
          <Section title="Formazione">
            {cv.education.map((e) => (
              <EntryItem key={e.title} {...e} />
            ))}
          </Section>
          <Section title="Tecnologie">
            <ul className="list-unstyled">
              {/* bootstrap, rimozione dei pallini */}
              {cv.technologies.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </Section>
          <Section title="Progetti">
            {cv.projects.map((e) => (
              <EntryProjects key={e.title} {...e} />
            ))}
          </Section>
          <Section title="Info">
            <dl>
              {/* tag per le liste di coppie */}
              {cv.info.map((e) => (
                <div key={e.label}>
                  <dt>{e.label}</dt> {/* tag per l’etichetta */}
                  <dd>
                    {/* tag per il valore */}
                    {e.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>
          <Section title="Contatti">
            <dl>
              {/* tag per le liste di coppie */}
              {cv.contacts.map((e) => (
                <div key={e.label}>
                  <dt>{e.label}</dt> {/* tag per l’etichetta */}
                  <dd>
                    {/* tag per il valore */}
                    <a href={e.href}>{e.value}</a>
                  </dd>
                </div>
              ))}
            </dl>
          </Section>
        </main>
      </div>
    </>
  );
}

export default App;
