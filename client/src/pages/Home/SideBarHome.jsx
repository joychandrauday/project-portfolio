import React from "react";
import sidebar from "../../assets/images/Screenshot 2024-07-03 024705.png";
import { NavLink } from "react-router-dom";
import { IoMdCog, IoMdCopy, IoMdHome, IoMdPerson } from "react-icons/io";
import { FaInfo, FaUserCog } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FcReading } from "react-icons/fc";

const SideBarHome = () => {
    const SideNav=<>
        <NavLink to={"/"}>
          <div className="tooltip tooltip-right" data-tip="Home">
            <IoMdHome className="text-3xl hover:text-white"/>
          </div>
        </NavLink>
        <NavLink to={"/about"}>
          <div className="tooltip tooltip-right" data-tip="About Me">
            <FaInfo className="text-3xl hover:text-white"/>
          </div>
        </NavLink>
        <NavLink to={"/resume"}>
          <div className="tooltip tooltip-right" data-tip="resume">
            <IoMdPerson className="text-3xl hover:text-white"/>
          </div>
        </NavLink>
        <NavLink to={"/skill"}>
          <div className="tooltip tooltip-right" data-tip="skilled stacks">
            <FaUserCog className="text-3xl hover:text-white"/>
          </div>
        </NavLink>
        <NavLink to={"/projects"}>
          <div className="tooltip tooltip-right" data-tip="projects">
            <IoMdCopy className="text-3xl hover:text-white"/>
          </div>
        </NavLink>
        <NavLink to={"/contact"}>
          <div className="tooltip tooltip-right" data-tip="Contact">
            <MdMail className="text-3xl hover:text-white"/>
          </div>
        </NavLink>
        <NavLink to={"/blog"}>
          <div className="tooltip tooltip-right" data-tip="blog">
            <FcReading className="text-3xl hover:text-white"/>
          </div>
        </NavLink>
        
    </>
  return (
    <div className="w-[80px] min-h-screen top-[65px] lg:fixed lg:flex bg-primary z-40 hidden">
      <ul className="menu gap-3 p-4 border-r border-gray-500 ">
        {SideNav}
      </ul>
      <img src={sidebar} alt="" className="" />
    </div>
  );
};

export default SideBarHome;
