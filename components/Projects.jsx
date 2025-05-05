/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Project2 from '../public/projects/hello-here.png';
import Project1 from '../public/projects/repairdesk.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px]  mx-auto  px-2   py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>

        <h2 className='py-4'>What I've Built</h2>
        <div className='grid gap-8 md:grid-cols-2'>
          <ProjectItem
            title='RepairDesk - POS SaaS for Mobile Repair Shops'
            url='/repairdesk'
            skill='$3M+ ARR'
            image={Project1}
          />
          <ProjectItem
            title='Hello Here - SaaS Platform for Real Estate Agents'
            url='/hello-here'
            image={Project2}
            skill='$2M+ ARR'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
