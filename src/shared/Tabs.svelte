<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let items;
  export let activeItem;
</script>

<div class="tabs">
  <ul>
    {#each items as item}
      <li on:click={()=>{dispatch('tabChange', item)}}>
        <div class:active={item===activeItem}>{item}</div>
      </li>
    {/each}
  </ul>
</div>

<style>
  @media only screen and (max-width: 430px) {
    .tabs{
    margin-bottom: 40px;
  }
  ul{
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  li{
    margin: 0 16px;
    font-size: 15px;
    color: #555;
    cursor: pointer;
  }
  .active{
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
  }
  @media only screen and (min-width: 431px) {
    .tabs{
    margin-bottom: 40px;
  }
  ul{
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
  }
  li{
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
    font-family: 'Cinzel', Arial, Helvetica, sans-serif;
  }
  .active{
    color: #d91b42;
    border-bottom: 2px solid #d91b42;
    padding-bottom: 8px;
  }
  }
</style>
