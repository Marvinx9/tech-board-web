import { Banner } from "./components/Banner";
import { CardEvent } from "./components/CardEvent";
import { FormEvent } from "./components/FormEvent";
import { Theme } from "./components/Theme";
import "./global.css";

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

  const events = [
    {
      id: 1,
      capa: "./Imagem1.png",
      tema: "front-end",
      data: new Date(),
      titulo: "Mulheres no Front",
      text: "Valorizando e impulsionando a participação feminina no desenvolvimento front-end.",
    },
  ];

  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>
      <Banner />
      <FormEvent themes={themes} />
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
              text={event.text}
            />
          ))}
        </section>
      ))}
    </main>
  );
}
