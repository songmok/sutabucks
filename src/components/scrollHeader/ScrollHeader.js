import React, { useEffect, useState } from "react";

const ScrollHeader = () => {
  const [nav, setNav] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const toggleMenu = () => {
    setNav((nav) => !nav);
  };
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    document.getElementById("root")?.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);
  return <div>ScrollHeader</div>;
};

export default ScrollHeader;
