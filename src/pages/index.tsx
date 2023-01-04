import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout className='flex justify-between items-center'>
      <section>
        <h2>Marvin Figueroa - Frontend Developer</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          repellendus et incidunt dolore? Ex, magni officiis! Ducimus, at?
          Explicabo consequatur ea ullam nisi dolorem optio expedita eveniet,
          magni, veritatis, possimus nulla ipsum architecto magnam esse? Iusto
          asperiores vitae quae repudiandae. Ipsum sed ea asperiores neque nulla
          nemo pariatur dolorum quasi.
        </p>
      </section>
      <section>
        <StaticImage
          src='../images/undraw-programming.svg'
          alt='A developer banner'
        />
      </section>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
