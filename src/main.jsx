import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './App.jsx';
import { RouterProvider } from "react-router-dom";
import { router } from './ReactRouter7/Router.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <App/>
    
  </StrictMode>,
)
