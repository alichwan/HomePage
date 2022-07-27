import { writable } from "svelte/store";

const DataScienceStore = writable(
  [
    {
      id: 1,
      title: "Desarrollo de clasificación de proyectos",
      at: "Corporación de Fomento de la Producción (CORFO)",
      dates: "enero 2022 - julio 2022",
      where: "Santiago, Chile",
      body: "CORFO tiene que tratar con una gran cantidad de proyectos que postulan a fondos concursables. Además, mucha información es omitida por los postulantes, pero que a CORFO le gustaría saber. Se busca automatizar la clasificación de proyectos para distintos atributos como son el mercado objetivo al que pertenece el proyecto, si sigue un modelo de economía circular o no, si sigue un enfoque de desarrollo sustentable, entre otros. Se hace procesamiento de los atributos de texto de los proyectos como fuente principal de información para la clasificación.",
      observations: ""
    },    
    {
      id: 2,
      title: "Desarrollo de métricas para evitar proyectos duplicados",
      at: "Corporación de Fomento de la Producción (CORFO)",
      dates: "agosto 2020 - diciembre 2020",
      where: "Santiago, Chile",
      body: "CORFO, para promover la innovación, reparte fondos en distintos concursos, donde los mejores proyectos postulados llegan a recibir dichos fondos. Al haber una gran cantidad de proyectos, es posible que se repitan (de manera consciente o inconsciente) algunos proyectos. Para reducir la cantidad de proyectos duplicados se cre una métrica que considere similaridad en proyectos postulados y se hace un ordenamiento de los más similares, permitiendo un posterior análisis por parte de expertos. Además se hizo procesamiento de texto de proyectos para poder aumentar las fuentes de información disponible.",
      observations: "Es interesante notar que algunos proyectos se parafraseaban para significar lo mismo sin repetir el texto, por lo que un comparador de texto bruto no hubiera podido realizar la tarea de manera confiable."
    }
  ]);

export default DataScienceStore;
