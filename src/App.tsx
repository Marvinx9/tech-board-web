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
    {
      id: 2,
      capa: "./event-2.jpg",
      tema: "front-end",
      data: new Date(),
      titulo: "Desvendando o React",
      texto:
        "Criada pela Facebook o React veio para solucionar problemas que ocorriam na maioria dos projetos da época.",
    },
    {
      id: 3,
      capa: "./event-3.jpg",
      tema: "data science",
      data: new Date(),
      titulo: "O outro lado do achismo",
      texto:
        "Aprenda a fundamentar solidamente seus dados antes de apresentar para seu cliente.",
    },
    {
      id: 4,
      capa: "./event-4.jpg",
      tema: "front-end",
      data: new Date(),
      titulo: "Além do Estilo",
      texto:
        "Uma interface bonita pode chamar a atenção do seu cliente, mas e sua intuitividade?",
    },
    {
      id: 5,
      capa: "./event-5.jpg",
      tema: "cloud",
      data: new Date(),
      titulo: "Deploy na Sexta",
      texto:
        "Evento anual desde 2018 trás convidados icônicos na área de cloud",
    },
    {
      id: 6,
      capa: "./event-6.jpg",
      tema: "back-end",
      data: new Date(),
      titulo: "Por dentro do Código",
      texto:
        "Live Coding com instrutor Sênior da meta mostrando como funciona o seu pensamento programático",
    },
    {
      id: 7,
      capa: "./event-2.jpg",
      tema: "front-end",
      data: new Date(),
      titulo: "Front e outros Ensaios",
      texto: "Além do front oque existe a sua volta?",
    },
    {
      id: 8,
      capa: "./event-3.jpg",
      tema: "data science",
      data: new Date(),
      titulo: "O outro lado do achismo",
      texto:
        "Aprenda a fundamentar solidamente seus dados antes de apresentar para seu cliente.",
    },
    {
      id: 4,
      capa: "./event-4.jpg",
      tema: "front-end",
      data: new Date(),
      titulo: "Além do Estilo",
      texto:
        "Uma interface bonita pode chamar a atenção do seu cliente, mas e sua intuitividade?",
    },
    {
      id: 5,
      capa: "./event-5.jpg",
      tema: "back-end",
      data: new Date(),
      titulo: "Deploy na Sexta",
      texto:
        "Evento anual desde 2018 trás convidados icônicos na área de cloud",
    },
    {
      id: 6,
      capa: "./event-6.jpg",
      tema: "back-end",
      data: new Date(),
      titulo: "Por dentro do Código",
      texto:
        "Live Coding com instrutor Sênior da meta mostrando como funciona o seu pensamento programático",
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
      <section className="container">
        {themes.map(
          (theme) =>
            events.some((evento) => evento.tema == theme.nome) && (
              <section key={theme.id}>
                <Theme nome={theme.nome} />
                <div className="events">
                  {events
                    .filter((event) => event.tema == theme.nome)
                    .map((event) => (
                      <CardEvent
                        key={event.id}
                        capa={event.capa}
                        tema={event.tema}
                        data={event.data}
                        titulo={event.titulo}
                        texto={event.texto}
                      />
                    ))}
                </div>
              </section>
            )
        )}
      </section>
    </main>
  );
}
