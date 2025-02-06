import React, { useState } from "react";
import UserPopup from "./UserPopup";
import logoImage from '../assets/logo.png'

const TopBar = ({ user, onLogout }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className="flex items-center justify-between bg-amber-900 p-4 text-white relative">
      <div className="text-lg font-semibold flex items-center">
        <div className="flex items-center justify-center w-10 h-10 bg-white rounded-full">
          <img
            src={logoImage}
            alt="Logo"
            className="w-8 h-8 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
        <span className="ml-2">
          FoxCat
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <p className="text-sm">{user?.name}</p>
        <img
          className="w-8 h-8 rounded-full border-2 border-white shadow-lg cursor-pointer"
          src={user?.picture || "https://via.placeholder.com/150"} // Fallback image
          alt="Profile"
          onClick={() => setIsPopupVisible(!isPopupVisible)}
        />
      </div>
      {isPopupVisible && (
        <UserPopup
          user={user}
          onClose={() => setIsPopupVisible(false)}
          onLogout={onLogout}
        />
      )}
    </div>
  );
};

export default TopBar;
