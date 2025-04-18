import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Team from './Components/Team.jsx'
import Join from './Components/Join.jsx'
import Contact from './Components/Contact.jsx'


const router = createBrowserRouter([
  { 
    path : "/" ,
     element : <Layout /> ,
     children : [
     {
    path : "" ,
    element : <Home /> 
     },
     {path : "/about" ,
      element : <About />
     },
     {
      path : "/team" ,
      element : <Team />
     },
     {
      path : "/join" ,
      element : <Join />
     },
     {
      path : "/contact" ,
      element : <Contact />
     }
  ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider  router= {router} />
  </StrictMode>
)
