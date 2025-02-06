import React from "react";
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
  return (
    <div className="w-64 min-h-screen bg-amber-900 text-slate-300 py-6 flex flex-col shadow-xl">
      {/* Logo Area */}
      <div className="px-6 mb-8">
        <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3">
        {selectors.map((selector) => {
          const Icon = selector.icon;
          return (
            <NavLink
              key={selector.id}
              to={selector.link}
              end={selector.exact} 
              className={({ isActive }) =>
                `flex items-center px-3 py-2.5 mb-1 rounded-lg transition-all duration-200 ease-in-out
                ${
                  isActive
                    ? "bg-amber-200 text-black shadow-md"
                    : "text-slate-400 hover:bg-amber-400 hover:text-white"
                }`
              }
            >
              <Icon className="w-5 h-5" />
              <span className="ml-3 font-medium">{selector.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer Area */}
      <div className="px-6 py-4 border-t border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-slate-800" />
          <div>
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-slate-400">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
