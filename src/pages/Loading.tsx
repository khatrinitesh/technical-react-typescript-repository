import React, { useEffect } from 'react';
import { usePreloaderStore } from '../store/usePreloaderStore';
import Preloader from '../components/Preloader';

const Loading:React.FC = () => {

    const {loading, setLoading} = usePreloaderStore();


useEffect(() => {
    setLoading(true); // start loading when the app loads
    setTimeout(() => {
        setLoading(false) // stop loading after 3 seconds
    },3000)
},[setLoading])
  return (
    <>
      {loading ? (
        <><Preloader/></>
      ) : (
        <>
         <h1>App Content</h1>
         <p>Your application is loaded!</p>
        </>
      )}
    </>
  );
}

export default Loading;
