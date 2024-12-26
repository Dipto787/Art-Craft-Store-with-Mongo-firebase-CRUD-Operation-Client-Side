import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Pages/Home/Root/Root.jsx'
import Home from './Components/Pages/Home/Home.jsx'
import ArtCraftCardDetails from './Components/Pages/Art&CraftCardDetails.jsx'
let router=createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        loader:()=>fetch('http://localhost:5000/artCraft'),
        element:<Home></Home>
      },
      {
        path:'/artCraftCardDetails/:id', 
        loader:({params})=>fetch(`http://localhost:5000/artCraft/${params.id}`),
        element:<ArtCraftCardDetails></ArtCraftCardDetails>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
