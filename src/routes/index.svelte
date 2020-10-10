<script>
  import config from '../site.config.yml';
  import SEO from '../components/seo.svelte';
  import BoxLearning from '../components/box-learning.svelte';
  import SvelteLogo from '../components/icons/svelte.svelte';
  import learnings from './belajar/_data.yml';

  const { siteName, description } = config;
  const title = 'Komunitas Svelte Indonesia';
</script>

<style>
  .wrapper {
    @apply mt-10;
    @apply px-20;
    @apply py-10;
    @apply max-w-none;
  }

  .heading {
    @apply mt-0;
  }

  .link {
    @apply inline-flex;
    @apply items-center;
    @apply font-light;
    @apply no-underline;
    @apply transition;
    @apply duration-300;
  }

  .link:hover {
    @apply text-primary;
  }
</style>

<SEO title="{siteName} • {title}" />

<section class="wrapper prose prose-lg flex justify-around">
  <div class="self-center">
    <h5 class="text-primary font-semibold uppercase">Selamat Datang</h5>
    <h3 class="heading">{title}</h3>
    <p>{description}</p>

    <a href="https://telegram.me/svelte_id" target="_blank" rel="noopener noreferrer" class="link">
      Bergabung

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="ml-1">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </a>
  </div>

  <div class="hidden lg:inline">
    <SvelteLogo />
  </div>
</section>

<section class="wrapper prose prose-lg bg-gray-100 mb-6">
  <div class="text-center">
    <h6 class="uppercase">Mau Belajar Svelte?</h6>
    <h2 class="heading">Materi Pembelajaran</h2>
  </div>

  <div class="sm:grid sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
    {#each learnings as learning}
      {#if learning.featured}
        <BoxLearning {...learning} />
      {/if}
    {/each}
  </div>
</section>
