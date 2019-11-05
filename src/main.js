// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import DefaultLayout from '~/layouts/Default.vue';
import ImageFull from '~/layouts/ImageFull.vue';
import 'tailwindcss/tailwind.css';
import VuePrismEditor from 'vue-prism-editor';
import 'vue-prism-editor/dist/VuePrismEditor.css'; // Import the styles
import 'animate.css'

export default function (Vue, {router, head, isClient}) {
	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout);
	Vue.component('ImageFull', ImageFull);
	Vue.component('prism-editor', VuePrismEditor);

	head.htmlAttrs = {
		class: 'text-2xl antialiased'
	};

	try {
		const requireComponent = require.context(
			// The relative path of the components folder
			'./layouts',
			// Whether or not to look in subfolders
			true,
			// The regular expression used to match base component filenames
			/[A-Z]\w+\.(vue|js|jsx)$/
		);

		requireComponent.keys().forEach(fileName => {
			// Get component config
			const componentConfig = requireComponent(fileName);

			// Get PascalCase name of component
			const componentName = upperFirst(
				camelCase(
					// Gets the file name regardless of folder depth
					fileName
						.split('/')
						.pop()
						.replace(/\.\w+$/, '')
				)
			);

			// Register component globally
			Vue.component(
				componentName,
				// Look for the component options on `.default`, which will
				// exist if the component was exported with `export default`,
				// otherwise fall back to module's root.
				componentConfig.default || componentConfig
			);
		});
	} catch (error) {
		console.error(error);
	}

	try {
		const requireComponent = require.context(
			// The relative path of the components folder
			'./pages',
			// Whether or not to look in subfolders
			true,
			// The regular expression used to match base component filenames
			/[A-Z]\w+\.(vue|js|jsx)$/
		);

		requireComponent.keys().forEach(fileName => {
			// Get component config
			const componentConfig = requireComponent(fileName);

			// Get PascalCase name of component
			const componentName = upperFirst(
				camelCase(
					// Gets the file name regardless of folder depth
					fileName
						.split('/')
						.pop()
						.replace(/\.\w+$/, '')
				)
			);

			// Register component globally
			Vue.component(
				componentName,
				// Look for the component options on `.default`, which will
				// exist if the component was exported with `export default`,
				// otherwise fall back to module's root.
				componentConfig.default || componentConfig
			);
		});
	} catch (error) {
		console.error(error);
	}
}
