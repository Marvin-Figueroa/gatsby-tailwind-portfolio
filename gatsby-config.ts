import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Marvin Figueroa | Portfolio`,
    siteUrl: `https://www.yourdomain.tld`,
    description: 'Frontend Web Developer Portfolio',
    copyright: 'Marvin Figueroa - Frontend Dev - 2023',
  },

  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `data`,
        path: `./data`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};

export default config;
