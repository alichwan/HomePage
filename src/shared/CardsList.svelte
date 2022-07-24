<script>
  import CardDetails from "./CardDetails.svelte";
  
  export let info;
</script>

<div class="poll-list">
  {#each info as card (card.id)}
    <div>
      <CardDetails {card} />
    </div>
  {/each}
</div>

<style>
  @media only screen and (max-width: 430px) {
    .poll-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
  }
  @media only screen and (min-width: 431px) {
    .poll-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
  }
</style>
