<template>
  <header class="text-xs">
    {{ event }}
  </header>
</template>

<script>
export default {
	computed: {
		event() {
			return process.env.GRIDSOME_EVENT;
		}
	}
};
</script>
