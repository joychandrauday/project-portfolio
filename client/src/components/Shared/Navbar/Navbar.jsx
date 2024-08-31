import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./styles.css";
import { IoMdSearch } from "react-icons/io";
import { FiSidebar } from "react-icons/fi";
import { TbLayoutBottombar, TbLayoutSidebarRight } from "react-icons/tb";
import { MdOutlineViewSidebar } from "react-icons/md";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { getAuth } from "firebase/auth";
import { app } from "../../../firebase/firebase.config";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const tabList = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skill", path: "/skill" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
    { name: "SignIn", path: "/signin" },
  ];

  const currentIndex = tabList.findIndex(
    (tab) => tab.path === location.pathname
  );
  const prevIndex = (currentIndex - 1 + tabList.length) % tabList.length;
  const nextIndex = (currentIndex + 1) % tabList.length;

  const navLink = (
    <>
      {tabList.map((tab) => (
        <li key={tab.path}>
          <NavLink to={tab.path}>{tab.name}</NavLink>
        </li>
      ))}
    </>
  );

  return (
    <div className="navbar lg:fixed border-b bg-primary z-50 border-gray-500 md:justify-around">
      <div className="navbar-start">
        <Link to="/">
          <img
            src="https://i.ibb.co/K0NmH2J/favicon.png"
            className="w-[30px]"
            alt="Logo"
          />
        </Link>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primary rounded-box z-[50] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <div className="arrowNav ml-8 hidden lg:flex gap-3 text-2xl">
          <Link to={tabList[prevIndex].path}>
            <FaLongArrowAltLeft />
          </Link>
          <Link to={tabList[nextIndex].path}>
            <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
      <div className="navbar-center border rounded-md border-gray-600 bg-gray-800 px-4 ">
        <Link to="/" className="gap-2 font-bold flex items-center">
          <IoMdSearch />
          Joy Chandra Uday
          <h1 className="blink font-bold text-xl" style={{ color: "yellow " }}>
            _
          </h1>
        </Link>
      </div>
      <div className="navbar-end lg:flex hidden">
        <button className=" text-2xl">
          <FiSidebar />
        </button>
        <button className=" text-2xl">
          <TbLayoutBottombar />
        </button>
        <button className=" text-2xl">
          <TbLayoutSidebarRight />
        </button>
        <button className=" text-2xl">
          <MdOutlineViewSidebar />
        </button>
      </div>
      {user ? (
        <div className="dropdown dropdown-end flex items-center ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={999}
            className="menu menu-sm dropdown-content bg-primary lg:mt-32 z-[999] p-2 shadow bg-base-100 rounded-box w-44"
          >
            <li>
              <h1 className="text-basic block  font-extrabold">
                welcome <div className="text-second">{user?.displayName}</div>
              </h1>
            </li>
            {user?.email === "joychandraud@gmail.com" && (
              <li>
                <a href="/manage-project">projects</a>
              </li>
            )}
            <li>
              <div onClick={logOut}>Logout</div>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
