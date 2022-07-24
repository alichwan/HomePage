import { writable } from "svelte/store";

const DeveloperStore = writable(
  [
    {
      id: 1,
      title: "Esta página",
      place: "Independiente",
      dates: "07/2022-actualidad",
      where: "",
      body: "Esta página es para experimentar el uso de Svelte y, en general, para crear algo de este estilo.",
      observations: ""
    },
    {
      id: 2,
      title: "Desarrollador de API",
      place: "Corte Suprema / Instituto Milenio Fundamentos de los Datos",
      dates: "01/2021-03/2021",
      where: "Santiago, Chile",
      body: "Creación de una API en Flask que permite seleccionar, crear, entrenar, probar y usar modelos de machine learning enfocados en el ámbito jurídico.",
      observations: "A pesar de que está en la frontera de data science y developer, es mejor considerarlo como un proyecto de web, pues estuve más enfocado en la conexión de los modelos con el backend que de la creacion misma de los modelos"
    },
  ]);

export default DeveloperStore;