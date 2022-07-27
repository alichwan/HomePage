<script>
  import CardsList from "../shared/CardsList.svelte";
  import DataScienceStore from '../stores/DataScienceStore.js';

  let info = [];

  DataScienceStore.subscribe( data => {
    info = data;
  });

</script>

<div class="data-div">
  <h2>Proyectos de ciencias de datos</h2>
  <p>
    Estos son algunos de los proyectos que he hecho como cientifico de datos. 
    Esto es, haciendo análisis y limpieza de datos; creando modelos de clasificación;
    usando redes neuronales para transformar texto en vectores numéricos; entre otras cosas.
  </p>
  <CardsList {info}/>
</div>

<style>
  h2 {
    font-family: 'Cinzel', Arial, Helvetica, sans-serif;
  }
</style>