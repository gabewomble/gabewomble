<style>
  .about-profile-pic {
    border: 1px solid var(--app-border);
    border-radius: 50%;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25);
    height: 150px;
    margin-bottom: 20px;
    width: 150px;
  }

  .about-profile-pic :global(img) {
		border-radius: 50%;
		height: auto;
		width: 100%;
	}
</style>

<div class="about-profile-pic">
  <slot />
</div>