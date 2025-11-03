<script lang="ts">

  const { text, action = null, path = null, ...props } = $props<{
    text: string,
    action: "navigate" | null,
    path: string | null,
  }>()
  
  

</script>

<button type="button" aria-label={text}
  class={["rounded-sm font-semibold text-primary-content hover:px-5 duration-200 cursor-pointer px-4 py-2", props.class]}
>
  {text}
</button>
