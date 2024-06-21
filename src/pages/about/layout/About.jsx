import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiTailwindcss } from "react-icons/si";
import './index.scss'
import '../../../App.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "react-loaders";
AOS.init();

const About = () => {
    const aboutArray = ['A','b','o','u','t',' ','M','e']
    return (
        <div className="flex">
            <div className='pl-64 flex items-center'>
        <div >
            <h1 className="text-[#ffd700] text-7xl font-bold font-helvetica-neue">{
                aboutArray?.map((letter,idx)=> <span 
                data-aos="zoom-out"
                data-aos-delay={`${idx*100}`}
                data-aos-duration={`${idx*100}`}
                key={idx}>{letter}</span>)
                }</h1>
                <div className="text-white text-3xl flex flex-col gap-6 mt-6 w-2/5 font-light font-helvetica-neue">
                <p
                data-aos="fade-in"
                data-aos-delay='900'
                data-aos-duration='100'
                >I'm very ambitious front-end developer looking for a role in established IT/Software company with the opportunity to work with the latest technologies on challenging and diverse projects</p>
                <p
                data-aos="fade-in"
                data-aos-delay='1000'
                data-aos-duration='100'
                >I'm quietly confident, naturally curious and perpetually working on improving my chops designs problem at a time</p>
                <p
                data-aos="fade-in"
                data-aos-delay='1100'
                data-aos-duration='100'
                >If I need to define myself in one sentence that would be a family person, a sports fanatic and tech-obsessed</p>
                </div>
        </div>
            </div>

            <div className="stage-cube-content">
                <div className="cubeSpinner">
                <div className="face1">
                    <SiTailwindcss className="text-[#38BDF8]" />
                    {/* <FontAwesomeIcon icon={SiTailwindcss} color="#7AA834"></FontAwesomeIcon> */}
                    </div>
                    <div className="face2">
                    <FontAwesomeIcon className="-rotate-90" icon={faHtml5} color="#f06529"></FontAwesomeIcon>
                    </div>
                    <div className="face3">
                    <FontAwesomeIcon className="-rotate-180" icon={faCss3} color="#28a4d9"></FontAwesomeIcon>
                    </div>
                    <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ed4f4"></FontAwesomeIcon>
                    </div>
                    <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#efd81d"></FontAwesomeIcon>
                    </div>
                    <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"></FontAwesomeIcon>
                    </div>
                   

                </div>



            </div>
            <Loader type="pacman" />
        </div>
    );
};

export default About;