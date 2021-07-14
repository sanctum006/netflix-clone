import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/UserSlice";
import { auth } from "../../firebase";
import Navbar from "../Navbar/Navbar";
import Plans from "../Plans/Plans";
import "./Profile.css";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Navbar />
      <div className="profile__body">
        <h3>Edit Profile</h3>
        <div className="profile__info">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/959/66/350/flash-dc-comics-yellow-background-wallpaper-preview.jpg"
            alt=""
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              <Plans />
              <button
                onClick={() => auth.signOut()}
                className="profile__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
