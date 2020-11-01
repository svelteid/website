<section class="text-lg h-screen flex flex-col justify-center items-center">
  <p class="my-4">Halaman ini sedang dalam tahap perbaikan</p>
</section>

<!--<script>
  import BoxEvent from '../../components/box-event.svelte';
  import { getListEvent } from '../../services/eventbrite';

  const limit = 15;
  let offset = 1;
  let query = getListEvent(offset, limit);

  // TODO: handle infinite scroll
  $: query.refetch(['events', offset, limit]);
</script><div class="container mx-auto px-4">
  {#if $query.status === 'loading'}
    {#each [...Array(5)] as _}
      <BoxEvent />
    {/each}
  {:else if $query.status === 'error'}
    <section class="text-lg h-screen flex flex-col justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="mx-auto text-primary">
        <circle cx="12" cy="12" r="10" />
        <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>

      <p class="my-4">Sepertinya terjadi kesalahan di halaman ini</p>

      <a
        class="transition duration-300 ease-in-out bg-primary hover:bg-opacity-75 text-white font-semibold py-2 px-4 rounded"
        href="https://telegram.me/svelte_id"
        target="_blank"
        rel="noopener noreferrer">
        Laporkan di grup
      </a>
    </section>
  {:else}
    {#each $query.resolvedData.events as event}
      <BoxEvent {event} />
    {/each}
  {/if}
</div> -->
