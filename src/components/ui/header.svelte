<script>
  const links = [
    { href: '/belajar', text: 'Belajar' },
    { href: '/kode', text: 'Kode' },
    { href: '/meetup', text: 'Meetup' },
    { href: '/ajukan-topik', text: 'Ajukan Topik' }
  ];
</script>

<header class="shadow-md bg-white">
  <nav class="container max-w-full md:flex md:flex-row md:justify-between">
    <a href="/" class="text-center text-2xl block p-4">Svelte ID</a>

    <ul class="list-none flex justify-between items-center">
      {#each links as { href, text }}
        <li class="m-4"><a {href}>{text}</a></li>
      {/each}
    </ul>
  </nav>
</header>
