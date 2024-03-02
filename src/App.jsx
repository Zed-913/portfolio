import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import {Main, Navbar} from './components/Home/index'; // Adjust the path based on your folder structure
import About from './components/About/About';
import Root from './rout';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,

      children: [
        {
          path: "/",
          element: <Main />,

        },
        {
          path: "/Home",
          element: <Main />,
        },
        {
          path:"/About",
          element: <About />, 
        }
        ,
      ],
    },
  ]);

  return (
    <div className='container'>
        <RouterProvider router={router} />
    </div>   
    
  );
}

export default App;
