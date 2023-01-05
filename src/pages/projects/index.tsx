import { graphql, HeadFC, Link } from 'gatsby';
import React, { useState } from 'react';
import Layout from '../../components/layout';
import { GatsbyImage } from 'gatsby-plugin-image';
import type { IGatsbyImageData } from 'gatsby-plugin-image';
import { FaCss3Alt, FaHtml5, FaReact, FaSass } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiTypescript } from 'react-icons/si';

const icons = {
  React: <FaReact title='React' />,
  JavaScript: <SiJavascript title='JavaScript' />,
  CSS: <FaCss3Alt title='Cascading Style Sheets' />,
  HTML: <FaHtml5 title='HTML5' />,
  SASS: <FaSass title='SASS' />,
  Redux: <SiRedux title='Redux' />,
  TypeScript: <SiTypescript title='TypeScript' />,
};

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
    <Layout className='flex flex-col gap-8 items-center p-8 text-center'>
      <h2 className='text-red-400 text-2xl font-bold'>
        Some of the Projects & Websites I've created
      </h2>
      <div className='flex justify-center items-center flex-wrap gap-3'>
        {tags.map((tag, index) => (
          <button
            className={`font-bold py-2 px-4 rounded ${
              tag === selectedTag
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-400'
            }`}
            type='button'
            key={index}
            onClick={() => handleTagSelection(tag)}>
            {tag}
          </button>
        ))}
      </div>
      <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {filteredProjects.map((project) => (
          <article className='max-w-sm rounded overflow-hidden shadow-2xl'>
            <Link key={project.id} to={`/projects/${project.slug}`}>
              <GatsbyImage
                image={project.thumbnail.childImageSharp.gatsbyImageData}
                alt='project thumbnail'
                className='w-full h-48 object-cover'
              />
              <div className='px-6 py-4'>
                <h3 className='font-bold text-green-500 text-xl mb-2'>
                  {project.title}
                </h3>
              </div>
              <div className='px-6 pt-2 pb-2'>
                {project.stack.map((item) => (
                  <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-2xl mr-2 mb-2'>
                    {icons[item]}
                  </span>
                ))}
              </div>
            </Link>
          </article>
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

export const Head: HeadFC = () => <title>Projects</title>;
