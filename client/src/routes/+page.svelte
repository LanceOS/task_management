<script lang="ts">
  import Button from "../lib/components/Button.svelte"

</script>

<main class="py-24 px-4 max-w-7xl mx-auto space-y-12 min-h-screen">
  <section class="space-y-2">
    <h1 class="text-6xl">Easy Manager</h1>
    <p class="text-lg">The easy way to create and store tasks!</p>
    <Button text={"Get Started"} type="primary" /> 
  </section>


  <section class="border-2 md:w-1/3 flex gap-4 md:flex-row h-fit flex-col justify-between">
    <div class="rounded-sm p-2 border-2 w-full">
      <h2>Task Folders</h2>
    </div>
    <div class="rounded-sm p-2 border-2 w-full">
      <h2>Tasks</h2>
    </div>
  </section>
</main>
