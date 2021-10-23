<script>
  const links = [
    {
      name: 'email',
      url: 'mailto:mattrafalko@gmail.com'
    },
    {
      name: 'github',
      url: 'https://www.github.com/mattrafalko'
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mrafalko'
    },
  ]
</script>


<div class="mx-auto max-w-5xl font-lato text-red-300 px-10 md:px-0 ">
  
<div class="flex flex-col place-content-center h-screen">
  <div>
    <h1 class="text-4xl font-black italic mb-16">matt rafalko</h1>

    <ul class="space-y-4 w-24">
      {#each links as link}
<li class="font-semibold text-xl hover:text-red-200"><a href={link.url} target="_blank">{link.name}</a></li>
      {/each}
    </ul>
  </div>
</div>
</div>

