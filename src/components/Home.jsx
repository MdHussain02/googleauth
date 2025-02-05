import React from "react";
import { useRecoilState } from "recoil";
import { userState } from "../recoil/userState";
import TopBar from "./TopBar";

const Home = () => {
  const [user, setUser] = useRecoilState(userState);

  const handleLogout = () => {
    setUser(null); // Clears user from Recoil state
    localStorage.removeItem("user"); // Remove user from localStorage
  };

  return (
    <div className="h-screen bg-gradient-to-r">
      <TopBar user={user} onLogout={handleLogout} />
    </div>
  );
};

export default Home;
