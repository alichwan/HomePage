<script>
  import CardsList from "../shared/CardsList.svelte";
  import DeveloperStore from '../stores/DeveloperStore.js';

  let info = [];

  DeveloperStore.subscribe( data => {
    info = data;
    console.log(info);
  });

</script>

<div class="data-div">
  <h1>Proyectos como desarollador</h1>
  <p>
    Estos son algunos de los proyectos que he hecho como desarrollador. 
    Me interesa más la parte de front-end que de back-end. Sin embargo, ambas me llaman mucho la atención.
  </p>
  <CardsList {info}/>
</div>

<style>
  /* .dev-div {
    background-color: rgba(145, 213, 255, 0.2);
  } */
</style>