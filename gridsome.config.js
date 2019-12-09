process.env.GRIDSOME_DATE = 'DATE';
process.env.GRIDSOME_EVENT = 'TITLE';

module.exports = {
	siteName: process.env.GRIDSOME_EVENT,
	transformers: {
		remark: {
			externalLinksTarget: '_blank',
			externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
			anchorClassName: 'icon icon-link',
			plugins: [
				// ...global plugins
			]
		}
	},

	templates: {
	},

	plugins: [
		{
			use: '@gridsome/vue-remark',
			options: {
				typeName: 'Slide',
				baseDir: './slides',
				pathPrefix: '/slides',
				template: './src/templates/Slide.vue'
			}
		},
		{
			use: 'gridsome-plugin-tailwindcss',
			options: {
				shouldPurge: false
			}
		},
		{
			use: 'gridsome-plugin-svg'
		},
		{
			use: 'gridsome-plugin-base-components'
		}
	]
};
