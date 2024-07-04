import { Link, NavLink } from 'react-router-dom'
import { FaEnvelope, FaHome, FaUser, FaProjectDiagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'
import { IoSchool } from 'react-icons/io5'


const Sidebar = () => {
  return (
    <div
    className="
    bg-[#181818]
    w-52
    h-screen
    min-h-[500px]
    z-20
    "
    >
      <Link className="px-2 flex flex-col items-center justify-center md:mb-24 md:mt-8 lg:mt-32 text-white" to="/">
        <h1
          className=" text-4xl font-bold h-auto"
          
        >@rashedul</h1>
      </Link>

      <nav
        className="
            flex
            flex-col 
            justify-center
            text-center
            h-full
            w-full
            md:text-xl
            pb-60
            "
      >
        <NavLink
        className={({ isActive }) =>
          `block py-1 px-2 ${isActive ? 'text-[#ffd700]' : 'text-white'} flex justify-center mt-32 md:mt-0 mb-6 transition-all duration-300 ease-out `
        }
          to="/"
        >
          <FaHome
          
          ></FaHome> <span className='ml-4'>Home</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `block py-1 px-2 ${isActive ? 'text-[#ffd700]' : 'text-white'} flex justify-center mb-6 transition-all duration-300 ease-out `
          }
          to="/about"
        >
          <FaUser ></FaUser> <span className='ml-4'>About</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `block py-1 px-2 ${isActive ? 'text-[#ffd700]' : 'text-white'} flex justify-center mb-6 transition-all duration-300 ease-out `
          }
          to="/skills"
        >
          <GiSkills /> <span className='ml-4'>Skills</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `block py-1 px-2 ${isActive ? 'text-[#ffd700]' : 'text-white'} flex justify-center mb-6 transition-all duration-300 ease-out `
          }
          to="/projects"
        >
          <FaProjectDiagram />
          <span className='ml-4'>Projects</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `block py-1 px-2 ${isActive ? 'text-[#ffd700]' : 'text-white'} flex justify-center mb-6 transition-all duration-300 ease-out `
          }
          to="/education"
        >
          <IoSchool />
          <span className='ml-4'>Education</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `block py-1 px-2 ${isActive ? 'text-[#ffd700]' : 'text-white'} flex justify-center mb-6 transition-all duration-300 ease-out `
          }
          to="/contact"
        >
          <div className='flex items-center'>
          <FaEnvelope ></FaEnvelope> <span className='ml-4'>Contact</span>
          </div>
        </NavLink>
      </nav>

      {/* <section className='flex flex-col gap-8 mb-48'>
        <a href="https://github.com/Md-Rashedul-Islam-Rajib"
        className={({isActive})=> `${isActive? 'text-[#ffd700]' : 'text-white'}`}
        >
        <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/rashedul-islam-rajib/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BIpNG1NngTYaVQIA2iHEJyg%3D%3D"
        className={({isActive})=> `${isActive? 'text-[#ffd700]' : 'text-white'}`}
        >
        <FaLinkedin />
        </a>
      </section> */}
    </div>
  )
}

export default Sidebar
