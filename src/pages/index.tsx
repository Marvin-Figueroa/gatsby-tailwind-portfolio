import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h2>Marvin Figueroa - Frontend Developer</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        repellendus et incidunt dolore? Ex, magni officiis! Ducimus, at?
        Explicabo consequatur ea ullam nisi dolorem optio expedita eveniet,
        magni, veritatis, possimus nulla ipsum architecto magnam esse? Iusto
        asperiores vitae quae repudiandae. Ipsum sed ea asperiores neque nulla
        nemo pariatur dolorum quasi.
      </p>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
