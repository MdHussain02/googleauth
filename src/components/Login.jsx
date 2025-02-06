import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { LoginSocialFacebook } from "reactjs-social-login";
import useAuth from "../hooks/useAuth";
import logoImage from "../assets/foxcatlogo.png";
import { FaFacebook } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

const Login = () => {
  const { loading, handleGoogleLoginSuccess, handleFacebookLoginSuccess } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-900 text-white">
      <div className="bg-amber-100 p-8 rounded-xl shadow-xl max-w-md w-full flex flex-col items-center space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-800">Welcome to</h1>
        <img
          src={logoImage}
          alt="Fox and Cat Logo"
          className="w-48 h-48 object-contain hover:scale-105 transition-transform duration-300"
        />
        
        {loading ? (
          <div className="flex items-center justify-center">
            <ImSpinner8 className="animate-spin text-4xl text-blue-500" />
          </div>
        ) : (
          <>
            <p className="text-lg text-gray-900">Sign in with Google to continue</p>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={() => console.log("Login Failed")}
            />
            <LoginSocialFacebook
              appId={import.meta.env.VITE_FACEBOOK_APP_ID}
              onResolve={handleFacebookLoginSuccess}
              onReject={(error) => console.error(error)}
            >
              <button className="flex items-center justify-center w-[176px] bg-blue-600 text-white py-2 px-2 rounded-sm shadow-md hover:bg-blue-700 transition duration-300">
                <FaFacebook className="mr-1.5 text-xl" />
                <span className="text-sm">Login with Facebook</span>
              </button>
            </LoginSocialFacebook>
          </>
        )}

        <p className="text-sm text-gray-900 mt-4">
          By signing in, you agree to our Terms and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Login;
