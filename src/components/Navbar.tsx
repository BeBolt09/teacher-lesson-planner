import React from 'react';
import { Outlet,Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { loginWithRedirect,logout } = useAuth0();
  if (isLoading) {
    return <div className='text-white'>Loading ...</div>;
  }
  return (
    <>
    <nav className="fixed top-0 w-full bg-transparent p-4 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2">
        <div className="text-white text-xl font-bold">
            <Link to="/home">Lesson Planner</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            {/* <a href="lesson-planner" className="text-white hover:text-gray-300">Services</a> */}
            <Link to="/lesson-planner" className="text-white hover:text-gray-300">Demo</Link>
          </li>

          {!isAuthenticated && (
            <>     
              <li>
                <a href="/signin" className="text-white border-2 border-blue-600 p-4 rounded-xl hover:border-blue-800">
                  <button onClick={() => loginWithRedirect()}>Sign in</button>
                </a>
              </li>
              <li>
                <a href="/signin" className="text-white bg-blue-600 p-4 rounded-xl hover:bg-blue-800">
                  <button onClick={() => loginWithRedirect()}>Sign Up</button>
                </a>
              </li>
            </>
          )}

          
          {isAuthenticated && (
            <>
            <li>
              <a href="/profile" className="text-white border-2 border-blue-600 p-4 rounded-xl hover:border-blue-800">
                Profile
              </a>
            </li>
            <li>
              <a href="" className="text-white bg-blue-600 p-4 rounded-xl hover:bg-blue-800">
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                  Log Out
                </button>
              </a>
            </li>
            </>
          )}
        </ul>
      </div>
    </nav>
    
    <Outlet />
    </>
  );
};

export default Navbar;