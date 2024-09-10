import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css';
import 'flowbite';
import App from './App.jsx'
import Home from './pages/Home'
import Staff from './pages/Staff.jsx'
import About from './pages/About.jsx'
const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'staff',
                element: <Staff />
            },
            {
                path: 'about',
                element: <About />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router = {router} />
);