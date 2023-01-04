import { graphql, Link } from 'gatsby';
import React, { useState } from 'react';
import Layout from '../../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { IGatsbyImageData } from 'gatsby-plugin-image';

interface DataShape {
  data: {
    allProjectsJson: {
      nodes: {
        title: string;
        slug: string;
        id: string;
        stack: string[];
        thumbnail: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
      }[];
      uniqueStackTags: string[];
    };
  };
}

export default function Projects({ data }: DataShape) {
  const tags = ['All', ...data.allProjectsJson.uniqueStackTags];
  const projects = data.allProjectsJson.nodes;
  const [filteredProjects, setFilteredProjects] = useState(
    () => data.allProjectsJson.nodes
  );
  const [selectedTag, setSelectedTag] = useState(() =>
    tags.length > 0 ? tags[0] : 'All'
  );

  function handleTagSelection(tag: string) {
    setSelectedTag(tag);
    if (tag === 'All') {
      setFilteredProjects([...projects]);
    } else {
      setFilteredProjects(
        [...projects].filter((project) => project.stack.includes(tag))
      );
    }
  }

  return (
    <Layout>
      <h2>Projects & Websites I've created</h2>
      <div className='flex justify-center items-center flex-wrap gap-3'>
        {tags.map((tag, index) => (
          <button
            className={`font-bold py-2 px-4 rounded ${
              tag === selectedTag
                ? 'bg-red-500 hover:bg-red-700 text-white'
                : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-400'
            }`}
            type='button'
            key={index}
            onClick={() => handleTagSelection(tag)}>
            {tag}
          </button>
        ))}
      </div>
      <section>
        {filteredProjects.map((project) => (
          <Link key={project.id} to={`/projects/${project.slug}`}>
            <GatsbyImage
              image={project.thumbnail.childImageSharp.gatsbyImageData}
              alt='project thumbnail'
            />
            <h3>{project.title}</h3>
            <div>
              {project.stack.map((item) => (
                <span>{item}</span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    allProjectsJson(sort: { title: DESC }) {
      nodes {
        title
        slug
        id
        stack
        thumbnail {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      uniqueStackTags: distinct(field: { stack: SELECT })
    }
  }
`;

// query allUniqueTags {
//   allProjectsJson {
//     distinct(field: {stack: SELECT})
//   }
// }

// query ProjectsByTag($tag: [String!]) {
//   allProjectsJson(filter: {stack: {in: $tag}}) {
//     nodes {
//       title
//         slug
//         id
//         stack
//         thumbnail {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//     }
//   }
// }
