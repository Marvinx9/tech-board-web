import "./styles.css";

type TitleFormProps = {
  texto: string;
};

export function TitleForm({ texto }: TitleFormProps) {
  return <h2 className="title-form">{texto}</h2>;
}
