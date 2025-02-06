import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userPersistenceState } from "./recoil/userState";
import Login from "./components/Login";
import Home from "./components/Home";
import Users from "./components/Users";
import Products from "./components/Products";
import Orders from "./components/Orders";
import Settings from "./components/Settings";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import LogoContainer from "./components/LogoContainer";

function App() {
  const [user] = useRecoilState(userPersistenceState);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />

        {/* Home layout with nested routes */}
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route index element={<LogoContainer/>} />
          <Route path="users" element={<Users />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
