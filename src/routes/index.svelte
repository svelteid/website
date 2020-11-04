<script>
  import { onMount } from 'svelte';
  import { quintOut } from 'svelte/easing';
  import { fade, draw } from 'svelte/transition';
  import { expand } from '~/utils/custom-transition.js';
  import config from '~/site.config.yml';
  import BoxLearning from '~/components/ui/box-learning.svelte';
  import learnings from './belajar/_data.yml';

  const { description } = config;
  const title = 'Komunitas Svelte Indonesia';

  const inner = `M45.41,108.86A21.81,21.81,0,0,1,22,100.18,20.2,20.2,0,0,1,18.53,84.9a19,19,0,0,1,.65-2.57l.52-1.58,1.41,1a35.32,35.32,0,0,0,10.75,5.37l1,.31-.1,1a6.2,6.2,0,0,0,1.11,4.08A6.57,6.57,0,0,0,41,95.19a6,6,0,0,0,1.68-.74L70.11,76.94a5.76,5.76,0,0,0,2.59-3.83,6.09,6.09,0,0,0-1-4.6,6.58,6.58,0,0,0-7.06-2.62,6.21,6.21,0,0,0-1.69.74L52.43,73.31a19.88,19.88,0,0,1-5.58,2.45,21.82,21.82,0,0,1-23.43-8.68A20.2,20.2,0,0,1,20,51.8a19,19,0,0,1,8.56-12.7L56,21.59a19.88,19.88,0,0,1,5.58-2.45A21.81,21.81,0,0,1,85,27.82,20.2,20.2,0,0,1,88.47,43.1a19,19,0,0,1-.65,2.57l-.52,1.58-1.41-1a35.32,35.32,0,0,0-10.75-5.37l-1-.31.1-1a6.2,6.2,0,0,0-1.11-4.08,6.57,6.57,0,0,0-7.06-2.62,6,6,0,0,0-1.68.74L36.89,51.06a5.71,5.71,0,0,0-2.58,3.83,6,6,0,0,0,1,4.6,6.58,6.58,0,0,0,7.06,2.62,6.21,6.21,0,0,0,1.69-.74l10.48-6.68a19.88,19.88,0,0,1,5.58-2.45,21.82,21.82,0,0,1,23.43,8.68A20.2,20.2,0,0,1,87,76.2a19,19,0,0,1-8.56,12.7L51,106.41a19.88,19.88,0,0,1-5.58,2.45`;
  const outer = `M65,34 L37,52 A1 1 0 0 0 44 60 L70.5,44.5 A1 1 0 0 0 65,34Z M64,67 L36,85 A1 1 0 0 0 42 94 L68,77.5 A1 1 0 0 0 64,67Z`;

  let iconVisible = false;

  onMount(() => {
    const timeout = setTimeout(() => {
      iconVisible = true;
    }, 850);

    return () => {
      clearTimeout(timeout);
    };
  });
</script>

<style>
  #svelte-logo {
    height: 250px;
  }

  .btn-join {
    @apply items-center;
    @apply justify-center;
    @apply font-semibold;
    @apply text-primary;
    @apply no-underline;
    @apply transition;
    @apply duration-300;
  }

  .btn-join:hover {
    @apply underline;
  }

  .btn-link {
    @apply p-2;
    @apply w-auto;
    @apply rounded;
    @apply no-underline;
    @apply text-base;
    @apply text-white;
    @apply bg-gray-800;
  }

  .btn-link:hover {
    @apply bg-gray-900;
  }
</style>

<section class="container prose prose-lg lg:flex my-6 lg:mx-6">
  <div class="self-center sm:px-4 lg:w-2/3">
    <span class="text-primary font-semibold uppercase">Selamat Datang</span>
    <h3>{title}</h3>
    <p>{description}</p>

    <a
      href="https://telegram.me/svelte_id"
      target="_blank"
      rel="noopener noreferrer"
      class="btn-join flex lg:inline-flex">
      Bergabung

      <svg
        fill="none"
        class="w-4 h-w-4 ml-1"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>

  <div class="hidden lg:inline lg:ml-10">
    {#if iconVisible}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 124" id="svelte-logo">
        <g out:fade={{ duration: 200 }}>
          <path
            in:expand={{ duration: 400, delay: 1000, easing: quintOut }}
            class="text-primary stroke-current fill-current stroke-50"
            d={outer} />
          <path in:draw={{ duration: 1000 }} class="text-primary stroke-current stroke-1" fill="white" d={inner} />
        </g>
      </svg>
    {/if}
  </div>
</section>

<section class="container prose prose-lg bg-gray-100 pt-10">
  <header class="text-center mb-4">
    <span class="uppercase">Mau Belajar Svelte?</span>
    <h2 class="heading">Materi Pembelajaran</h2>
  </header>

  <section class="grid grid-flow-row gap-4 md:grid-cols-2 lg:grid-cols-3">
    {#each learnings as learning}
      {#if learning.featured}
        <BoxLearning {...learning} />
      {/if}
    {/each}
  </section>

  {#if learnings.length >= 3}
    <footer class="text-center">
      <a href="/belajar" class="btn-link flex lg:inline-flex justify-center items-center my-6">
        Lihat Selengkapnya

        <svg
          fill="none"
          class="w-4 h-4 ml-1"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </footer>
  {/if}
</section>
