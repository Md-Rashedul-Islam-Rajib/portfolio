import { FaCss3, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { BiLogoTypescript } from 'react-icons/bi'
import ParticleComponent from '../../../components/ParticleComponent'
AOS.init()

const Skills = () => {
  const skillsArray = ['M', 'y', ' ', 'S', 'k', 'i', 'l', 'l', 's']
  return (
    <div>
      <div className=" mt-4 lg:mt-12 mb-4 pl-20">
        <h1 className="text-[#ffd700] text-lg text-center md:text-start md:text-3xl lg:text-5xl font-bold font-helvetica-neue">
          {skillsArray?.map((letter, idx) => (
            <span
              data-aos="zoom-out"
              data-aos-delay={`${idx * 100}`}
              data-aos-duration={`${idx * 100}`}
              key={idx}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
      <div className="md:px-20 font-coolvetica grid grid-cols-1 md:grid-cols-3 gap-4">

        <div
          data-aos="fade-in"
          data-aos-delay="900"
          data-aos-duration="100"
          className="flex items-center gap-6 bg-slate-800 p-1 lg:p-4 rounded-xl"
        >
          <FaReact className="text-4xl lg:text-7xl text-[#5ed4f4]" />
          <div className="flex-col gap-4 lg:text-2xl text-white">
            <p>React</p>
            <p>Javascript Library</p>
          </div>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="1000"
          data-aos-duration="100"
          className="flex items-center gap-6 bg-slate-800 p-4 rounded-xl"
        >
          <RiJavascriptFill
          className="text-4xl lg:text-7xl text-[#efd81d]" />
          <div className="flex-col gap-4 lg:text-2xl text-white">
            <p>JavaScript</p>
            <p>Programming Language</p>
          </div>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="1100"
          data-aos-duration="100"
          className="flex items-center gap-6 bg-slate-800 p-4 rounded-xl"
        >
          <SiTailwindcss className="text-[#38BDF8] text-4xl lg:text-7xl" />
          <div className="flex-col gap-4 lg:text-2xl text-white">
            <p>Tailwind CSS</p>
            <p>CSS Framework</p>
          </div>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="900"
          data-aos-duration="100"
          className="flex items-center gap-6 bg-slate-800 p-4 rounded-xl"
        >
          <BiLogoTypescript className="text-4xl lg:text-7xl text-[#2f74c0]" />
          <div className="flex-col gap-4 lg:text-2xl text-white">
            <p>TypeScript</p>
            <p>Programming Language</p>
          </div>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="1000"
          data-aos-duration="100"
          className="flex items-center gap-6 bg-slate-800 p-4 rounded-xl"
        >
          <FaHtml5 className="text-4xl lg:text-7xl text-[#de4b25]" />
          <div className="flex-col gap-4 lg:text-2xl text-white">
            <p>HTML</p>
            <p>Markup Language</p>
          </div>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="1100"
          data-aos-duration="100"
          className="flex items-center gap-6 bg-slate-800 p-4 rounded-xl"
        >
          <FaCss3 className="text-4xl lg:text-7xl text-[#254bdd]" />
          <div className="flex-col gap-4 lg:text-2xl text-white">
            <p>CSS</p>
            <p>Style Sheet</p>
          </div>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="900"
          data-aos-duration="100"
          className="flex items-center gap-6 bg-slate-800 p-4 rounded-xl"
        >
          <SiMongodb className="text-4xl lg:text-7xl text-[#419432]" />
          <div className="flex-col gap-4 lg:text-2xl text-white">
            <p>MongoDB</p>
            <p>Database</p>
          </div>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="1000"
          data-aos-duration="100"
          className="flex items-center gap-6 bg-slate-800 p-4 rounded-xl"
        >
          <FaNodeJs className="text-4xl lg:text-7xl text-[#7dc828]" />
          <div className="flex-col gap-4 lg:text-2xl text-white">
            <p>NodeJS</p>
            <p>Javascript Runtime</p>
          </div>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="1100"
          data-aos-duration="100"
          className="flex items-center gap-6 bg-slate-800 p-4 rounded-xl"
        >
          <SiExpress className="text-4xl lg:text-7xl text-[#474747]" />
          <div className="flex-col gap-4 lg:text-2xl text-white">
            <p>ExpressJS</p>
            <p>NodeJS Framework</p>
          </div>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="900"
          data-aos-duration="100"
          className="flex items-center gap-6 bg-slate-800 p-4 rounded-xl"
        >
          <SiFirebase className="text-4xl lg:text-7xl text-[#f7c427]" />
          <div className="flex-col gap-4 lg:text-2xl text-white">
            <p>Firebase</p>
            <p>Authentication Tool</p>
          </div>
        </div>

      </div>

<ParticleComponent />
      
    </div>
  )
}

export default Skills
