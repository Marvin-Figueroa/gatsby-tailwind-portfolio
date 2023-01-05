import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface ProjectDetailProps {
  data: {
    projectsJson: {
      title: string;
      description: string;
      demo: string;
      stack: string[];
      images: { childrenImageSharp: { gatsbyImageData: IGatsbyImageData }[] }[];
    };
  };
}

export default function ProjectDetail({ data }: ProjectDetailProps) {
  const project = data.projectsJson;
  return (
    <Layout className='container-xl flex flex-col items-center gap-8 px-8 '>
      <h1 className='font-semibold text-4xl text-red-500 text-center mt-6'>
        {project.title}
      </h1>
      <p className='text-xl'>{project.description}</p>
      <section>
        <h2 className='text-center mb-4 font-semibold text-2xl'>
          Project's Screenshots
        </h2>
        <div className='grid gap-12 justify-items-center'>
          {project.images.map((image) => (
            <div className='w-9/12'>
              <GatsbyImage
                image={image.childrenImageSharp[0].gatsbyImageData}
                alt='project screenshot'
              />
            </div>
          ))}
        </div>
      </section>
      <div>
        <h2 className='text-center mb-4 font-semibold text-2xl'>Built With:</h2>
        <ul className='text-center'>
          {project.stack.map((tech) => (
            <li className='font-semibold'>{tech}</li>
          ))}
        </ul>
      </div>
      <a
        href={project.demo}
        className='font-semibold rounded-lg py-2 px-4 bg-green-400 hover:bg-green-500 text-white'>
        Live Demo
      </a>
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      stack
      images {
        childrenImageSharp {
          gatsbyImageData
        }
      }
      demo
    }
  }
`;
