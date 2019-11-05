<template>
  <footer class="flex justify-between text-xs w-full">
    <p class="w-1/3">
      {{ date }}
    </p>
    <div class="w-1/3 flex justify-around">
      <button
        @click="goBack()"
        class="focus:outline-none"
      >
        <span v-show="slideData.current > 0">
          &larr;
        </span>
      </button>
      <button
        @click="goForward()"
        class="focus:outline-none"
      >
        <span v-show="slideData.current < slideData.slides.length - 1">
          &rarr;
        </span>
      </button>
    </div>
    <p class="w-1/3 text-right">
      {{ slideInfo }}
    </p>
  </footer>
</template>

<script>
export default {
	inject: {
		slideData: {
			default: {
				current: 0,
				slides: []
			}
		}
	},
	computed: {
		date() {
			return process.env.GRIDSOME_DATE;
		},
		slideInfo() {
			return `${this.slideData.current + 1} / ${this.slideData.slides.length}`;
		}
	},
	methods: {
		goBack() {
			if (this.slideData.current > 0) {
				this.slideData.current--;
			}
		},
		goForward() {
			if (this.slideData.current < this.slideData.slides.length - 1) {
				this.slideData.current++;
			}
		}
	}
};
</script>
