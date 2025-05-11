
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Navigation, Clock, User } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe">
      <div className="flex justify-around items-center px-2">
        <NavLink 
          to="/"
          className={({ isActive }) => 
            `flex flex-col items-center py-2 px-3 ${isActive ? 'text-wang-orange' : 'text-gray-500'}`
          }
        >
          <Home size={22} />
          <span className="text-xs mt-1">Home</span>
        </NavLink>
        <NavLink 
          to="/orders"
          className={({ isActive }) => 
            `flex flex-col items-center py-2 px-3 ${isActive ? 'text-wang-orange' : 'text-gray-500'}`
          }
        >
          <Navigation size={22} />
          <span className="text-xs mt-1">Orders</span>
        </NavLink>
        <NavLink 
          to="/history"
          className={({ isActive }) => 
            `flex flex-col items-center py-2 px-3 ${isActive ? 'text-wang-orange' : 'text-gray-500'}`
          }
        >
          <Clock size={22} />
          <span className="text-xs mt-1">History</span>
        </NavLink>
        <NavLink 
          to="/profile"
          className={({ isActive }) => 
            `flex flex-col items-center py-2 px-3 ${isActive ? 'text-wang-orange' : 'text-gray-500'}`
          }
        >
          <User size={22} />
          <span className="text-xs mt-1">Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNavigation;
