<template>
  <div class="relative mx-auto p-8 w-full max-w-2xl">
    <prism-editor
      v-model="example"
      :language="language"
      :line-numbers="true"
      class="bg-gray-800 h-full rounded shadow overflow-y-scroll p-1 focus:outline-none"
    />

    <button
      class="absolute bg-gray-600 bottom-0 leading-normal mr-12 mb-12 h-8 w-8 right-0 rounded-full text-gray-200 text-xs focus:outline-none"
      @click="example = initialData"
    >
      &times;
    </button>
  </div>
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
		initialData: {
			type: String,
			default: ''
		},
		language: {
			default: 'vue',
			type: String
		}
	},
	data() {
		return {
			example: this.initialData
		};
	},
	computed: {
		eval() {
			// eslint-disable-next-line
			return eval(this.example); 
		}
	},
	mounted() {
		if (this.language === 'javascript') {
			// eslint-disable-next-line
			eval(this.initialData);
		}
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
