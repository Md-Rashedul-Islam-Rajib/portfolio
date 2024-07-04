// import {
//   faCss3,
//   faGitAlt,
//   faHtml5,
//   faJsSquare,
//   faReact,
// } from '@fortawesome/free-brands-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { SiTailwindcss } from 'react-icons/si'
// import './index.scss'
import '../../../App.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Loader from 'react-loaders'
import ParticleComponent from '../../../components/ParticleComponent'
import Cube from '../../../components/Cube'
AOS.init()

const About = () => {
  const aboutArray = ['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']
  return (
    <div className="md:pl-32 flex flex-col items-center justify-between md:flex-row md:justify-between md:items-center">
     
        <div className='mt-20 md:mt-0'>
          <h1 className="text-[#ffd700] text-xl text-center md:text-start md:text-3xl lg:text-5xl font-bold font-helvetica-neue">
            {aboutArray?.map((letter, idx) => (
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
          <div className="text-white text-sm lg:text-xl flex flex-col gap-6 mt-6 mx-auto md:mx-0 w-4/5 md:w-3/5 font-light font-helvetica-neue">
            <p data-aos="fade-in" data-aos-delay="900" data-aos-duration="100">
              I'm very ambitious front-end developer looking for a role in
              established IT/Software company with the opportunity to work with
              the latest technologies on challenging and diverse projects
            </p>
            <p data-aos="fade-in" data-aos-delay="1000" data-aos-duration="100">
            I have gained solid experience in web development using the MERN stack. My goal is to leverage my skills and continue learning to build robust, scalable, and user-friendly web applications
            </p>
            <p data-aos="fade-in" data-aos-delay="1100" data-aos-duration="100">
            I am driven by a desire to create impactful digital solutions and am committed to continuous improvement and innovation.
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1JMWLqB7wwqpGcLlqsy0QJ1fvJso0usKL"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-neutral-900 text-white py-2 font-semibold w-1/3 rounded-2xl text-center md:relative z-30"
            >
              Resume
            </a>
          </div>
        </div>
        <div className=' mb-32 md:mb-64 md:pr-44 lg:pr-64'>
          <Cube />
        </div>
      

      <ParticleComponent className="-z-10" />
      <Loader type="pacman" />
    </div>
  )
}

export default About

{
  /* <div className="stage-cube-content">
        <div className="cubeSpinner">
          <div className="face1">
            <SiTailwindcss className="text-[#38BDF8]" />
            {/* <FontAwesomeIcon icon={SiTailwindcss} color="#7AA834"></FontAwesomeIcon> */
}
//   </div>
//   <div className="face2">
//     <FontAwesomeIcon
//       className="-rotate-90"
//       icon={faHtml5}
//       color="#f06529"
//     ></FontAwesomeIcon>
//   </div>
//   <div className="face3">
//     <FontAwesomeIcon
//       className="-rotate-180"
//       icon={faCss3}
//       color="#28a4d9"
//     ></FontAwesomeIcon>
//   </div>
//   <div className="face4">
//     <FontAwesomeIcon icon={faReact} color="#5ed4f4"></FontAwesomeIcon>
//   </div>
//   <div className="face5">
//     <FontAwesomeIcon
//       icon={faJsSquare}
//       color="#efd81d"
//     ></FontAwesomeIcon>
//   </div>
//   <div className="face6">
//     <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"></FontAwesomeIcon>
//   </div>
// </div>
// </div> */}
