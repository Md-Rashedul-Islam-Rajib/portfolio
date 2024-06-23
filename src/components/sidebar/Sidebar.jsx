import { Link, NavLink } from 'react-router-dom'
import { FaEnvelope, FaHome, FaUser, FaProjectDiagram } from 'react-icons/fa'


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
      <Link className="px-2 flex flex-col items-center justify-center mt-32 text-white" to="/">
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
            text-3xl
            pb-60
            "
      >
        <NavLink
        className={({ isActive }) =>
          `block py-1 px-2 ${isActive ? 'text-[#ffd700]' : 'text-white'} flex justify-center mb-6 transition-all duration-300 ease-out `
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
          to="/projects"
        >
          <FaProjectDiagram />
          <span className='ml-4'>Projects</span>
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
    </div>
  )
}

export default Sidebar
