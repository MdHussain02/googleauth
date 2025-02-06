import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useRecoilState } from "recoil";
import { userPersistenceState } from "../recoil/userState";
import { jwtDecode } from "jwt-decode";
import logoImage from '../assets/foxcatlogo.png'

const Login = () => {
  const [user, setUser] = useRecoilState(userPersistenceState);

  const handleGoogleLoginSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      setUser({
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
      });
    } catch (error) {
      console.error("Failed to decode token:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-600 text-white">
      <div className="bg-amber-200 p-8 rounded-xl shadow-xl max-w-md w-full flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-800">Welcome to</h1>
        <img 
                  src={logoImage} 
                //   src="/api/placeholder/200/200"
                  alt="Fox and Cat Logo" 
                  className="w-48 h-48 object-contain hover:scale-105 transition-transform duration-300"
                />
        <p className="text-lg text-gray-900">Sign in with Google to continue</p>

        <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={() => console.log("Login Failed")} />

        <p className="text-sm text-gray-900 mt-4">By signing in, you agree to our Terms and Privacy Policy.</p>
      </div>
    </div>
  );
};

export default Login;
