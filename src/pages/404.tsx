import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className='container-xl flex flex-col justify-center  items-center gap-8 text-center'>
      <h1 className='text-4xl mt-6 font-bold text-red-500'>Page Not Found</h1>
      <StaticImage
        src='../images/undraw-page-not-found.svg'
        alt='A developer banner'
        className='max-w-lg'
      />
      <p className='text-2xl'>
        Sorry 😔, we couldn’t find what you were looking for.
      </p>
      <Link
        to='/'
        className='rounded-xl py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold'>
        Go Home
      </Link>
      .
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not Found</title>;
