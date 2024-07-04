import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/home/layout/Home";
import Mainlayout from "../layouts/Mainlayout";
import About from "../pages/about/layout/About";
import Projects from "../pages/projects/layout/Projects";
import Contact from "../pages/contact/layout/Contact";
import Skills from "../pages/skills/layout/Skills";
import Education from "../pages/education/layout/Education";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
            },
            {
                path: '/education',
                element: <Education></Education>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])