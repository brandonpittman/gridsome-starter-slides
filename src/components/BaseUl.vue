<template>
  <ul class="py-4 mx-auto">
    <slot />
  </ul>
</template>

<style scoped>
	li {
		@apply text-xl mt-4 list-disc;
	}
</style>
