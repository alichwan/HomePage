<script>
  import CardsList from "../shared/CardsList.svelte";
  import DeveloperStore from '../stores/DeveloperStore.js';

  let info = [];

  DeveloperStore.subscribe( data => {
    info = data;
  });

</script>

<div class="data-div">
  <h2>Proyectos como desarollador</h2>
  <p>
    Estos son trabajos que he hecho como desarrollador. 
    <br>
    Si bien me interesa tanto el desarrollo en frontend como en backend, el primero me llama más la atención.
  </p>
  <CardsList {info}/>
</div>

<style>
  h2 {
    font-family: 'Cinzel', Arial, Helvetica, sans-serif;
  }
</style>