import "./styles.css";

type ButtonProps = {
  texto: string;
};

export function Button({ texto }: ButtonProps) {
  return <button className="button">{texto}</button>;
}
