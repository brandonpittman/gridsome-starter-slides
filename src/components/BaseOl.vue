<template>
  <ol class="py-4 w-full mx-auto max-w-sm">
    <slot />
  </ol>
</template>

<style scoped>
	li {
		@apply text-xl mt-4 list-decimal;
	}
</style>
