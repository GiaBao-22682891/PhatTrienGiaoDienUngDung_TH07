import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { Rootpage } from './Page/Rootpage';
import { Errorpage } from './Page/Errorpage';
import {Project} from './Page/Project'
import {Team} from './Page/Team'
import {Analytic} from './Page/Analytic'
import {Message} from './Page/Message'
import {Integration} from './Page/Integration'
import Dashboard from './Page/Dashboard';



const router = createBrowserRouter ([
    {path: "/", 
        element: <Rootpage></Rootpage>,
        errorElement: <Errorpage></Errorpage>,
        children: [
          {path: "", element:<Dashboard></Dashboard>},
          {path: "/project", element:<Project></Project>},
          {path: "/team", element:<Team></Team>},
          {path: "/analytic", element:<Analytic></Analytic>},
          {path: "/message", element:<Message></Message>},
          {path: "/integration", element:<Integration></Integration>},
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