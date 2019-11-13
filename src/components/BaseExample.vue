<template>
  <Layout
    :theme="theme"
    :invert="invert"
  >
    <div
      class="w-full"
      style="height: 50%;"
    >
      <!-- eslint-disable next line vue/no-v-html -->
      <div
        v-if="language === 'js'"
        class="bg-gray-800 text-gray-200 w-full h-full rounded shadow flex
        justify-center items-center"
        v-html="
          `<pre class='h-full w-full flex items-center justify-center'><code>` +
            evaluated +
            `</code></pre>`
        "
      />
      <div
        v-else
        class="bg-gray-200 text-gray-800 w-full h-full rounded shadow"
        v-html="example"
      />
    </div>

    <div
      style="height: 50%;"
      class="relative h-full w-full pb-1"
    >
      <prism-editor
        v-model="example"
        :language="language"
        class="bg-gray-800 h-full text-xs rounded shadow overflow-y-scroll mt-1
      p-1 focus:outline-none"
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
import _ from 'lodash';

export default {
	components: {
		PrismEditor
	},
	props: {
		theme: {
			type: String,
			default: 'blue'
		},
		invert: {
			type: Boolean
		},
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
			example: this.initialData,
			evaluated: ''
		};
	},
	watch: {
		example() {
			this.debounced();
		}
	},
	created() {
		this.debounced = _.debounce(this.evaluate, 300);
	},
	methods: {
		evaluate() {
			try {
				this.evaluated = eval(this.example);
			} catch (error) {
				this.evaluated = 'Oops, something went wrong.';
			}
		}
	}
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}

pre {
  min-height: 100%;
}
</style>
