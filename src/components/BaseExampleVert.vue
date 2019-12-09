<template>
  <div class="flex h-full w-full -mx-4">
    <div class="relative h-full w-1/2 px-4 py-16">
      <prism-editor
        v-model="example"
        :language="language"
        :line-numbers="true"
        class="bg-gray-800 h-full rounded shadow overflow-y-scroll focus:outline-none"
      />

      <button
        @click="example = initialData"
        class="absolute bg-gray-600 bottom-0 leading-normal mr-8 mb-20 h-8 w-8 right-0 rounded-full text-gray-200 text-xs focus:outline-none"
      >
        &times;
      </button>
    </div>

    <div class="w-1/2 py-16">
      <!-- eslint-disable next line vue/no-v-html -->
      <div
        v-if="language === 'js'"
        v-html="
          `<pre class='h-full w-full flex items-center justify-center'><code>` +
            evaluated +
            `</code></pre>`
        "
        class="bg-gray-800 text-gray-200 w-full h-full rounded shadow flex
				justify-center items-center"
      />
      <div
        v-else
        v-html="example"
        class="bg-gray-200 text-gray-800 w-full h-full rounded shadow"
      />
    </div>
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
			example: this.initialData
		};
	},
	computed: {
		evaluated() {
			// eslint-disable-next-line no-eval
			const result = eval(this.example);
			if (!result) {
				return 'Please return a valid value.';
			}

			return result;
		}
	},
	methods: {
		evaluate() {
			try {
			// eslint-disable-next-line no-eval
				this.evaluated = eval(this.example);
			} catch (e) {
				this.evaluated = e;
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
