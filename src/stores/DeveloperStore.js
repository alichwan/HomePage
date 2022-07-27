import { writable } from "svelte/store";

const DeveloperStore = writable(
  [
    {
      id: 1,
      title: "Esta página",
      at: "Independiente",
      dates: "julio 2022 - actualidad",
      where: "Santiago, Chile",
      body: "Esta página se creó como un primer proyecto propio de creación de página web. Este proyecto está en su mayor parte escrita en Svelte.",
      observations: ""
    },
    {
      id: 2,
      title: "Desarrollador de API",
      at: "Corte Suprema / Instituto Milenio Fundamentos de los Datos",
      dates: "enero 2021 - marzo 2021",
      where: "Santiago, Chile",
      body: "Creación de una API en Flask que permite seleccionar, crear, entrenar, probar y usar modelos de machine learning enfocados en el ámbito jurídico. Se programó casi en su totalidad en python. El grupo de trabajo era de 8 personas: la mayoría trabajando en la parte de creacion y entrenamiento de modelos; el resto , incluyendome, trabajabamos en la conexión de los modelos con los endpoints",
      observations: "A pesar de que está en la frontera de data science y developer, es mejor considerarlo como un proyecto de web, pues estuve más enfocado en la conexión de los modelos con el backend que de la creacion misma de los modelos"
    },
  ]);

export default DeveloperStore;