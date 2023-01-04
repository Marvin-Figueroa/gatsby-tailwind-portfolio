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
    <Layout>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <section>
        <h2>Project's Screenshots</h2>
        <div className='grid auto-cols-fr'>
          {project.images.map((image) => (
            <GatsbyImage
              image={image.childrenImageSharp[0].gatsbyImageData}
              alt='project screenshot'
            />
          ))}
        </div>
      </section>
      <h2>Built With:</h2>
      <ul>
        {project.stack.map((tech) => (
          <li>{tech}</li>
        ))}
      </ul>
      <a href={project.demo}>Live Demo</a>
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
