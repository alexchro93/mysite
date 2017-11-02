module.exports = {
    siteMetadata: {
        social: [
            {
                iconName: 'twitter',
                url: 'https://twitter.com/alexchro93'
            },
            {
                iconName: 'instagram',
                url: 'https://www.instagram.com/alexchro93/'
            },
            {
                iconName: 'linkedin',
                url: 'https://www.linkedin.com/in/alexchro93/'
            },
            {
                iconName: 'github',
                url: 'https://github.com/alexchro93'
            },
            {
                iconName: 'envelope-o',
                url: 'mailto:alex@alexchro.info'
            },
        ],
    },
    plugins: [
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: `src/utils/typography.js`,
        },
      },
    ],
  }
