<script>
  export let label;
  export let value;
</script>

<style>
  p {
    display: flex;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    margin: 0 auto;
  }

  span {
    margin-left: 8px;
  }
  
  .icon :global(svg > path) {
    fill: var(--app-text);
  }
</style>

<p>
  {`${label}: ${value}`}
  <span class="icon"><slot /></span>
</p>