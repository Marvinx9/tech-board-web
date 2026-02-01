import "./styles.css";

type CardEventProps = {
  capa: string;
  tema: string;
  data: Date;
  titulo: string;
  text: string;
};

export function CardEvent({ capa, tema, data, titulo, text }: CardEventProps) {
  return (
    <div className="card-event">
      <img src={capa} alt={titulo} />
      <div className="card-body">
        <p className="tag">{tema}</p>
        <p className="date">{data.toLocaleDateString("pt-BR")}</p>
        <h4 className="card-title">{titulo}</h4>
        <p className="text">{text}</p>
      </div>
    </div>
  );
}
