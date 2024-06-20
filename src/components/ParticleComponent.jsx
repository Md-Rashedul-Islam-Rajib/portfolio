import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from '../assets/particlesjs-config.json'; 

const ParticleComponent = () => {

    const particlesInit = async (main) => {
        // You can initialize the tsParticles instance (main) here, adding custom shapes or presets
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
        }}  // Use the imported JSON configuration
      />
    );
};

export default ParticleComponent;