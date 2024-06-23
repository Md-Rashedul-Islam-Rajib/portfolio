import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from '../../public/particlesjs-config.json'
import { useCallback } from 'react';
import { loadSlim } from "tsparticles-slim";
const ParticleComponent = () => {

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

    // const particlesInit = async (main) => {
    //     // You can initialize the tsParticles instance (main) here, adding custom shapes or presets
    //     await loadFull(main);
    //   };
    
    //   const particlesLoaded = (container) => {
    //     console.log(container);
    //   };

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        className='relative -z-10'
         
      />
    );
};

export default ParticleComponent;