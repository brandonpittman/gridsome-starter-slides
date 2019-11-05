<template>
  <Layout
    :theme="theme"
    :invert="invert"
  >
    <div class="relative w-full h-full pt-1 pb-2">
      <prism-editor
        v-model="example"
        :language="language"
        class="bg-gray-800 h-full text-xs rounded shadow overflow-y-scroll
    p-1 focus:outline-none"
      />

      <button
        @click="example = initialData"
        class="absolute bg-gray-600 bottom-0 leading-normal mr-2 mb-4 h-8 w-8 right-0 rounded-full text-gray-200 text-xs focus:outline-none"
      >
        &times;
      </button>
    </div>
  </Layout>
</template>

<script>
import 'prismjs';
import '@/assets/css/prism-night-owl.css';
import PrismEditor from 'vue-prism-editor';

export default {
	components: {
		PrismEditor
	},
	props: {
		initialData: {},
		theme: {},
		invert: {},
		language: {default: 'vue'}
	},
	data() {
		return {
			example: this.initialData
		};
	},
	computed: {
		eval() {
			return eval(this.example);
		}
	},
	mounted() {
		eval(this.initialData);
	}
};
</script>

<style>
::-webkit-scrollbar {
	display: none;
}

pre {
	min-height: 100%;
}
</style>
