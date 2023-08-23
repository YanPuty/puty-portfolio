/**
 * TODO:
 *  - Implements with query width matches
 */
import { useEffect, useState } from 'react';

export interface MediaTypeParam {
  queryWidth?: number
}

export interface MediaQueryReturnType {
  width: number;
  isMatches: boolean;
  isMobileDevice: boolean;
}

export function useMediaQuery(param?: MediaTypeParam): MediaQueryReturnType {
  const [width, setWidth] = useState(0);
  const [isMatches, setIsMatches] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth)
    handleResize();
    /**
     * @description Add Event Listener
     */
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    }
  }, []);

  function handleResize() {
    console.log(width);

    setWidth(window.innerWidth);
    setIsMatches(false);
    setIsMobileDevice(false);

    // When Screen Width Less than 750px
    if (window.innerWidth <= 750) {
      setIsMobileDevice(true);
    }
  }

  return { width, isMobileDevice, isMatches }
}