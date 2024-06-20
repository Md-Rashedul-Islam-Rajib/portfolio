import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import Mainlayout from './layouts/Mainlayout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
        <Mainlayout></Mainlayout>
    </RouterProvider>
  </React.StrictMode>,
)
