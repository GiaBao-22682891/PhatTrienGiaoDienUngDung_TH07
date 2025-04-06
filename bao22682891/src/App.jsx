import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Rootpage } from './Page/Rootpage';
import { Errorpage } from './Page/Errorpage';
import Dashboard from './Page/Dashboard';



const router = createBrowserRouter ([
    {path: "/", 
        element: <Rootpage></Rootpage>,
        errorElement: <Errorpage></Errorpage>,
        children: [
          {path: "", element:<Dashboard></Dashboard>}
        //   {path: "/book/:id", element:<Bookdetailpage></Bookdetailpage>},
        //   {path: "/cart", element:<Cartpage></Cartpage>}
        ],
      },
]);

function App() {
    return (
      <>
        <RouterProvider router={router}></RouterProvider>
      </>
    )
  }
  
  export default App