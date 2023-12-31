import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import Experience from './Experience';

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, seSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);
  const [achievementData, setAchievementData] = useState(false);
  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
      <div className='justify-center text-center'>
        <Title title='7+ years of experience' des='My Resume' />
      </div>

      <div>
        <ul className='grid grid-cols-1 sml:grid-cols-2 mdl:grid-cols-4'>
          <li onClick={() => setEducationData(true) & seSkillData(false) & setExperienceData(false) & setAchievementData(false)} className={`${educationData ? 'border-designColor' : 'border-transparent'} resumeLi` }>Education</li>
          <li onClick={() => setEducationData(false) & seSkillData(true) & setExperienceData(false) & setAchievementData(false)} className={`${skillData ? 'border-designColor' : 'border-transparent'} resumeLi` }>Professional</li>
          <li onClick={() => setEducationData(false) & seSkillData(false) & setExperienceData(true) & setAchievementData(false)} className={`${experienceData ? 'border-designColor' : 'border-transparent'} resumeLi` }>Experience</li>
          <li onClick={() => setEducationData(false) & seSkillData(false) & setExperienceData(false) & setAchievementData(true)} className={`${achievementData ? 'border-designColor' : 'border-transparent'} resumeLi` }>Achievements</li>
        </ul>
      </div>
      {educationData && <Education />}
      {skillData && <Skills />}
      {experienceData && <Experience />}
      {achievementData && <Achievement />}
    </section>
  )
}

export default Resume
