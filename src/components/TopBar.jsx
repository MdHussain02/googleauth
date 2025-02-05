import React, { useState } from "react";
import UserPopup from "./UserPopup";

const TopBar = ({ user, onLogout }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div className="flex items-center justify-between bg-amber-600 p-4 text-white relative">
      <div className="text-lg font-semibold">FoxCat</div>
      <div className="flex items-center space-x-4">
        <p className="text-sm">{user?.name}</p>
        <img
          className="w-8 h-8 rounded-full border-2 border-white shadow-lg cursor-pointer"
          src={user?.picture || "https://via.placeholder.com/150"} // Fallback image
          alt="Profile"
          onClick={() => setIsPopupVisible(!isPopupVisible)}
        />
      </div>

      {/* User Popup */}
      {isPopupVisible && <UserPopup user={user} onClose={() => setIsPopupVisible(false)} onLogout={onLogout} />}
    </div>
  );
};

export default TopBar;
