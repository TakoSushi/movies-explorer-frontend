import { useState, useEffect } from "react";
import {
  DISPLAY_WIDTH_LARGE,
  DISPLAY_WIDTH_MEDIUM,
  DISPLAY_WIDTH_SHORT,
  DISPLAY_MOVIES_MAX,
  DISPLAY_MOVIES_LARGE,
  DISPLAY_MOVIES_MEDIUM,
  DISPLAY_MOVIES_SHORT,
  MOVIES_ADD_MAX,
  MOVIES_ADD_LARGE,
  MOVIES_ADD_MEDIUM,
} from "./constants";

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
        window.removeEventListener('resize', handleWindowResize);
      };
    }, [])
  
    useEffect(() => {
      if(windowSize.innerWidth > DISPLAY_WIDTH_LARGE ) {
        const displayMovies = DISPLAY_MOVIES_MAX;
        const addMovies = MOVIES_ADD_MAX;
        setMoviesCounter({ displayMovies, addMovies });
      } else {
        if(windowSize.innerWidth > DISPLAY_WIDTH_MEDIUM ) {
          const displayMovies = DISPLAY_MOVIES_LARGE;
          const addMovies = MOVIES_ADD_LARGE;
          setMoviesCounter({ displayMovies, addMovies });
        } else {
          if (windowSize.innerWidth > DISPLAY_WIDTH_SHORT ) {
            const displayMovies = DISPLAY_MOVIES_MEDIUM;
            const addMovies = MOVIES_ADD_MEDIUM;
            setMoviesCounter({ displayMovies, addMovies });
          } else {
            const displayMovies = DISPLAY_MOVIES_SHORT;
            const addMovies = MOVIES_ADD_MEDIUM;
            setMoviesCounter({ displayMovies, addMovies });
          }
        }
      }
    }, [windowSize]);
  
    return [moviesCounter, setMoviesCounter];
  }

export { useMoviesViewCounter };