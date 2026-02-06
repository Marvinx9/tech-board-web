import { useState } from "react";
import { Banner } from "./components/Banner";
import { CardEvent } from "./components/CardEvent";
import { FormEvent } from "./components/FormEvent";
import { Theme } from "./components/Theme";
import "./global.css";

type EventProps = {
  id: number;
  capa: string;
  tema: string;
  data: Date;
  titulo: string;
  texto: string;
};

export function App() {
  const themes = [
    {
      id: 1,
      nome: "front-end",
    },
    {
      id: 2,
      nome: "back-end",
    },
    {
      id: 3,
      nome: "devops",
    },
    {
      id: 4,
      nome: "inteligência artificial",
    },
    {
      id: 5,
      nome: "data science",
    },
    {
      id: 6,
      nome: "cloud",
    },
  ];

  const initialEvents: EventProps[] = [
    {
      id: 1,
      capa: "./Imagem1.png",
      tema: "front-end",
      data: new Date(),
      titulo: "Mulheres no Front",
      texto:
        "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
    },
  ];

  const [events, setEvents] = useState<EventProps[]>(initialEvents);

  function onSubmmit(event: EventProps) {
    setEvents([...events, event]);
  }

  function nextValue(): number {
    return events[events.length - 1].id + 1;
  }

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormEvent themes={themes} onSubmmit={onSubmmit} nextValue={nextValue} />
      {themes.map((theme) => (
        <section key={theme.id}>
          <Theme nome={theme.nome} />
          {events.map((event) => (
            <CardEvent
              key={event.id}
              capa={event.capa}
              tema={event.tema}
              data={event.data}
              titulo={event.titulo}
              texto={event.texto}
            />
          ))}
        </section>
      ))}
    </main>
  );
}
