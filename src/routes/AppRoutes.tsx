import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Accordion from '../components/Accordion';
import List from '../pages/List';
import Alert from '../components/Alert';

const AppRoutes = () => {
  return createBrowserRouter([
    {
        path:"/",   
        element:<List/>
    },
    {
        path:"accordion",
        element:<Accordion/>
    },
    {
      path:"alert",
      element:<Alert/>
    }
  ]);
}

export default AppRoutes;
