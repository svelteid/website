<script>
  import Header from '~/components/ui/header.svelte';
  import Footer from '~/components/ui/footer.svelte';
</script>

<Header />

<main>
  <slot />
</main>

<Footer />
