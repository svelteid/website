<style>
  .wrapper {
    @apply px-4;
    @apply py-2;
    @apply max-w-none;
  }
  @media (min-width: 768px) {
    .wrapper {
      @apply px-20;
    }
    .illustration {
      @apply sticky;
      top: 70px;
    }
  }
</style>

<section class="wrapper prose prose-lg min-h-screen mt-6">
  <div class="md:flex">
    <div class="xs:w-full xs:mb-6 md:w-1/2 md:mr-12">
      <img src="/images/ajukan-topik.jpg" alt="illustration" class="illustration" />
    </div>
    <div class="xs:w-full md:w-1/2">
      <slot />
    </div>
  </div>
</section>
