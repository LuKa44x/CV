import "./App.css";
import Hero from "./components/Hero";
import Section from "./components/Section";
import { EntryItem, EntryProjects } from "./components/EntryItems";
import cv from "./data/cv";
import { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import type { Mode } from "./types";

function getInitialMode(): Mode {
  try {
    const saved = localStorage.getItem("mode");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // localStorage non disponibile, si usa la preferenza del sistema
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function App() {
  const [mode, setMode] = useState<Mode>(getInitialMode);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", mode);
    try {
      localStorage.setItem("mode", mode);
    } catch {
      // niente da fare: il tema funziona lo stesso, solo non viene ricordato
    }
  }, [mode]);

  const toggleMode = () => setMode((m) => (m === "light" ? "dark" : "light"));
  return (
    <>
      <div className="container">
        <header>
          <div className="d-flex justify-content-end pt-3">
            <ThemeToggle mode={mode} onToggle={toggleMode} />
          </div>
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
          <section>
            <div className="row">
              <div
                className="cv-section d-flex justify-content-md-around"
                style={{ paddingTop: "5rem", paddingBottom: "0" }}
              >
                <h2 className="col-md-6">Formazione</h2>
                <h2
                  className="col-md-6 d-md-block"
                  style={{ paddingLeft: "12px", display: "none" }}
                >
                  Esperienze
                </h2>
              </div>
              <div className="col-md-6 cv-section cv-formazione">
                {cv.education.map((e) => (
                  <EntryItem key={e.title} {...e} />
                ))}
              </div>
              <h2
                className="col-md-6 d-md-none"
                style={{ paddingLeft: "12px" }}
              >
                Esperienze
              </h2>
              <div className="col-md-6 cv-section cv-esperienze">
                {cv.work.map((e) => (
                  <EntryItem key={e.title} {...e} />
                ))}
              </div>
            </div>
          </section>
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
                    <a target="_blank" rel="noopener noreferrer" href={e.href}>
                      {e.value}
                    </a>
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
