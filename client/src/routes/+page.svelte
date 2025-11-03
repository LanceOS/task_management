<script lang="ts">
  import Button from "../lib/components/Button.svelte"

</script>

<main class="py-12 px-4 max-w-7xl mx-auto flex flex-col justify-center space-y-12 min-h-screen">
  <section class="flex md:flex-row flex-col items-center gap-4 justify-between">
    <div class="space-y-12">
      <div class="space-y-2">
        <h1 class="text-7xl">Easy Manager</h1>
        <p class="text-lg">The easy way to create and store tasks!</p>
        <Button text={"Get Started"} class="bg-primary hover:bg-primary/90" />
      </div>
      <div>
        <h2 class="text-2xl">What you can do with our app!</h2>
        <ul class="list-disc space-y-2 pl-5">
          <li>
            <p>Create Task Folders</p>
          </li>
          <li>
            <p>Create Tasks</p>
          </li>
          <li>
            <p>Assign Dates</p>
          </li>
        </ul> 
      </div>
    </div>
    <img src="tasks.jpg" class="md:w-1/2 w-full rounded-sm"/>
  </section>
</main>
