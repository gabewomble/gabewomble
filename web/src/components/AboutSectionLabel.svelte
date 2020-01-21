<script>
  export let header = '';
  export let subheader;
</script>

<style>
  .section-label {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .divider {
    background-color: var(--app-border);
    height: 1px;
    width: 150px;
  }

  h3 {
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    margin: 0 auto;
    text-align: center;
  }
</style>

<div class="section-label">
  <h3>{header}</h3>
  <div class="divider" />
  {#if subheader}
    <h3>{subheader}</h3>
  {/if}
</div>