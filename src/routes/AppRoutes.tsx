import React from 'react';
// library
import { createBrowserRouter } from 'react-router-dom';

// pages
import List from '../pages/List';
import Loading from '../pages/Loading';
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
import CharacterCounter from '../components/CharacterCounter';
import ChatWindow from '../components/ChatWindow';
import CheckCheckbox from '../pages/Check-Checkbox';
import CheckValueIsNumeric from '../components/CheckValueIsNumeric';
import CheckoutForm from '../components/CheckoutForm';
import CircleMenuMob from '../components/CircleMenuMob';
import GlowingStars from '../components/GlowingStars';
import ThreeCardEffort from '../components/ThreeCardEffort';
import ThreeDPin from './../components/Pin';
import Beam from '../components/Beam';
import BeamPage from '../pages/Beam';
import GridItem from '../components/GridItem';
import CanvasReveal from '../components/CanvasReveal';
import CarRunning from '../components/CarRunning';
import ColorPicker from '../components/ColorPicker';

const AppRoutes = () => {
  return createBrowserRouter([
    {
        path:"/",   
        element:<List/>
    },
    {
        path:"/accordion",
        element:<Accordion/>
    },
    {
      path:"/alert",
      element:<Alert/>
    },
    {
      path:"/animationicon",
      element:<AnimationIcons/>
    },
    {
      path:"/animationbtn",
      element:<AnimatedBtn/>
    },
    {
      path:"/animationsearch",
      element:<AnimatedSearch/>
    },
    {
      path:"/arrow",
      element:<Arrow/>
    },
    {
      path:"/autocomplete",
      element:<Autocomplete/>
    },
    {
      path:"/avatar",
      element:<AvatarImage/>
    },
    {
      path:"/bigheader",
      element:<BigHeader/>
    },
    {
      path:"/blackwhiteimage",
      element:<ImageGallery/>
    },
    {
      path:"/changebgcolor",
      element:<ChangeBgColor/>
    },
    {
      path:"/changebgscroll",
      element:<ChangeBgScroll/>
    },
    {
      path:"/preloader",
      element:<Loading/>
    },
    {
      path:"/character-counter",
      element:<CharacterCounter/>
    },
    {
      path:"/chat-msg",
      element:<ChatWindow/>
    },
    {
      path:"/checkbox",
      element:<CheckCheckbox/>
    },
    {
      path:"/checkboxnumeric",
      element:<CheckValueIsNumeric/>
    },
    {
      path:"/checkoutform",
      element:<CheckoutForm/>
    },
    {
      path:"/circlemenu",
      element:<CircleMenuMob/>
    },
    {
      path:"/glowingstars",
      element:<GlowingStars/>
    },
    {
      path:"/3dcard",
      element:<ThreeCardEffort/>
    },
    {
      path:"/3dpin",
      element:<ThreeDPin/>
    },
    {
      path:"/beams",
      element:<BeamPage/>
    },
    {
      path:"/griditem",
      element:<GridItem/>
    },
    {
      path:"/canvas-reveal",
      element:<CanvasReveal/>
    },
    {
      path:"/car-running",
      element:<CarRunning/>
    },
    {
      path:"/color-picker",
      element:<ColorPicker/>
    },
  ]);
}

export default AppRoutes;
