import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Package, ShoppingCart, Settings } from "lucide-react";

const selectors = [
  { id: 1, name: "Dashboard", icon: LayoutDashboard, link: "/home", exact: true },
  { id: 2, name: "Users", icon: Users, link: "/home/users" },
  { id: 3, name: "Products", icon: Package, link: "/home/products" },
  { id: 4, name: "Orders", icon: ShoppingCart, link: "/home/orders" },
  { id: 5, name: "Settings", icon: Settings, link: "/home/settings" },
];

const SideBar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  // Detect window resize to switch between mobile and desktop layout
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <div className="w-16 lg:w-64 bg-amber-900 text-slate-300 py-6 px-2 rounded-2xl shadow-xl transition-all duration-300 m-4 min-h-[90vh] flex flex-col">
          <nav className="flex-1 px-2">
            {selectors.map(({ id, icon: Icon, link, exact }) => (
              <NavLink
                key={id}
                to={link}
                end={exact}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2.5 mb-1 rounded-lg transition-all duration-200 ease-in-out
                  ${isActive ? "bg-amber-200 text-black shadow-md" : "text-slate-400 hover:bg-amber-400 hover:text-white"}
                  lg:justify-start justify-center`
                }
              >
                <Icon className="w-6 h-6" />
                <span className="ml-3 font-medium hidden lg:inline">{id !== 1 ? link.replace("/home/", "") : "Dashboard"}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full bg-amber-900 text-slate-300 flex justify-around items-center py-3 shadow-lg">
          {selectors.map(({ id, icon: Icon, link, exact }) => (
            <NavLink
              key={id}
              to={link}
              end={exact}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center transition-all duration-200 ease-in-out
                ${isActive ? "text-amber-200" : "text-slate-400 hover:text-white"}`
              }
            >
              <Icon className="w-6 h-6" />
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBar;
