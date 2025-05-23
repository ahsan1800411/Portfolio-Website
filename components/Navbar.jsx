import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Logo from '../public/projects/log.jpg';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');

  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/repairdesk' || router.asPath === '/hello-here') {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed shadow-xl z-[100] w-full h-20'
          : 'fixed  z-[100] w-full h-20'
      }
    >
      <div className='flex items-center justify-between w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image
            alt='Logo'
            src={Logo}
            width='125'
            height='50'
            className='cursor-pointer'
          />
        </Link>
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Projects
              </li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Contact
              </li>
            </Link>
          </ul>
          <div className='md:hidden' onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed top-0 left-0 w-[75%] sm:[60%] md:[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed top-0 left-[-100%]  p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex items-center justify-between w-full'>
              <Link href='/'>
                <Image
                  alt='Logo'
                  src='/../public/assets/log.png'
                  width='87'
                  height='35'
                />
              </Link>

              <div
                className='p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400'
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className='my-4 border-b border-gray-300'>
              <p className='w-[85%] md:w-[90%] font-bold'>
                Let&apos;s builds something legendary together
              </p>
            </div>
          </div>

          <div className='flex flex-col py-4'>
            <ul
              style={{ color: `${linkColor}` }}
              className='font-semibold uppercase'
            >
              <Link href='/'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Projects
                </li>
              </Link>
              <Link href='/#contact'>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40 '>
              <p className='font-bold tracking-widest uppercase text-[#5651e5] '>
                Let&apos;s Connect
              </p>
              <div className='flex items-center justify-between w-full my-4 sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/ahsan-mumtaz/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                    <FaLinkedinIn color='blue' />
                  </div>
                </a>
                <a
                  href='https://github.com/ahsan1800411'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                    <FaGithub color='black' />
                  </div>
                </a>

                <a
                  href='mailto:ahsanmumtaz008976@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                    <AiOutlineMail color='black' />
                  </div>
                </a>

                <div className='p-3 duration-500 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105'>
                  <BsFillPersonLinesFill color='black' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
