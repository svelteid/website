<script>
  // import Event from '../components/event.svelte';
  import { getListEvent } from '../services/eventbrite';

  const limit = 25;
  let offset = 1;
  let query = getListEvent(offset, limit);

  $: query.refetch(['events', offset, limit]);
</script>

{#if $query.status === 'loading'}
  <div>Loading...</div>
{:else if $query.status === 'error'}
  <div>{JSON.stringify($query.error)}</div>
{:else}
  {#each $query.resolvedData.events as event}
    {#if event.status !== 'draft'}
      <img src={event.logo.url} alt={event.name.text} />

      <section>
        <span>{event.start.local}</span>
        <h4>{event.name.text}</h4>
        <p>{event.summary}</p>
      </section>
    {/if}
  {/each}
{/if}
