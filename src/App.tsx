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
          <section className="cv-section">
            {/* sezione tecnologie*/}
            <div className="marquee">
              <div className="marquee__track">
                <ul className="list-unstyled">
                  {/* bootstrap, rimozione dei pallini
                  doppia lista per farla scorrere con lo slide */}
                  {cv.technologies.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
                <ul aria-hidden="true" className="list-unstyled">
                  {cv.technologies.map((e) => (
                    <li key={`${e}-copy`}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <Section title="Progetti" sectionName="progetti">
            {cv.projects.map((e) => (
              <EntryProjects key={e.title} {...e} />
            ))}
          </Section>
          <Section title="Formazione" sectionName="formazione">
            {cv.education.map((e) => (
              <EntryItem key={e.title} {...e} />
            ))}
          </Section>
          <Section title="Corsi" sectionName="corsi">
            {cv.courses.map((e) => (
              <EntryItem key={e.title} {...e} />
            ))}
          </Section>

          <Section title="Info" sectionName="info">
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
          <Section title="Contatti" sectionName="contatti">
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
