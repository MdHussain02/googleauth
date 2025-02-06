import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Package, ShoppingCart, Settings, Menu } from "lucide-react";

const selectors = [
  { id: 1, name: "Dashboard", icon: LayoutDashboard, link: "/home", exact: true },
  { id: 2, name: "Users", icon: Users, link: "/home/users" },
  { id: 3, name: "Products", icon: Package, link: "/home/products" },
  { id: 4, name: "Orders", icon: ShoppingCart, link: "/home/orders" },
  { id: 5, name: "Settings", icon: Settings, link: "/home/settings" },
];

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`${isExpanded ? 'w-64' : 'w-16'} min-h-screen bg-amber-900 text-slate-300 py-6 flex flex-col shadow-xl transition-all duration-300`}>
      {/* Toggle Button */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="lg:hidden mx-auto mb-6 p-2 hover:bg-amber-800 rounded-lg"
      >
        <Menu className="w-5 h-5" />
      </button>

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
                ${isActive
                  ? "bg-amber-200 text-black shadow-md"
                  : "text-slate-400 hover:bg-amber-400 hover:text-white"
                } ${!isExpanded && 'justify-center px-2'}`
              }
            >
              <Icon className="w-5 h-5" />
              {isExpanded && <span className="ml-3 font-medium">{selector.name}</span>}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default SideBar;