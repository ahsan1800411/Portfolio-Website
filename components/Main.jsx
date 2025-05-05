import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const Main = () => {
  return (
    <div id='home' className='w-full h-[50%] pt-60 text-center'>
      <div className='max-w-[1240px] w-full h-full flex justify-center items-center p-2 mx-auto'>
        <div>
          <p className='text-sm font-semibold tracking-widest text-gray-600 uppercase'>
            Let&apos;s build something together
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&apos;m <span className='text-[#5651e5]'>Ahsan</span>
          </h1>
          <h1 className='py-4 text-gray-700'>A Full-Stack Developer</h1>
          <p className='py-4 max-w-[70%] text-gray-600 m-auto font-semibold'>
            Software Engineer helping SaaS startups scale from{' '}
            <span className='text-[#5651e5] text-xl font-bold'>
              0 to $3M+ ARR
            </span>{' '}
            with modern Full Stack Engineering, DevOps, and Cloud Architecture.
            <span className='text-[#5651e5] text-xl font-bold'> 4+ YOE </span>
            building high-performing platforms used globally across real estate,
            retail, and enterprise clients.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/ahsan-mumtaz/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <FaLinkedinIn color='blue' />
              </div>
            </a>
            <a
              href='https://github.com/ahsan1800411'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <FaGithub color='black' />
              </div>
            </a>

            <a
              href='mailto:ahsanmumtaz008976@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='p-6 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110'>
                <AiOutlineMail color='black' />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
