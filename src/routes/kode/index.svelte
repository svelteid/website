<script>
  import BoxCode from '../../components/box-code.svelte';
  import codes from './_data.yml';
</script>

<style>
  .heading {
    @apply mt-0;
  }
</style>

<section class="wrapper prose prose-lg bg-gray-100">
  <header class="text-center">
    <h6 class="uppercase">Mencari Library atau Boilerplate berbasis Svelte ?</h6>
    <h2 class="heading">KODE</h2>
  </header>

  <section class="sm:grid sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
    {#each codes as code}
      <BoxCode {...code} />
    {/each}
  </section>
</section>
