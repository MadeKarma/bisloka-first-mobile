// import { Link } from "react-router-dom";
import { useState } from "react";
import Bisloka from "../assets/img/iconbisloka.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={`fixed w-full ${
        toggle ? "h-screen" : "h-max"
      } md:bg-transparent overflow-hidden z-50`}
    >
      <div
        className={`${
          toggle ? "bg-blue-300" : "bg-transparent"
        } duration-500 flex flex-col md:flex-row md:items-center md:bg-transparent md:bs-container`}
      >
        <div className="bg-white md:bg-transparent">
          <div className="bs-container md:mx-0 lg:max-w-none flex justify-between py-4">
            <div className="flex gap-3 h-10 items-center">
              <img className="h-full" src={Bisloka} alt="" />
              <h1
                className={`${
                  toggle ? "opacity-100" : "opacity-0"
                } transition-opacity duration-500 font-bold text-3xl md:hidden`}
              >
                Bisloka
              </h1>
            </div>
            <button
              className={`cursor-pointer relative h-8 ${
                toggle
                  ? "[&>div::before]:translate-y-0 [&>div::before]:-rotate-45 [&>div::after]:translate-y-0 [&>div::after]:rotate-45 [&>div]:bg-transparent"
                  : ""
              } w-8 md:hidden`}
              onClick={() => setToggle(!toggle)}
            >
              <div className="absolute bg-black duration-500 h-1 -mt-0.5 rounded top-4 transition-all w-8 before:absolute before:bg-black before:duration-500 before:content-[''] before:h-1 before:rounded before:transition-all before:-translate-x-4 before:-translate-y-3 before:w-8 after:absolute after:bg-black after:duration-500 after:content-[''] after:h-1 after:w-8 after:rounded after:transition-all after:-translate-x-4 after:translate-y-3"></div>
            </button>
          </div>
        </div>
        <div
          className={`bg-blue-300 md:bg-transparent w-full h-screen md:h-full duration-500 absolute mt-[72px] md:mt-0 ${
            toggle ? "left-0" : "left-[200%]"
          } pt-6 md:w-full md:pt-0 md:static`}
        >
          <div className="bs-container font-semibold md:mx-0 lg:max-w-none md:pl-8 flex flex-col md:flex-row md:items-center md:justify-between">
            <nav className="flex flex-col md:gap-8 md:flex-row h-full [&>*]:border [&>*]:border-transparent  [&>*]:rounded-xl md:[&>*]:pl-0 hover:[&>*]:border hover:[&>*]:border-white [&>*]:duration-300  text-black text-[14px] ">
              <p className="pl-2 py-4">Booking</p>
              <p className="pl-2 py-4">List Bus</p>
              <p className="pl-2 py-4">Blog</p>
              <p className="pl-2 py-4">Tentang Kami</p>
            </nav>
            <div className="flex flex-col md:flex-row gap-4 mt-10 md:mt-0">
              <button className="bg-white md:bg-transparent rounded-xl py-3 md:py-2 md:px-6">
                <span className="font-semibold text-[14px] text-black">
                  Sign In
                </span>
              </button>
              <button className="border-2 border-primary md:border-white rounded-xl py-3 md:py-2 md:px-6">
                <span className="font-semibold text-[14px] text-black">
                  Sign In
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
