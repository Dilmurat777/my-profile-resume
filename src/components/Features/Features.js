import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { FaMobile, FaGlobe, FaBars } from 'react-icons/fa';
import { SiProgress, SiAntdesign } from 'react-icons/si';
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
      <Title title='Features' des='What I Do' />
      <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 lgl:gap-20'>
        <Card
          title='SEO Optimisation'
          dec='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore, maiores obcaecati quod accusantium porro illum numquam'
          icon={<FaBars />}
        />
        <Card
          title='SEO Optimisation'
          dec='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore, maiores obcaecati quod accusantium porro illum numquam'
          icon={<AiFillAppstore />}
        />
        <Card
          title='SEO Optimisation'
          dec='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore, maiores obcaecati quod accusantium porro illum numquam'
          icon={<SiProgress />}
        />
        <Card
          title='Mobile Development'
          dec='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore, maiores obcaecati quod accusantium porro illum numquam'
          icon={<FaMobile />}
        />
        <Card
          title='Ux Design'
          dec='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore, maiores obcaecati quod accusantium porro illum numquam'
          icon={<SiAntdesign />}
        />
        <Card
          title='Hostiong Websites'
          dec='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolore, maiores obcaecati quod accusantium porro illum numquam'
          icon={<FaGlobe />}
        />

      </div>
    </section>
  )
}

export default Features
