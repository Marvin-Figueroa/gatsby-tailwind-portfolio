import * as React from 'react';
import { Link } from 'gatsby';
import { FaBars } from 'react-icons/fa';

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  return (
    <div className='lg:container lg:mx-auto font-sans'>
      <header className='flex items-center justify-between px-4 py-3'>
        <h1 className='text-green-400 font-bold text-xl'>Marvin@Figueroa</h1>
        <nav className='flex text-green-400'>
          <button className='text-green-400 hover:text-green-600 focus:text-green-600 md:hidden'>
            <FaBars />
          </button>
          <ul className='flex items-center justify-between gap-x-8 font-bold'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={className}>{children}</main>
      <footer className='text-center'>Marvin Figueroa &copy; 2023</footer>
    </div>
  );
};

export default Layout;
