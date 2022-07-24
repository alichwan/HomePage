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
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
