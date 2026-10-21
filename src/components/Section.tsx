import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
function Section({ title, children }: Props) {
  return (
    <>
      <section className="cv-section">
        <div className="row">
          <div className="col-md-3">
            <h2>{title}</h2>
          </div>
          <div className="col-md-9">{children}</div>
        </div>
      </section>
    </>
  );
}

export default Section;
