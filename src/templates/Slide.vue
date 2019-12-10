<template>
  <Layout>
    <h1 v-if="$page.slide.title">
      {{ $page.slide.title }}
    </h1>
    <VueRemarkContent />
  </Layout>
</template>

<script>
import '@/assets/css/prism-night-owl.css';
export default {
	computed: {
		prevSlide() {
			const allSlides = this.$page.allSlide.edges;
			const current = allSlides.find(edge => edge.node.path === this.$page.slide.path);

			if (current.previous) {
				return current.previous.path;
			}

			return null;
		},
		nextSlide() {
			const allSlides = this.$page.allSlide.edges;
			const current = allSlides.find(edge => edge.node.path === this.$page.slide.path);

			if (current.next) {
				return current.next.path;
			}

			return null;
		}
	}
};
</script>

<page-query>
  query Slide($id: ID!) {
    slide(id: $id) {
      title
      order
      path
    }
    allSlide(sortBy: "order", order: ASC) {
      edges {
        node {
          title
          path
        }
        previous {
          path
        }
        next {
          path
        }
      }
    }
  }
</page-query>

<style scoped>
>>> pre {
  @apply w-full rounded-lg shadow-lg bg-gray-800;
}
</style>
