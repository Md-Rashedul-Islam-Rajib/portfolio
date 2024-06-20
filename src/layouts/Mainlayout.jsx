import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import ParticleComponent from "../components/ParticleComponent";


const Mainlayout = () => {
    return (
        <div className="flex">
                <Sidebar></Sidebar>
            
            <Outlet></Outlet>
            
        </div>
    );
};

export default Mainlayout;