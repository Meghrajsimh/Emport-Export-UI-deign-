import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import clock from "../../images/Clock.svg";
import mail from "../../images/Mail.svg";
import call from "../../images/Call.svg";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaSearch,
} from "react-icons/fa";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="headerIcons">
        <div className="headerIcons-left">
          <div className=" flex flex-row justify-center items-center gap-12">
            <div className="flex flex-row gap-4 items-center ">
              <div className="circle flex rounded-full items-center justify-center ">
                <img className="w-[22px]" src={clock} alt="Clock" />
              </div>
              <div className="text-white font-body-text text-left">
                <p>Mon - Sat 9.00 - 18.00</p>
                <p>Sunday Closed</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center ">
              <div className="circle flex rounded-full items-center justify-center ">
                <img className="w-[22px]" src={mail} alt="mail" />
              </div>
              <div className="text-white font-body-text text-left">
                <p>Email </p>
                <p>demo@logistics.com</p>
              </div>
            </div>
            <div className="flex flex-row gap-4 items-center ">
              <div className="circle flex rounded-full items-center justify-center ">
                <img className="w-[22px]" src={call} alt="Call" />
              </div>
              <div className="text-white font-body-text text-left">
                <p>Call Us </p>
                <p>+91 1111111111</p>
              </div>
            </div>
          </div>
        </div>
        <div className="headerIcons-right">
          <div className="text-white flex flex-row gap-4  text-xl">
            <FaInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="lastHeader">
        <div className="companyName">
          <div className="square">
            <div id="square1"></div>
            <div id="square2"></div>
            <div id="square3"></div>
            <div id="square4"></div>
          </div>
          <div className=" font-heading-text font-bold text-[32px] text-white">
            Company Name
          </div>
        </div>
        <div className="navBar">
          <ul className="font-body-text text-[16px] flex flex-row items-center gap-[30px]">
            <li>Home</li>
            <li className="w-[1px] opacity-25 h-[16px] bg-white"></li>
            <li>About</li>
            <li className="w-[1px] opacity-25 h-[16px] bg-white"></li>
            <div className="menu-container">
            <div
              className="menu-trigger"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <li>Pages</li>
              
                <RiArrowDownSLine className="downArro" />
              </div>
              <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
                <DropdownItem />
              </div>
            </div>

            <li className="w-[1px] opacity-25 h-[16px] bg-white"></li>
            <li>Services</li>
            <li className="w-[1px] opacity-25 h-[16px] bg-white"></li>
            <li>Contact</li>
          </ul>
          <div className="searchBar">
            <input placeholder="Search"></input>
            <div className="h-[50px] flex items-center justify-center font w-[50px] rounded-full bg-[#18A0FB] searchIcon">
              <FaSearch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function DropdownItem(props) {
  return (
    <ul>
      <li className="dropdownItem">Option1</li>
      <li className="dropdownItem">Option2</li>
      <li className="dropdownItem">Option3</li>
    </ul>
  );
}

export default Header;
