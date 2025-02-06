import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { LoginSocialFacebook } from "reactjs-social-login";
import useAuth from "../hooks/useAuth";
import useTermsAgreement from "../hooks/useTermsAgreement";
import logoImage from "../assets/foxcatlogo.png";
import { FaFacebook } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

const Login = () => {
  const { loading, handleGoogleLoginSuccess, handleFacebookLoginSuccess } = useAuth();
  const { isChecked, toggleAgreement } = useTermsAgreement();

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
            <div className={!isChecked ? "opacity-50 pointer-events-none" : ""}>
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess}
                onError={() => console.log("Login Failed")}
              />
            </div>

            <LoginSocialFacebook
              appId={import.meta.env.VITE_FACEBOOK_APP_ID}
              onResolve={handleFacebookLoginSuccess}
              onReject={(error) => console.error(error)}
            >
              <button
                className={`flex items-center justify-center w-[176px] py-2 px-2 rounded-sm shadow-md transition duration-300 ${
                  isChecked ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!isChecked}
              >
                <FaFacebook className="mr-1.5 text-xl" />
                <span className="text-sm">Login with Facebook</span>
              </button>
            </LoginSocialFacebook>
          </>
        )}

        <div className="flex items-center space-x-2 mt-4">
          <input
            type="checkbox"
            id="terms"
            className="w-5 h-5 accent-blue-600"
            checked={isChecked}
            onChange={toggleAgreement}
          />
          <label htmlFor="terms" className="text-sm text-gray-900">
            I agree to the{" "}
            <a
              href="https://www.termsfeed.com/live/af28a72f-52f4-4317-8e3d-fe06eeeaf57e"
              className="text-blue-600 hover:underline hover:text-blue-700 font-medium transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
             Terms of service &
            </a>
            <a
              href="https://www.termsfeed.com/live/a4beae3d-81d4-427b-a8c4-d3c13117797f"
              className="text-blue-600 hover:underline hover:text-blue-700 font-medium transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
             Privacy Policy
            </a>
            .
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
