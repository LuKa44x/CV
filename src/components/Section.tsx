import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  sectionName: string; //per classe css dinamica e individuale per ogni sezione
};
function Section({ title, children, sectionName }: Props) {
  return (
    <>
      <section className={`cv-section cv-${sectionName}`}>
        <div className="row">
          <div className="col-md-3 title">
            <h2>{title}</h2>
          </div>
          <div className="col-md-9 children">{children}</div>
        </div>
      </section>
    </>
  );
}

export default Section;
