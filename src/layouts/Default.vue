<template>
  <div
    :class="[background, text]"
    class="p-4 h-screen flex flex-col w-full"
  >
    <BaseHeader />
    <main class="flex flex-col justify-center items-center flex-1 py-1">
      <slot />
    </main>
    <BaseFooter />
  </div>
</template>

<script>
export default {
	props: {
		theme: {
			type: String,
			default: 'blue'
		},
		invert: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		background() {
			return this.invert ? `bg-${this.theme}-200` : `bg-${this.theme}-800`;
		},
		text() {
			return this.invert ? `text-${this.theme}-800` : `text-${this.theme}-200`;
		}
	}
};
</script>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>
