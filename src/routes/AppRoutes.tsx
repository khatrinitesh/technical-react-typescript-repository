import React from 'react';
// library
import { createBrowserRouter } from 'react-router-dom';

// pages
import List from '../pages/List';
// components
import AnimatedBtn from './../components/AnimatedBtn';
import Accordion from '../components/Accordion';
import Alert from '../components/Alert';
import AnimationIcons from './../components/AnimationIcons';
import AnimatedSearch from '../components/AnimatedSearch';
import Arrow from '../components/Arrow';
import Autocomplete from '../components/Autocomplete';
import AvatarImage from '../components/AvatarImage';
import BigHeader from '../components/BigHeader';
import ImageGallery from '../components/ImageGallery';
import ChangeBgColor from '../components/ChangeBgColor';
import ChangeBgScroll from '../components/ChangeBgScroll';

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
    },
    {
      path:"animationicon",
      element:<AnimationIcons/>
    },
    {
      path:"animationbtn",
      element:<AnimatedBtn/>
    },
    {
      path:"animationsearch",
      element:<AnimatedSearch/>
    },
    {
      path:"arrow",
      element:<Arrow/>
    },
    {
      path:"autocomplete",
      element:<Autocomplete/>
    },
    {
      path:"avatar",
      element:<AvatarImage/>
    },
    {
      path:"bigheader",
      element:<BigHeader/>
    },
    {
      path:"blackwhiteimage",
      element:<ImageGallery/>
    },
    {
      path:"changebgcolor",
      element:<ChangeBgColor/>
    },
    {
      path:"changebgscroll",
      element:<ChangeBgScroll/>
    }
    
  ]);
}

export default AppRoutes;
