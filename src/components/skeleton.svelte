<script>
  export let w = '100%';
  export let h = '2rem';
</script>

<style>
  .skeleton {
    --baseColor: #edf2f7; /* gray-100 */
    --highlightColor: #f7fafc; /* gray-200 */

    @apply my-2;
    @apply block;
    @apply bg-no-repeat;
    background-color: var(--baseColor);
    background-image: linear-gradient(90deg, var(--baseColor), var(--highlightColor), var(--baseColor));
    background-size: 200px 100%;
    animation: loading-animation 1.2s ease-in-out infinite;
  }

  @keyframes loading-animation {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }
</style>

<div class="skeleton" style="width: {w}; height: {h};" />
