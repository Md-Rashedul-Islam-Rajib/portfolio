/* eslint-disable react/prop-types */
import logo1 from '../../../assets/images/a12logo.png'
import logo2 from '../../../assets/images/a11logo.png'
import logo3 from '../../../assets/images/a10logo.png'
import img1 from '../../../assets/images/a12.png'
import img2 from '../../../assets/images/a11.png'
import img3 from '../../../assets/images/a10.png'

import { useState } from 'react';
import ParticleComponent from '../../../components/ParticleComponent'
const projectData = [
    {
        id: 1,
        projectName: 'Empuls Employee Services',
        logo: logo1,
        img: img1,
        type: 'Employee Management System',
        live: 'https://assignment-12-20a84.web.app',
        clients: 'https://github.com/Md-Rashedul-Islam-Rajib/Empuls-Clients',
        server: 'https://github.com/Md-Rashedul-Islam-Rajib/Empuls-Server',
        features: [
            'The website is easy to navigate with a clean layout.',
            'A user can log in to the system using Email or Password Authentication or via Google Authentication.',
            'This site has different levels of access based on roles.',
            'An employee can submit their work data with details and see their payment history.',
            'Another role, HR, can be promoted only by the admin.',
            'An HR can verify any employee, see their progress in detail, and pay their salary.',
            'The most powerful role is Admin, who can oversee all employees, including HR, on this site.',
            'An admin can fire anyone at any time from this site.',
            'An admin can adjust anyone\'s salary, but they can only increase it.'
        ],
        tech: 'ReactJS, JavaScript, TailwindCSS, Tanstack Query, Stripe, Firebase, MongoDB, Express.js'
    },
    {
        id: 2,
        projectName: 'Avson Hotel & Room Service',
        logo: logo2,
        img: img2,
        type: 'Hotel Management System',
        live: 'https://assignment-11-fb88e.web.app',
        clients: 'https://github.com/Md-Rashedul-Islam-Rajib/Avson-Hotel-Clients',
        server: 'https://github.com/Md-Rashedul-Islam-Rajib/Avson-Hotel-Server',
        features: [
            'Users can book their favourite hotel room for a specific time range.',
            'They can login to the system using Email/Password Authentication or via Google Authentication',
            'They can post reviews, comment, rating about their hotel experience.',
            'Users can update their booking time as they want.',
            'Users can search rooms by Price Filter range.',
            'Rooms booked by one users, will be disabled for booking to others.'
        ],
        tech: 'ReactJS, JavaScript, TailwindCSS, MomentJs, Stripe, Firebase, MongoDB, Express.js'
    },
    {
        id: 3,
        projectName: 'Artistixe Web Store Ltd.',
        logo: logo3,
        img: img3,
        type: 'Individual Portfolio Site',
        live: 'https://assignment-10-74c04.web.app',
        clients: 'https://github.com/Md-Rashedul-Islam-Rajib/Artistixe-clients',
        server: 'https://github.com/Md-Rashedul-Islam-Rajib/Artistixe-server',
        features: [
            'Static Navbar with dynamic routing destination of this site',
            'Gallery of various categories of different art and craft related to painting and drawing in the home page',
            'You can create account by your email and password',
            'You can login with your created account information and also login with google and github account',
            'You can select any category from homepage and know how many crafts of that category holds our store',
            'You can see details any of our craft in this web store',
            'You can also add your craft to our store if you have any',
            'You can find the ticket of exhibition what we organize',
            'You can see our partners who helps to make those craft'
        ],
        tech: 'ReactJS, JavaScript, TailwindCSS, Firebase, MongoDB, Express.js'
    }
];




const Projects = () => {
    const [project, setOpenModalId] = useState(null);

    const toggleModal = (id) => {
        setOpenModalId(id);
    };

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-24 my-32'>
        {projectData?.map((project) => (
            <div className='z-30 relative' key={project.id}>
                <div className='flex items-center gap-4 mb-10'>
                    <img className='w-16' src={project.logo} alt={project.projectName} />
                    <span className='text-3xl text-white font-coolvetica'>{project.projectName}</span>
                </div>
                <div
                    onClick={() => toggleModal(project)}
                    className='w-full cursor-pointer hover:scale-[1.02] sm:hover:scale-105 transition-all duration-500 rounded-md shadow-lg shadow-white opacity-95 hover:opacity-100'>
                    <img src={project.img} alt={project.projectName} className='relative' />
                </div>
                
            </div>
        ))}
        {project && (
                    <Modal
                        projectName={project?.projectName}
                        logo={project?.logo}
                        features={project?.features}
                        type={project?.type}
                        live={project?.live}
                        clients={project?.clients}
                        server={project?.server}
                        tech={project?.tech}
                        onClose={() => toggleModal(null)}
                    />
                )}
        <ParticleComponent />
    </div>
);
};

const Modal = ({ projectName, logo, type, features, live, clients, tech, server, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 font-coolvetica z-50">
            <div className="bg-white rounded-lg p-16 relative text-2xl">
                <button
                    className="absolute top-0 right-0 text-gray-600 hover:text-gray-900"
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className='flex items-center gap-4'>
                    <img className='w-12' src={logo} alt={projectName} />
                    <span className="text-4xl">{projectName} (Full Stack)</span>
                </div>
                <h2 className='text-3xl ml-16'>{type}</h2>
                <div className='border-b-2 border-black my-8'></div>
                <h1>Top Features:</h1>
                <ul>
                    {features?.map((feature, idx) => <li key={idx}>{feature}</li>)}
                </ul>
                <p className='my-4'>
                    Technologies : {tech}
                </p>
                <div className='flex justify-evenly my-8 font-helvetica-neue'>
                    <a href={live} className='btn bg-[#022c43] text-white p-2 rounded-xl'>Live Site</a>
                    <a href={clients} className='btn bg-[#022c43] text-white p-2 rounded-xl'>Client Repositories</a>
                    <a href={server} className='btn bg-[#022c43] text-white p-2 rounded-xl'>Server Repositories</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
