import {
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { SiTailwindcss } from 'react-icons/si'
  import './index.scss'

const Cube = () => {
    return (
        <div className="stage-cube-content">
        <div className="cubeSpinner">
          <div className="face1">
            <SiTailwindcss className="text-[#38BDF8]" />
           
          </div>
          <div className="face2">
            <FontAwesomeIcon
              className="-rotate-90"
              icon={faHtml5}
              color="#f06529"
            ></FontAwesomeIcon>
          </div>
          <div className="face3">
            <FontAwesomeIcon
              className="-rotate-180"
              icon={faCss3}
              color="#28a4d9"
            ></FontAwesomeIcon>
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#5ed4f4"></FontAwesomeIcon>
          </div>
          <div className="face5">
            <FontAwesomeIcon
              icon={faJsSquare}
              color="#efd81d"
            ></FontAwesomeIcon>
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGitAlt} color="#ec4d28"></FontAwesomeIcon>
          </div>
        </div>
      </div>
    );
};

export default Cube;