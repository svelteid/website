<script>
  import Illustration from '../../components/images/ajukan-topik.svg';
</script>

<style>
  .wrapper {
    @apply p-4;
  }
  @media (min-width: 768px) {
    .illustration {
      @apply sticky;
      top: 40px;
    }
  }
</style>

<section class="wrapper prose prose-lg min-h-screen mt-6">
  <div class="md:flex">
    <div class="xs:w-full xs:mb-6 md:w-1/2 md:mr-12">
      <div class="illustration">
        <Illustration />
      </div>
    </div>
    <div class="xs:w-full md:w-1/2">
      <slot />
    </div>
  </div>
</section>
