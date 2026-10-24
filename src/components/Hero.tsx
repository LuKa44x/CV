import type { Cv } from "../types";
//Pick<Cv, "" | "" | ""> si collega con il type definito in /types.ts ma solo per i campi name, role, summary
function Hero({ name, role, summary }: Pick<Cv, "name" | "role" | "summary">) {
  return (
    <>
      <div className="cv-hero ">
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
          <h1>{name}</h1>
          <p>{role}</p>
        </div>
        <p style={{ whiteSpace: "pre-line" }} className="py-5">
          {summary}
        </p>
      </div>
    </>
  );
}

export default Hero;
