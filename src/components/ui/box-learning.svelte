<script>
  import { scale } from 'svelte/transition';

  export let url;
  export let type;
  export let title;
  export let description;
</script>

<style>
  a {
    @apply no-underline;
  }

  p {
    @apply my-2;
  }
</style>

<a
  transition:scale
  href={url}
  target="_blank"
  rel="noopener noreferrer"
  class="bg-white rounded overflow-hidden shadow-md hover:shadow-lg m-2 lg:m-0 px-6 py-4 transition duration-300 md:h-box">
  <div>
    <small class="uppercase">{type}</small>
    <div class="font-bold">{title}</div>
    <p class="text-gray-700">{description}</p>
  </div>
</a>
