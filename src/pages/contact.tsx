import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkedAlt,
  FaPhoneSquareAlt,
} from 'react-icons/fa';

const Contact: React.FC<PageProps> = () => {
  return (
    <Layout className='px-8 container-xl flex flex-col gap-12 md:gap-24'>
      <h2 className='text-4xl text-red-400 font-semibold mt-12 text-center'>
        Let's Get In Touch
      </h2>
      <div className='grid gap-12 md:grid-cols-2 justify-items-center md:place-items-center'>
        <section className='align-center'>
          <div className='flex flex-col  gap-8'>
            <div className='flex gap-x-4'>
              <FaMapMarkedAlt
                className='text-green-500 h-auto text-4xl'
                title='Location'
              />
              <div className='flex flex-col text-left'>
                <span className='text-red-500 font-semibold'>LOCATION: </span>
                <span className='font-semibold text-gray-600'>
                  Santa Ana, El Salvador
                </span>
              </div>
            </div>
            <div className='flex gap-x-4'>
              <FaEnvelope
                className='text-green-500 h-auto text-4xl'
                title='Email'
              />
              <div className='flex flex-col text-left'>
                <span className='text-red-500 font-semibold'>EMAIL: </span>
                <a
                  className='font-semibold text-gray-600'
                  href='mailto:marvinfigueroa2012@gmail.com'>
                  marvinfigueroa2012@gmail.com
                </a>
              </div>
            </div>
            <div className='flex gap-x-4'>
              <FaPhoneSquareAlt
                className='text-green-500 h-auto text-4xl'
                title='Phone'
              />
              <div className='flex flex-col text-left'>
                <span className='text-red-500 font-semibold'>PHONE: </span>
                <span className='font-semibold text-gray-600'>
                  (+503) 7809-5956
                </span>
              </div>
            </div>
            <div className='flex gap-x-4'>
              <FaLinkedin
                className='text-green-500 h-auto text-4xl'
                title='Linkedin'
              />
              <div className='flex flex-col text-left'>
                <span className='text-red-500 font-semibold'>LINKEDIN: </span>
                <a
                  className='font-semibold text-gray-600'
                  href='https://www.linkedin.com/in/marvin-figueroa/'>
                  Marvin Figueroa
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='grid place-items-center md:place-items-start'>
          <StaticImage
            src='../images/undraw-contact.svg'
            alt='Ways to contact banner'
            className='w-full md:w-9/12'
          />
        </section>
      </div>
    </Layout>
  );
};

export default Contact;

export const Head: HeadFC = () => <title>Contact</title>;
