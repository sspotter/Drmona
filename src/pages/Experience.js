import React from 'react';

const Experience = () => {
  return (
    <section id='experience' className='bg-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900'>
            Experience
          </h2>
        </div>
        <div className='mt-10'>
          {/* Experience content */}
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            {/* Experience item 1 */}
            <div className='bg-gray-100 rounded-lg p-6'>
              <h3 className='text-lg font-medium text-gray-900'>
                Web Developer at ABC Company
              </h3>
              <p className='mt-2 text-base text-gray-500'>
                Worked on developing and maintaining web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software.
              </p>
            </div>

            {/* Experience item 2 */}
            <div className='bg-gray-100 rounded-lg p-6'>
              <h3 className='text-lg font-medium text-gray-900'>
                Frontend Engineer Intern at XYZ Tech
              </h3>
              <p className='mt-2 text-base text-gray-500'>
                Assisted in building user interfaces for web applications using modern frontend technologies such as React, Redux, and CSS-in-JS.
              </p>
            </div>

            {/* Add more experience items as needed */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
