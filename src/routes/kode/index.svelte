<script>
  import BoxCode from '../../components/box-code.svelte';
  import codes from './_data.yml';
  import Fuse from 'fuse.js';
  import { createQueryParamSet } from './utils/query_params';
  import { filterByTags } from './utils/filter';

  let tags = [...new Set(codes.map(code => code.tags.split(',').map(x => x.trim())).flat())];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };

  const selectedTags = createQueryParamSet('tag');
  $: selectedResources = filterByTags(codes, $selectedTags);
  $: $selectedTags, typeof window !== 'undefined' && scrollToTop();

  let searchterm = '';
  let searchResults = null;
  $: {
    if (searchterm) {
      const options = {
        keys: ['type', 'title', 'description', 'tags']
      };
      scrollToTop();
      const fuse = new Fuse(selectedResources, options);
      searchResults = fuse.search(searchterm).map(data => data.item);
    } else {
      searchResults = null;
    }
  }
  $: results = searchResults || selectedResources;
</script>

<style>
  .heading {
    @apply mt-0;
    @apply mb-0;
  }

  .tags {
    @apply w-full;
    @apply overflow-auto;
    @apply flex;
    @apply justify-center;
    @apply mb-8;
  }

  .input {
    @apply bg-white;
    @apply shadow-md;
    @apply p-2;
    @apply pl-10;
    @apply rounded-md;
    @apply w-full;
  }

  .input:focus {
    @apply outline-none;
  }

  .tag {
    @apply p-2;
    @apply m-1;
    @apply rounded-md;
    @apply whitespace-no-wrap;
    @apply font-bold;
    @apply text-xs;
    @apply cursor-pointer;
    @apply bg-gray-200;
    @apply text-gray-500;
    @apply uppercase;
  }

  .tag-selected {
    @apply bg-primary;
    @apply text-white;
  }
</style>

<section class="wrapper prose prose-lg bg-gray-100 min-h-screen">
  <header class="text-center mb-4">
    <h2 class="heading">KODE</h2>
    <h6 class="uppercase">Mencari Library atau Boilerplate berbasis Svelte ?</h6>
  </header>

  <div class="w-full flex justify-center mb-4">
    <div class="relative sm:w-6/12 xs:w-full">
      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          color="#AAA"
          class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
      </span>
      <input type="search" bind:value={searchterm} class="input" placeholder="Cari sesuatu..." />
    </div>
  </div>

  <div class="tags">
    {#each tags as tag}
      <span
        class="tag"
        class:tag-selected={$selectedTags.has(tag)}
        on:click={() => selectedTags.toggle(tag)}>#{tag}</span>
    {/each}
  </div>

  <section class="sm:grid sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
    {#each results as code}
      <BoxCode selectedTags={$selectedTags} {...code} />
    {/each}
  </section>
</section>
