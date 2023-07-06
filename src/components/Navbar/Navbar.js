import React, { useState } from 'react';
import { logo } from '../../assets/index';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { navLinksData } from '../../constants';
import { Link } from 'react-scroll';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='w-full select-none h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
      <div>
        <img src={logo} alt="logo" />
      </div>

      <div>
        <ul className='hidden mdl:inline-flex items-center gap-6 lg:gap-10'>
          {
            navLinksData.map(({ _id, title, link }) => {
              return (
                <li
                  key={_id}
                  className='list-none text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'
                >
                  <Link
                    activeClass='active'
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {title}
                  </Link>
                </li>
              );
            })
          }
        </ul>
        <span onClick={() => setShowMenu(!showMenu)} className='mdl:hidden text-xl bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer'><FiMenu /></span>
        {
          showMenu && (
            <div className='w-[80%] h-screen overflow-scroll absolute left-0 top-0 bg-gray-900 p-4 scrollbar-hide'>
              <div className='flex flex-col gap-8 py-5 relative'>
                <div>
                  <img className='w-[50%]' src={logo} alt="logo" />
                  <p className='text-sm text-gray-400 tracking-wide mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis ab quos quam fuga qui voluptatibus iste nobis quis! </p>
                </div>
                <ul className='flex flex-col gap-4'>
                  {
                    navLinksData.map((item) => (
                      (<li key={item._id} className='list-none text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'>
                        <Link
                        onClick={() => setShowMenu(false)}
                         activeClass='active'
                         to={item.link}
                         spy={true}
                         smooth={true}
                         offset={-70}
                         duration={500}
                        >{item.title}</Link></li>)
                    ))
                  }
                </ul>
                <div>
                <h2 className='text-base uppercase font-titleFont mb-4'>
                  Find me in
                </h2>
                <div className='flex gap-4'>
                  <span className='bannerIcon'>
                    <FaFacebookF />
                  </span>
                  <span className='bannerIcon'>
                    <FaTwitter />
                  </span>
                  <span className='bannerIcon'>
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
                <span
                  className='text-2xl w-10 h-10 inline-flex i hover:text-designColor cursor-pointer absolute right-4 top-4 duration-300' onClick={() => setShowMenu(false)}><MdClose /></span>
              </div>
            </div>
          )
        }
      </div>
    </div>

  )
}

export default Navbar
