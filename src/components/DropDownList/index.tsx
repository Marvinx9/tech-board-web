import "./styles.css";

type Theme = {
  id: number;
  nome: string;
};

type DropDownListProps = React.ComponentProps<"select"> & {
  items: Theme[];
};

export function DropDownList({ items, ...rest }: DropDownListProps) {
  return (
    <select className="drop-down-list" defaultValue="" {...rest} required>
      <option className="option-default" value="" disabled>
        Selecione uma opção
      </option>
      {items.map((item) => (
        <option className="option" key={item.id} value={item.id}>
          {item.nome}
        </option>
      ))}
    </select>
  );
}
