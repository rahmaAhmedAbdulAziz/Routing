import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import Portfolio from './Components/portfolio/portfolio'
import About from './Components/About/About'
import Layout from './Components/Layout/Layout'


function App() {
   let router = createBrowserRouter([
      {path:"", element: <Layout/> , children:[
      {index:true, element: <Home/>},
      {path:"About", element: <About/>},
      {path:"Portfolio", element: <Portfolio/>},
      {path:"contact", element: <Contact/>},
    ]}
    ])
  
  return (
    <>

  <RouterProvider router={router}></RouterProvider>

 
      </>
   
  )
}
export default App
