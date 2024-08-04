import React from 'react'
import { DiAndroid, DiApple } from "react-icons/di";
import { SiGlassdoor } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube ,FaInstagram, FaTiktok} from "react-icons/fa";
import logo from '../assets/glass.webp'
import { GiCircle } from "react-icons/gi";

const Footer = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col md:flex-row items-start justify-between p-4'>
        <div className='flex justify-center md:justify-start w-full md:w-auto'>
          <img src={logo} alt="Glassdoor Logo" className='w-[200px] h-[180px] ml-0 md:ml-40' /> 
        </div>
        <div className='flex flex-col items-start mt-4 md:mt-0'>
          <p className='font-bold'>Glassdoor</p>
          <p>About/Press</p>
          <p>Blog</p>
          <p>Grievance</p>
          <p>Officer-India</p>
        </div>
        <div className='flex flex-col items-start mt-4 md:mt-0'>
          <p className='font-bold'>Employers</p>
          <p>Get a free employer</p>
          <p>Account</p>
          <p>Employer centre</p>
        </div>
        <div className='flex flex-col items-start mt-4 md:mt-0'>
          <p className='font-bold'>Information</p>
          <p>Help/Contact us</p>
          <p>Guidelines</p>
          <p>Terms of Use</p>
          <p>Privacy and Ad</p>
          <p>Choices</p>
          <p>Do Not Sell Or Share</p>
          <p>My Information</p>
          <p>Cookie Consent Tool</p>
        </div>
        <div className='flex flex-col items-start mt-4 md:mt-0'>
          <p className='font-bold'>Work With Us</p>
          <p>Advertisers</p>
          <p>Careers</p>
        </div>
      </div>
      
      <div className='flex flex-col md:flex-row justify-center p-5 gap-4 md:gap-10'>
        <div className='flex justify-center md:justify-between items-center gap-1'>
          <p>Download the App</p>
          <DiAndroid size={25} />
          <DiApple size={25}/>
        </div>
        <div className='flex flex-wrap justify-center md:justify-between items-center gap-2'>
          <a href="https://www.glassdoor.co.in/glassdoor">
            <div className="relative flex flex-col items-center hover:bg-green-500 hover:text-white rounded-full" >
              <GiCircle size={60} className="" />
              <SiGlassdoor size={30} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </a>
          <a href="https://www.facebook.com/Glassdoor/">
            <div className="relative flex flex-col items-center hover:bg-blue-500 hover:text-white rounded-full" >
              <GiCircle size={60} className="" />
              <FaFacebookF size={30} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </a>
          <a href="https://twitter.com/Glassdoor">
            <div className="relative flex flex-col items-center hover:bg-blue-500 hover:text-white rounded-full" >
              <GiCircle size={60} className="" />
              <FaXTwitter size={30} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </a>
          <a href="https://www.youtube.com/Glassdoor">
            <div className="relative flex flex-col items-center hover:bg-red-500 hover:text-white rounded-full" >
              <GiCircle size={60} className="" />
              <FaYoutube size={30} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" /> 
            </div>
          </a>
          <a href="https://www.instagram.com/glassdoor">
            <div className="relative flex flex-col items-center hover:bg-pink-500 hover:text-white rounded-full" >
              <GiCircle size={60} className="" />
              <FaInstagram size={30} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </a>
          <a href="https://tiktok.com/@glassdoor">
            <div className="relative flex flex-col items-center hover:bg-black hover:text-white rounded-full" >
              <GiCircle size={60} className="" />
              <FaTiktok size={30} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </a>
        </div>
        <div className='flex items-center justify-center md:justify-start mt-4 md:mt-0'>
          <select name="country" id="country" className='border border-blue-500 rounded'>
            <option value="Argentina">Argentina</option>
            <option value="America">America</option>
            <option value="Brazil">Brazil</option>
            <option value="Britain">Britain</option>
            <option value="China">China</option>
            <option value="Canada">Canada</option>
            <option value="Germany">Germany</option>
            <option value="France">France</option>
            <option value="Holland">Holland</option>
            <option value="India" selected>India</option>
            <option value="Korea">Korea</option>
            <option value="Japan">Japan</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Norway">Norway</option>
            <option value="Paris">Paris</option>
          </select>
        </div>
      </div>
      
      <hr /><hr />
      
      <div className='flex flex-col items-center text-center p-4'>
        <p>Browse by: Companies, Jobs, Locations, Communities</p>
        <p>Copyright © 2008-2024, Glassdoor LLC. "Glassdoor" and logo are registered trademarks of Glassdoor LLC.</p>
      </div>
    </div>
  )
}

export default Footer;
