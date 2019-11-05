<template>
  <div>
    <component :is="slideData.slides[slideData.current]" />
  </div>
</template>

<script>
import slides from '~/data/slides.yaml';

export default {
	data() {
		return {
			slideData: {
				date: process.env.GRIDSOME_DATE,
				event: process.env.GRIDSOME_EVENT,
				current: 0,
				slides
			}
		};
	},
	provide() {
		return {
			slideData: this.slideData
		};
	},
	metaInfo() {
		return {
			title: this.slideData.event
		};
	},
	mounted() {
		document.addEventListener('keydown', e => {
			if (document.activeElement.contentEditable !== 'true') {
				if (e.key === ' ' || e.key === 'ArrowRight') {
					if (this.slideData.current < this.slideData.slides.length - 1) {
						this.slideData.current++;
					}
				} else if (e.key === 'ArrowLeft') {
					if (this.slideData.current > 0) {
						this.slideData.current--;
					}
				}
			}
		});
	}
};
</script>
