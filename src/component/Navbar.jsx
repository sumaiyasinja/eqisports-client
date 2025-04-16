import { useContext } from "react";
import {  NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const NavLinks = <>
      <NavLink  to="/" className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">Home</NavLink>
      <NavLink  to="/allEquipment" className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">All Sports Equipment</NavLink>
      <NavLink  to="/addEquipment" className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">Add Equipment</NavLink>
      <NavLink  to="/myAddedEquipment" className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">My Equipment List</NavLink>
  </>

  const handleSignOut = () => {
    logOut()
    .then(() => {console.log("Sign out successful")})
    .catch((error) => {console.error(error)});
    
  };

  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50  dark:bg-gray-900">
      <nav className="z-10 sticky top-0 left-0 right-0 max-w-5xl xl:max-w-7xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button>
            <div className="flex items-center space-x-2">
              <h2 className="text-black dark:text-white font-bold text-2xl">Equi<span className="text-purple-800">Sports</span></h2>
            </div>
          </button>

          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
              
              {NavLinks}
            </ul>
          </div>

         {
          user ? <>
           <div className="hidden lg:flex lg:items-center gap-x-2">
            <button onClick={handleSignOut}  className="flex items-center cursor-pointer justify-center rounded-md bg-purple-800 hover:bg-white hover:text-purple-800 text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
            Sign Out
            </button>
            
          </div>
          </>: 
          <>
           <div className="hidden lg:flex lg:items-center gap-x-2">
            <NavLink to="/register" className="flex items-center text-black dark:text-white justify-center px-6 py-2.5 rounded-md hover:bg-purple-800 hover:text-white  font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
              Sign up
            </NavLink>
            <NavLink to="/login" className="flex items-center justify-center rounded-md bg-purple-800 hover:bg-white hover:text-purple-800 text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
            Sign in
            </NavLink>
          </div>
          </>
         }

          <div className="flex items-center justify-center lg:hidden">
            <button className="focus:outline-none text-slate-200 dark:text-white">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
