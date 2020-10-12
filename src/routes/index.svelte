<script>
  import config from '../site.config.yml';
  import SEO from '../components/seo.svelte';
  import BoxLearning from '../components/box-learning.svelte';
  import BoxCode from '../components/box-code.svelte';
  import SvelteLogo from '../components/icons/svelte.svelte';
  import learnings from './belajar/_data.yml';
  import codes from './kode/_data.yml';

  const { siteName, description } = config;
  const title = 'Komunitas Svelte Indonesia';
</script>

<style>
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
    @apply underline;
    @apply text-primary;
  }

  .button-link {
    @apply link;
    @apply p-3;
    @apply mt-8;
    @apply rounded;
  }

  .button-link:hover {
    @apply underline;
    @apply bg-gray-300;
  }
</style>

<SEO title="{siteName} • {title}" />

<section class="wrapper prose prose-lg flex justify-around mt-10">
  <div class="self-center">
    <span class="text-primary font-semibold uppercase">Selamat Datang</span>
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

<section class="wrapper prose prose-lg bg-gray-100 mt-10">
  <header class="text-center">
    <span class="uppercase">Mau Belajar Svelte?</span>
    <h2 class="heading">Materi Pembelajaran</h2>
  </header>

  <section class="sm:grid sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
    {#each learnings as learning}
      {#if learning.featured}
        <BoxLearning {...learning} />
      {/if}
    {/each}
  </section>

  {#if learnings.length >= 3}
    <footer class="text-center">
      <a href="/belajar" class="button-link">
        Lihat Lebih Banyak

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
    </footer>
  {/if}
</section>

<section class="wrapper prose prose-lg bg-gray-100 mt-10">
  <header class="text-center">
    <span class="uppercase">Mencari Library atau Boilerplate berbasis Svelte ?</span>
    <h2 class="heading">KODE</h2>
  </header>

  <section class="sm:grid sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
    {#each codes as code}
      {#if code.featured}
        <BoxCode {...code} />
      {/if}
    {/each}
  </section>

  {#if codes.length >= 3}
    <footer class="text-center">
      <a href="/kode" class="button-link">
        Lihat Lebih Banyak

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
    </footer>
  {/if}
</section>
