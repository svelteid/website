<script>
  import Skeleton from './skeleton.svelte';
  import formatDate from '../utils/format-date';
  import { getStructuredEvent } from '../services/eventbrite';

  export let event = {};
  $: isLoading = Object.keys(event).length === 0 && event.constructor === Object;

  let query = getStructuredEvent(event.status === 'completed' ? event.id : null);
  $: streamUrl =
    $query.isSuccess && Array.isArray($query.data.modules) ? $query.data.modules[0].data.livestream_url.url : null;
</script>

<style>
  img {
    width: 300px;
    height: 150px;
  }

  h3 {
    margin-top: 0;
  }

  .btn {
    @apply bg-primary;
    @apply duration-500;
    @apply text-white;
    @apply font-semibold;
    @apply no-underline;
    @apply py-2;
    @apply px-4;
    @apply border;
    @apply border-transparent;
    @apply rounded;
    @apply shadow;
    @apply transition;
  }

  .btn:hover {
    @apply opacity-50;
  }
</style>

<section class="prose prose-lg flex my-4 mx-auto">
  {#if isLoading}
    <Skeleton w="550px" h="150px" />
  {:else if typeof event.logo === 'object' && event.logo !== null}
    <img src={event.logo.url} alt={event.name.text} />
  {:else}
    <div class="bg-gray-200 text-gray-700 text-lg flex justify-center items-center">Gambar tidak dapat dimuat</div>
  {/if}

  <article class="flex-row ml-4 mt-2 w-full">
    {#if isLoading}
      <Skeleton w="200px" h="1rem" />
      <Skeleton w="300px" h="1.5rem" />
    {:else}
      <span class="text-base font-semibold tracking-wide">{formatDate(event.start.local)}</span>
      <h3>{event.name.text.replace('Svelte Indonesia ', '')}</h3>

      {#if event.status === 'live'}
        <!-- TODO: create widget instead link to eventbrite -->
        <a class="btn" target="_blank" rel="noopener noreferrer" href={event.url}>Daftar</a>
      {:else if event.status === 'completed' && $query.isLoading}
        <button
          type="button"
          class="btn inline-flex items-center ease-in-out cursor-not-allowed"
          class:shadow-none={$query.isLoading}
          disabled>
          <svg class="animate-spin mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>

          Memuat url siaran ulang
        </button>
      {:else if event.status === 'completed' && $query.isSuccess && streamUrl}
        <a class="btn" target="_blank" rel="noopener noreferrer" href={streamUrl}>Tonton siaran ulang</a>
      {/if}
    {/if}
  </article>
</section>
