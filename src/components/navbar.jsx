import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

function navbar() {
  const [openHamburger, setOpenHamburger] = useState(true);

  const handleHamburger = () => {
    setOpenHamburger(!openHamburger);
  };

  return (
    <>
      <div className=" max-w-screen-xl mx-auto px-4 xl:px-0 relative">
        <div
          className={` absolute w-[40%]  top-[100%]  duration-300  transition-all ease-in-out ${
            openHamburger ? "right-[-300%] " : "right-[0%]  "
          }`}
        >
          <div className="flex flex-col text-center  font-semibold space-y-6 py-4 h-[41vh] boroder   text-lg text-black bg-white ">
            <NavLink
              to="/"
              className="hover:text-btnBlue hover:border-b-2 border-btnBlue transition-all duration-100 ease-in-out "
            >
              <button>Home</button>
            </NavLink>
            <NavLink className="hover:text-btnBlue hover:border-b-2 border-btnBlue transition-all duration-100 ease-in-out ">
              <button>Library</button>
            </NavLink>
            <NavLink
              to="/category"
              className="hover:text-btnBlue hover:border-b-2 border-btnBlue transition-all duration-100 ease-in-out "
            >
              <button>Admin Pannel</button>
            </NavLink>
          </div>
        </div>

        <div className="flex justify-between py-5 ">
          <div className="flex space-x-16">
            <h1 className="text-2xl font-bold">FILENO</h1>

            <div className="max-md:hidden py-1 px-14 flex flex-row gap-5 font-semibold">
              <NavLink
                to="/"
                className="hover:text-btnBlue   transition-all duration-100 ease-in-out"
              >
                <button>Home</button>
              </NavLink>
              <NavLink className="hover:text-btnBlue   transition-all duration-100 ease-in-out">
                <button>Library</button>
              </NavLink>
              <NavLink
                to="/category"
                className="hover:text-btnBlue   transition-all duration-100 ease-in-out"
              >
                <button>Admin Pannel</button>
              </NavLink>
            </div>
          </div>

          <div className="max-md:hidden font-semibold flex flex-row gap-7 max-md:gap-3">
            <button className="py-2 text-btnBlue">Create Account</button>
            <button className="text-white bg-btnBlue rounded-lg   px-9 max-md:px-2 ">
              Sign in
            </button>
          </div>

          <GiHamburgerMenu
            onClick={handleHamburger}
            size={28}
            className="my-1 md:hidden cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default navbar;
