<script>
  export let dataSymbol;
  export let dataClass;

  $: xlink = `#${dataSymbol}`;
</script>

<style>
  svg {
    display: block;
    overflow: visible;
  }
</style>

<div>
  <i data-fa-symbol={dataSymbol} class={dataClass} />
  <svg><use xlink:href={xlink} /></svg>
</div>