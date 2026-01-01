"use client";

const { createContext, useState, useEffect } = require("react");
import { useMediaQuery } from "@/hooks/useMediaQuery";

export const HeaderContext = createContext();

export const HeaderProvider = (props) => {
  const isDesktop = useMediaQuery("(min-width: 700px)");
  const [showNavBar, setShowNavBar] = useState(isDesktop);
  const [showHam, setShowHam] = useState(true);

  const handleClick = () => {
    setShowNavBar(!showNavBar);
    setShowHam(showNavBar);
  };

  const closeNavBar = () => {
    setShowNavBar(false)
    setShowHam(true)
  }

  useEffect(() => {
    if (isDesktop) {
      setShowNavBar(true); // open desktop
      setShowHam(true);
    } else {
      setShowNavBar(false); // close desktop
    }
  }, [isDesktop]);

  return (
    <HeaderContext.Provider value={{ showNavBar, showHam, handleClick, closeNavBar }}>
      {props.children}
    </HeaderContext.Provider>
  );
};
