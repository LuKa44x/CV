import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};
function Section({ title, children }: Props) {
  return (
    <>
      <section className="cv-section">
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
}

export default Section;
