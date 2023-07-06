import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {

  return (
    <section id='home' className='w-full pt-10 pb-20 flex flex-col lgl:flex-row gap-10 xl:gap-0 items-center border-b-[1px] border-b-black'>
      <LeftBanner />
      <RightBanner />
    </section>
  )
}

export default Banner
