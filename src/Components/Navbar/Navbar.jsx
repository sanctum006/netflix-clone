import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const handleScroll = () => {
    if (window.scrollY > 100) setShow(true);
    else setShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix-logo"
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav_avatar"
          src="https://c4.wallpaperflare.com/wallpaper/959/66/350/flash-dc-comics-yellow-background-wallpaper-preview.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
