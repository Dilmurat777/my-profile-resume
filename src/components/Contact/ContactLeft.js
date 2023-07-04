import React from 'react';
import { contactImg } from '../../assets/index';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-4 justify-center">
      <img className="w-full h-64 object-cover rounded-lg" src={contactImg} alt="contactImg" />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">John Doe</h3>
        <p className="text-lg font-normal text-gray-400">MERN Stack Developer</p>
        <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, ipsum magni nesciunt eius
          impedit non.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span>+996(555)-777-777</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span>dimurat@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
