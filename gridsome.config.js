// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

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
