import type { Mode } from "../types";

type Props = {
  mode: Mode;
  onToggle: () => void;
};

function ThemeToggle({ mode, onToggle }: Props) {
  return (
    <button
      type="button"
      className="btn btn-sm btn-outline-secondary"
      onClick={onToggle}
    >
      {mode === "light" ? "Tema scuro" : "Tema chiaro"}
    </button>
  );
}

export default ThemeToggle;
