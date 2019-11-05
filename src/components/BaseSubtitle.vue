<template>
  <p
    :class="[size]"
    class="font-base leading-tight mt-8"
  >
    <slot />
  </p>
</template>

<script>
export default {
	props: {
		size: {
			type: String,
			default: 'text-2xl'
		}
	}
};
</script>
