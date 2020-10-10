<script>
  export let url;
  export let type;
  export let title;
  export let description;
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
</style>

<a href={url} target="_blank" rel="noopener noreferrer" class="box md:w-1/2 lg:w-1/3">
  <small class="uppercase">{type}</small>
  <h3 class="heading">{title}</h3>
  <p class="paragraph">{description}</p>
</a>
