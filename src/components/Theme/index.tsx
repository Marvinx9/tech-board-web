import "./styles.css";

type ThemeProps = {
  nome: string;
};

export function Theme({ nome }: ThemeProps) {
  return <h3 className="title-theme">{nome}</h3>;
}
