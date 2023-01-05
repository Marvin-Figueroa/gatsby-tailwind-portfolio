import * as React from 'react';
import { Link } from 'gatsby';
import { FaBars, FaLeaf, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

interface LayoutProps {
  children?: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <>
      <header className='bg-red-400 text-white'>
        <nav className='container-xl  sm:flex sm:items-center sm:justify-between sm:pr-8'>
          <div className='flex items-center justify-between px-8 py-2'>
            <FaLeaf
              className='text-4xl text-white hover:text-gray-600'
              title='Yes, just a leaf'
            />
            <button
              onClick={() =>
                setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed)
              }
              type='button'
              className='sm:hidden text-white focus:text-gray-600 focus:outline-none'>
              <span className='sr-only'>Open main menu</span>
              {isCollapsed ? (
                <FaBars className='text-3xl text-white hover:text-gray-600' />
              ) : (
                <FaTimes className='text-3xl text-white hover:text-gray-600' />
              )}
            </button>
          </div>
          <div
            className={`${
              isCollapsed ? 'hidden' : 'block'
            } sm:block text-center bg-gray-500 sm:bg-transparent`}>
            <ul className='sm:flex sm:gap-x-4 sm:items-center'>
              <li>
                <Link
                  to='/'
                  className='font-semibold py-2 block sm:inline sm:py-0 text-lg hover:bg-gray-600 sm:hover:text-gray-600 sm:hover:bg-transparent border-b-2 sm:border-b-0'>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/projects'
                  className='font-semibold   block py-2 text-lg hover:bg-gray-600 sm:hover:text-gray-600 sm:hover:bg-transparent border-b-2 sm:border-b-0'>
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='font-semibold  block py-2 text-lg hover:bg-gray-600 sm:hover:text-gray-600 sm:hover:bg-transparent border-b-2 sm:border-b-0'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main className={className}>{children}</main>
      <footer className='text-center font-bold py-4'>
        Marvin Figueroa &copy; 2023
      </footer>
    </>
  );
};

export default Layout;
