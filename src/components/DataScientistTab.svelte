<script>
  import CardsList from "../shared/CardsList.svelte";
  import DataScienceStore from '../stores/DataScienceStore.js';

  let info = [];

  DataScienceStore.subscribe( data => {
    info = data;
  });

</script>

<div class="data-div">
  <h1>Proyectos de ciencias de datos</h1>
  <p>
    Estos son algunos de los proyectos que he hecho como cientifico de datos. 
    Esto es, haciendo análisis y limpieza de datos; creando modelos de clasificación;
    usando redes neuronales para transformar texto en vectores numéricos; entre otras cosas.
  </p>
  <CardsList {info}/>
</div>

<style>
  /* .data-div {
    background-color: rgba(145, 255, 187,0.2);
  } */
</style>