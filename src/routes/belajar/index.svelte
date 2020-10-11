<script>
  import BoxLearning from '../../components/box-learning.svelte';
  import learnings from './_data.yml';
</script>

<style>
  .heading {
    @apply mt-0;
  }
</style>

<section class="wrapper prose prose-lg bg-gray-100">
  <header class="text-center">
    <h6 class="uppercase">Mau Belajar Svelte?</h6>
    <h2 class="heading">Materi Pembelajaran</h2>
  </header>

  <section class="sm:grid sm:grid-flow-row sm:gap-4 sm:grid-cols-3">
    {#each learnings as learning}
      <BoxLearning {...learning} />
    {/each}
  </section>
</section>
