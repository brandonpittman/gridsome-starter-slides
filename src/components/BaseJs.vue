<template>
  <Layout>
    <div class="relative w-full h-full pt-1 pb-2">
      <prism-editor
        v-model="example"
        class="bg-gray-800 h-full text-xs rounded shadow overflow-y-scroll mt-1
    p-1 focus:outline-none"
        language="js"
      />

      <button
        class="absolute bg-gray-600 bottom-0 leading-normal mr-2 mb-2 h-8 w-8 right-0 rounded-full text-gray-200 text-xs focus:outline-none"
        @click="example = initialData"
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
	props: ['initialData'],
	data() {
		return {
			example: this.initialData
		};
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
