<template>
  <transition name="fade">
    <router-view />
  </transition>
</template>

<static-query>
  query App {
    metadata {
      siteName
      siteDescription
    }
  }
</static-query>

<script>
export default {
	metaInfo() {
		return {
			title: this.$static.metadata.siteName,
			meta: [
				{
					key: 'description',
					name: 'description',
					content: this.$static.metadata.siteDescription

				}

			]

		};
	}

};
</script>

<style lang="postcss">
.fade-enter-active {
  transition: opacity 0.3s ease;
}

.fade-leave-active {
  transition: opacity 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

