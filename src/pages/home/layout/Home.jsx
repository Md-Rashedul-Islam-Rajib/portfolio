import AOS from "aos";
import "aos/dist/aos.css";
import ParticleComponent from "../../../components/ParticleComponent";
import Loader from "react-loaders";
AOS.init();


const Home = () => {
    const greetArray = ['H','i',',']
    const nameArray =['I','\'','m', ' ','R','a','s','h','e','d','u','l',' ','I','s','l','a','m'];
    const jobArray = ['W','e','b',' ','D','e','v','e','l','o','p','e','r',' ']
    return (
        <div className='pl-64 flex items-center'>
     
            <div className="text-white text-7xl font-bold">
            <h1>{
                greetArray?.map((letter,idx)=> <span 
                data-aos="zoom-out"
                data-aos-delay={`${idx*100}`}
                data-aos-duration={`${idx*100}`}
              
                key={idx}>{letter}</span>)
                }</h1>
            <h1>{
                nameArray?.map((letter,idx)=> <span 
                data-aos="zoom-out"
                data-aos-delay={`${idx*100+400}`}
                data-aos-duration={`${idx*100}`}
              
                key={idx}>{letter}</span>)
                }</h1>
            <h1>{jobArray.map((letter, idx) => (
                    <span
                key={idx}
                data-aos="zoom-out"
                data-aos-delay={`${idx*100+1800}`}
                data-aos-duration={`${idx*1000}`}
                    >
                        {letter}
                    </span>
                ))}</h1>
            
        </div>
        <ParticleComponent />
        <Loader type="pacman" />
        </div>
    );
};

export default Home;