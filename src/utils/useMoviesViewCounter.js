import { useState, useEffect } from "react";

function useMoviesViewCounter() {
    const [moviesCounter, setMoviesCounter] = useState({});
    const [windowSize, setWindowSize] = useState({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
  
    useEffect(() => {
      function handleWindowResize() {
        setTimeout(() => {
          setWindowSize({
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight 
          });
        }, 500);
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.addEventListener('resize', handleWindowResize);
      };
    }, [])
  
    useEffect(() => {
      if(windowSize.innerWidth > 1278 ) {
        const displayMovies = 16;
        const addMovies = 4;
        setMoviesCounter({ displayMovies, addMovies });
      } else {
        if(windowSize.innerWidth > 1006 ) {
          const displayMovies = 12;
          const addMovies = 3;
          setMoviesCounter({ displayMovies, addMovies });
        } else {
          if (windowSize.innerWidth > 760 ) {
            const displayMovies = 8;
            const addMovies = 2;
            setMoviesCounter({ displayMovies, addMovies });
          } else {
            const displayMovies = 5;
            const addMovies = 2;
            setMoviesCounter({ displayMovies, addMovies });
          }
        }
      }
    }, [windowSize]);
  
    return [moviesCounter, setMoviesCounter];
  }

export { useMoviesViewCounter };