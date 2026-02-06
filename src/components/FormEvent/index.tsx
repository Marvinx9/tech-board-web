/* eslint-disable @typescript-eslint/no-explicit-any */
import "./styles.css";
import { Button } from "../Button";
import { DropDownList } from "../DropDownList";
import { FieldForm } from "../FieldForm";
import { FieldInput } from "../FieldInput";
import { Label } from "../Label";
import { TitleForm } from "../TitleForm";
import { FieldText } from "../FieldText";

type EventProps = {
  id: number;
  capa: string;
  tema: string;
  data: Date;
  titulo: string;
  texto: string;
};

type Theme = {
  id: number;
  nome: string;
};

type FormEventProps = {
  themes: Theme[];
  onSubmmit: (event: EventProps) => void;
  nextValue: () => number;
};

export function FormEvent({ themes, onSubmmit, nextValue }: FormEventProps) {
  function handleCreatEvent(formData: any) {
    const event: EventProps = {
      id: nextValue(),
      capa: formData.get("capaEvento"),
      tema:
        themes.find((item) => item.id == formData.get("temaEvento"))?.nome ??
        "",
      data: new Date(formData.get("dateEvento")),
      titulo: formData.get("nomeEvento"),
      texto: formData.get("textoEvento"),
    };

    onSubmmit(event);
  }

  return (
    <form className="form-event" action={handleCreatEvent}>
      <TitleForm texto="Preencha para criar um evento:" />
      <FieldForm>
        <Label htmlFor="capaEvento">Qual a capa do evento?</Label>
        <FieldInput
          type="text"
          id="capaEvento"
          name="capaEvento"
          placeholder="https://image-url"
        />
      </FieldForm>
      <FieldForm>
        <Label htmlFor="nomeEvento">Qual o nome do evento?</Label>
        <FieldInput
          type="text"
          id="nomeEvento"
          placeholder="Summer dev hits"
          name="nomeEvento"
        />
      </FieldForm>
      <FieldForm>
        <Label htmlFor="dateEvento">Data do evento?</Label>
        <FieldInput
          type="date"
          id="dateEvento"
          name="dateEvento"
          placeholder="dd/mm/aaaa"
          required={true}
        />
        {/* <img src="/angle-down.svg" alt="angle down icon" size={2} /> */}
      </FieldForm>
      <FieldForm>
        <Label htmlFor="temaEvento">Tema do evento</Label>
        <DropDownList id="temaEvento" name="temaEvento" items={themes} />
      </FieldForm>
      <FieldForm>
        <Label htmlFor="textoEvento">Descrição do evento</Label>
        <FieldText
          type="text"
          id="textoEvento"
          placeholder="Breve descrição do evento"
          name="textoEvento"
          rows={4}
        />
      </FieldForm>
      <div className="actions">
        <Button texto="Criar evento" />
      </div>
    </form>
  );
}
