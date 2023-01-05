import * as React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { SiRedux, SiTypescript } from 'react-icons/si';
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaSass,
} from 'react-icons/fa';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout className='container-xl flex flex-col-reverse md:flex-row md:justify-center gap-8 justify-center items-center p-8 md:h-max'>
      <section className='flex flex-col items-center gap-16 md:basis-3/5'>
        <div>
          <h2 className='text-4xl font-bold text-gray-600 mb-2 text-center'>
            Marvin Figueroa
          </h2>
          <h3 className='text-2xl font-semibold text-center text-red-400'>
            Frontend Web Developer
          </h3>
        </div>
        <p className='text-2xl'>
          I am a frontend web developer with a degree in Computer Systems
          Engineering from The University of El Salvador, mainly focused in
          working with React and its JavaScript/TypeScript ecosystem. With
          experience in the following technologies:
        </p>
        <div className='flex gap-6 items-center text-green-500'>
          <FaHtml5 title='HTML' className='text-3xl' />
          <FaCss3Alt title='CSS' className='text-3xl' />
          <FaSass title='SASS' className='text-3xl' />
          <FaJsSquare title='JavaScript' className='text-3xl' />
          <FaReact title='React' className='text-3xl' />
          <SiRedux title='Redux' className='text-3xl' />
          <SiTypescript title='TypeScript' className='text-3xl' />
          <FaGitAlt title='Git' className='text-3xl' />
        </div>
        <Link
          to='/projects'
          className='px-4 py-2 block text-center  bg-red-500 text-white font-semibold text-lg rounded-lg hover:bg-red-600 md:inline'>
          My Portfolio Projects
        </Link>
      </section>
      <section className='md:grid mb-8 md:basis-2/5'>
        <StaticImage
          src='../images/undraw-programming.svg'
          alt='A developer banner'
          className='basis-9/12'
        />
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
