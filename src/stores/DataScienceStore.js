import { writable } from "svelte/store";

const DataScienceStore = writable(
  [
    {
      id: 1,
      title: "Desarrollo de clasificación de proyectos",
      place: "Corporación de Fomento de la Producción (CORFO)",
      dates: "01/2022-07/2022",
      where: "Santiago, Chile",
      body: "Aumento de información disponible en base de datos al automatizar la clasificación de proyectos en variadas dimensiones.",
      observations: ""
    },    
    {
      id: 2,
      title: "Desarrollo de métricas para evitar proyectos duplicados",
      place: "Corporación de Fomento de la Producción (CORFO)",
      dates: "08/2020-12/2020",
      where: "Santiago, Chile",
      body: "Reducir la cantidad de proyectos duplicados al crear una métrica que considere similaridad en proyectos postulados. Procesamiento de texto de proyectos para poder aumentar las fuentes de información disponible al crear la métrica",
      observations: ""
    }
  ]);

export default DataScienceStore;
