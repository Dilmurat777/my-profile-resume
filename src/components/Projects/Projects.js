import React from 'react';
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';

import {projectOne, projectTwo, projectThree } from '../../assets/index';



const Projects = () => {
  return (
    <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='flex justify-center text-center'>
      <Title title='VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK' des='My Projects' />
      </div>

      <div className='grid grid-cols-3 gap-14'>
        <ProjectsCard
        title='SOCIAL MEDIA CLONE'
        des='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eius debitis cumque cum aperiam, sit nulla, quod dolorum molestias voluptatum necessitatibus.'
        src={projectOne}
        />
        <ProjectsCard
        title='SOCIAL MEDIA CLONE'
        des='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eius debitis cumque cum aperiam, sit nulla, quod dolorum molestias voluptatum necessitatibus.'
        src={projectTwo}
        />
        <ProjectsCard
        title='SOCIAL MEDIA CLONE'
        des='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eius debitis cumque cum aperiam, sit nulla, quod dolorum molestias voluptatum necessitatibus.'
        src={projectThree}
        />
            <ProjectsCard
        title='SOCIAL MEDIA CLONE'
        des='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eius debitis cumque cum aperiam, sit nulla, quod dolorum molestias voluptatum necessitatibus.'
        src={projectOne}
        />
        <ProjectsCard
        title='SOCIAL MEDIA CLONE'
        des='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eius debitis cumque cum aperiam, sit nulla, quod dolorum molestias voluptatum necessitatibus.'
        src={projectTwo}
        />
        <ProjectsCard
        title='SOCIAL MEDIA CLONE'
        des='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi eius debitis cumque cum aperiam, sit nulla, quod dolorum molestias voluptatum necessitatibus.'
        src={projectThree}
        />
      </div>
     
      
    </section>
  )
}

export default Projects
