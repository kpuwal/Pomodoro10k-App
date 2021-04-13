"use strict";
import { useRef, useEffect } from "react";

const useInterval = (callback, delay: number) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    
    const id = setInterval(tick, delay);
    console.log("about to clear interval!");
    return () => clearInterval(id);
  }, [delay]);
};

export default useInterval;
