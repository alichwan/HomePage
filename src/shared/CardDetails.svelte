<script>
  import Card from './Card.svelte';
  export let card;
  
  let showDetails = false;

  // handle details
  const handleDetails = (id) => {
    showDetails = !showDetails;
  }

</script>

<Card>
  <div class="card">
    <h3>{ card.title }</h3>
    <div class="answer" on:click={()=> handleDetails(card.id)}>
      {#if showDetails}
        <span class="place">{ card.place }</span>
        <span class="dates">{ card.dates }</span>
        <span class="where">{ card.where }</span>
        <span class="body">{ card.body }</span>
        {#if card.observations.length > 0}
          <span class="observations">Observaciones: { card.observations }</span>
        {/if}
			{:else }
        <span class="read-more">Detalles</span>
      {/if}

    </div>
  </div>
</Card>
  
<style>
  h3{
    margin: 0 auto;
    color: #555;
  }
  .answer{
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover{
    opacity: 0.8;
  }
  span{
    display: inline-block;
    padding: 10px 20px;
  }
  .read-more{
    color: rgb(143, 143, 143);
  }
  .observations{
    color: rgb(170, 170, 170);
  }
</style>
