<script>
  
</script>

<div class="home-div">
  <h2>¿Qué es esto?</h2>
  <p>
    Es básicamente una caja de arena para probar como es <a href="https://svelte.dev/">Svelte</a>. 
    Además, mostrar algunas cosas, aunque no se sentirá muy distinto de un CV.
  </p>
  <h2>¿Qué vas a encontrar?</h2>
    <ul>
      <li><strong>Ciencia de Datos</strong>: Proyectos que he hecho haciendo análisis de datos y/o usando modelos de inteligencia artificial o similares.</li>
      <li><strong>Desarrollo</strong>: Proyectos que he hecho como desarrollador, espero que siga creciendo.</li>
      <li><strong>Proyectos</strong>: Proyectos personales. Cositas que hecho en mis ratos libres.</li>
    </ul>
</div>

<style>
  li {
    margin-bottom: 1em;
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }  
  li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    height: 5px;
    width: 5px;
    border: 1px solid black;
    border-width: 2px 2px 0 0;
    transform: rotate(45deg);
  }
</style>
