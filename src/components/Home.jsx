import React from "react";
import { useRecoilState } from "recoil";
import { userPersistenceState } from "../recoil/userState";
import TopBar from "./TopBar";
import LogoContainer from "./LogoContainer";

const Home = () => {
  const [user, setUser] = useRecoilState(userPersistenceState);

  return (
    <div className="h-screen bg-gradient-to-r">
      <TopBar user={user} onLogout={() => setUser(null)} />
    <LogoContainer/>
    </div>


  );
};

export default Home;
