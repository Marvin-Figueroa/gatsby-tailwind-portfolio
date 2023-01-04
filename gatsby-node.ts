import { GatsbyNode, graphql } from 'gatsby';
import { resolve } from 'path';

export const createPages: GatsbyNode['createPages'] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  const {
    data,
  }: {
    errors?: any;
    data?: { allProjectsJson: { edges: { node: { slug?: string } }[] } };
  } = await graphql(`
    query {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data?.allProjectsJson.edges.forEach((edge) => {
    const { slug } = edge.node;
    if (!slug) return;

    createPage({
      path: `/projects/${slug}/`,
      component: resolve(__dirname, './src/templates/projectDetail.tsx'),
      context: {
        slug,
      },
    });
  });
};
