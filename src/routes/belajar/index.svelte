<script>
  import BoxLearning from '~/components/ui/box-learning.svelte';
  import learnings from './_data.yml';
</script>

<section class="container prose prose-lg bg-gray-100 min-h-screen py-10 mt-1">
  <header class="text-center">
    <span class="uppercase">Mau Belajar Svelte?</span>
    <h2 class="heading">Materi Pembelajaran</h2>
  </header>

  <section class="grid grid-flow-row gap-4 md:grid-cols-2 lg:grid-cols-3">
    {#each learnings as learning}
      <BoxLearning {...learning} />
    {/each}
  </section>
</section>
