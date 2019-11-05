<template>
  <div
    :class="[background, text]"
    class="p-4 h-screen flex flex-col w-full"
  >
    <BaseHeader />

    <transition
      name="fade"
      appear
    >
      <main class="flex justify-center items-center flex-1">
        <section>
          <slot name="left" />
        </section>

        <section class="ml-8 max-w-md">
          <slot name="right" />
        </section>
      </main>
    </transition>
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
		event() {
			return process.env.GRIDSOME_EVENT;
		},
		date() {
			return process.env.GRIDSOME_DATE;
		},
		background() {
			return this.invert ? `bg-${this.theme}-200` : `bg-${this.theme}-900`;
		},
		text() {
			return this.invert ? `text-${this.theme}-900` : `text-${this.theme}-200`;
		}
	}
};
</script>
