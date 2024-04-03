import React, { useEffect, useState } from "react";
import ".././assets/css/SplashScreen.css";

function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`splash-screen ${showSplash ? "show" : "hide"}`}>
      <h2> Hello Avinx Health </h2>
    </div>
  );
}

export default SplashScreen;
