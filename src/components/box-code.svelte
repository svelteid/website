<script>
  export let url;
  export let type;
  export let title;
  export let description;
  export let tags;
  export let selectedTags;

  import { scale } from 'svelte/transition';
</script>

<style>
  .box {
    height: 320px;
    @apply w-full;
    @apply no-underline;
    @apply px-4;
    @apply py-6;
    @apply bg-white;
    @apply rounded;
    @apply overflow-hidden;
    @apply shadow-md;
    @apply transition;
    @apply duration-300;
    @apply flex;
    @apply flex-col;
    @apply justify-between;
  }

  .box:hover {
    @apply shadow-lg;
    @apply cursor-pointer;
  }

  .heading {
    @apply mt-0;
  }

  .paragraph {
    @apply mb-0;
  }

  .tags {
    @apply w-full;
    @apply overflow-auto;
  }

  .tag {
    @apply p-1;
    @apply m-1;
    @apply rounded-md;
    @apply whitespace-no-wrap;
    @apply font-bold;
    @apply text-xs;
    @apply bg-gray-200;
    @apply text-gray-500;
    @apply uppercase;
  }

  .tag-selected {
    @apply bg-primary;
    @apply text-white;
  }
</style>

<a transition:scale href={url} target="_blank" rel="noopener noreferrer" class="box md:w-1/2 lg:w-1/3">
  <div>
    <small class="uppercase">{type}</small>
    <h3 class="heading">{title}</h3>
    <p class="paragraph">{description}</p>
  </div>

  <div class="tags">
    {#each tags.split(',') as tag}
      <span class="tag" class:tag-selected={selectedTags && selectedTags.has(tag.trim())}>#{tag.trim()}</span>
    {/each}
  </div>
</a>
