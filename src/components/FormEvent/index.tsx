import { Button } from "../Button";
import { DropDownList } from "../DropDownList";
import { FieldForm } from "../FieldForm";
import { FieldInput } from "../FieldInput";
import { Label } from "../Label";
import { TitleForm } from "../TitleForm";
import "./styles.css";

type Theme = {
  id: number;
  nome: string;
};

type FormEventProps = {
  themes: Theme[];
};

export function FormEvent({ themes }: FormEventProps) {
  return (
    <form className="form-event">
      <TitleForm texto="Preencha para criar um evento:" />
      <FieldForm>
        <Label htmlFor="nome">Qual o nome do evento?</Label>
        <FieldInput
          type="text"
          id="nome"
          placeholder="Summer dev hits"
          name="nomeEvento"
        />
      </FieldForm>
      <FieldForm>
        <Label htmlFor="dateEvent">Data do evento?</Label>
        <FieldInput type="date" id="dateEvent" name="dateEvent" />
      </FieldForm>
      <FieldForm>
        <Label htmlFor="temaEvento">Tema do evento</Label>
        <DropDownList id="temaEvento" name="temaEvento" items={themes} />
      </FieldForm>
      <div className="actions">
        <Button texto="Criar evento" />
      </div>
    </form>
  );
}
