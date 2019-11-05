<template>
  <h1
    :class="[size]"
    class="font-bold leading-tight"
  >
    <slot />
  </h1>
</template>

<script>
export default {
	props: {
		size: {
			type: String,
			default: 'text-6xl'
		}
	}
};
</script>
