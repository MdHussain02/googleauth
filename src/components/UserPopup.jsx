import React from "react";
import { useRecoilState } from "recoil";
import { userPersistenceState } from "../recoil/userState";
const UserPopup = ({onClose}) => {
  const [user, setUser] = useRecoilState(userPersistenceState);
  return (
    <div className="absolute top-12 right-4 bg-white rounded-lg shadow-xl p-6 w-72 flex flex-col items-center space-y-4 z-10">
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
        <span className="text-2xl">&times;</span> {/* Close button */}
      </button>
      <img
        className="w-20 h-20 rounded-full border-2 border-amber-600"
        src={user?.picture || "https://via.placeholder.com/150"} // Fallback image
        alt="Profile"
      />
      <h2 className="text-lg font-semibold text-black">{user?.name}</h2>
      <p className="text-sm text-gray-600">{user?.email}</p>
      <button
        onClick={()=> setUser(null)}
        className="mt-4 px-6 py-2 bg-amber-600 text-white font-semibold rounded-lg shadow-md hover:bg-amber-500 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default UserPopup;
