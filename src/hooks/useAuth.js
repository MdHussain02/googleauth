import { useRecoilState } from "recoil";
import { userPersistenceState } from "../recoil/userState";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";

const useAuth = () => {
  const [user, setUser] = useRecoilState(userPersistenceState);
  const [loading, setLoading] = useState(false);

  const handleGoogleLoginSuccess = (credentialResponse) => {
    setLoading(true);
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      console.log(decoded);
      setUser({
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
      });
    } catch (error) {
      console.error("Failed to decode token:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFacebookLoginSuccess = (response) => {
    setLoading(true);
    console.log(response);
    setUser({
      name: response.data.name,
      email: response.data.email,
      picture: response.data.picture.data.url,
    });
    setLoading(false);
  };

  return { user, loading, handleGoogleLoginSuccess, handleFacebookLoginSuccess };
};

export default useAuth;