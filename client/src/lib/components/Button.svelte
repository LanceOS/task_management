<script lang="ts">
  type color = "primary" | "info" | "error" | "secondary" | "neutral" | "warning"

  const { text, action = null, path = null, type = "primary" } = $props<{
    text: string,
    action: "navigate" | null,
    path: string | null
    type: color
  }>()
  
  

</script>

<button type="button" aria-label={text}
  class={`bg-${type} rounded-sm hover:px-5 duration-200 cursor-pointer px-4 py-2`}
>
  {text}
</button>
