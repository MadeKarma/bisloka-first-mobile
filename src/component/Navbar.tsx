// import { Link } from "react-router-dom";
import { useState } from "react";
import Bisloka from "../assets/img/iconbisloka.png";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [navBg, setNavBg] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY ? setNavBg(true) : setNavBg(false);
  });

  interface INavigation {
    id: number;
    link: string;
  }

  const navigations: INavigation[] = [
    {
      id: 1,
      link: "Booking",
    },
    {
      id: 2,
      link: "List Bus",
    },
    {
      id: 3,
      link: "Blog",
    },
    {
      id: 4,
      link: "Tentang Kami",
    },
  ];

  return (
    <header
      className={`${navBg ? "bg-white shadow-lg" : ""} duration-300 fixed ${
        toggle ? "h-screen" : "h-max"
      } overflow-hidden w-full z-50`}
    >
      <div
        className={`${
          toggle ? "bg-blue-300" : "bg-transparent"
        } duration-500 flex flex-col md:bg-transparent md:bs-container md:flex-row md:items-center`}
      >
        <div className="bg-white md:bg-transparent">
          <div className="bs-container flex justify-between py-4 lg:max-w-none md:mx-0">
            <div className="flex gap-3 h-10 items-center">
              <img className="h-full" src={Bisloka} alt="" />
              <h1
                className={`duration-500 font-bold ${
                  toggle ? "opacity-100" : "opacity-0"
                } text-3xl transition-opacity md:hidden`}
              >
                Bisloka
              </h1>
            </div>
            <button
              className={`cursor-pointer relative h-8 w-8 ${
                toggle
                  ? "[&>div]:bg-transparent [&>div::before]:-rotate-45 [&>div::before]:translate-y-0 [&>div::after]:rotate-45 [&>div::after]:translate-y-0"
                  : ""
              } md:hidden`}
              onClick={() => setToggle(!toggle)}
            >
              <div className="absolute bg-black duration-500 h-1 -mt-0.5 rounded top-4 transition-all w-8 before:absolute before:bg-black before:content-[''] before:duration-500 before:h-1 before:rounded before:transition-all before:-translate-x-4 before:-translate-y-3 before:w-8 after:absolute after:bg-black after:content-[''] after:duration-500 after:h-1 after:w-8 after:rounded after:transition-all after:-translate-x-4 after:translate-y-3"></div>
            </button>
          </div>
        </div>
        <div
          className={` absolute bg-blue-300 duration-500 h-screen ${
            toggle ? "left-0" : "left-[200%]"
          } mt-[72px] pt-6 w-full md:bg-transparent md:h-full md:mt-0 md:pt-0 md:static md:w-full`}
        >
          <div className="bs-container flex flex-col font-semibold md:flex-row md:items-center md:justify-between md:mx-0 md:pl-8 lg:max-w-none ">
            <nav className="flex flex-col h-full text-[14px] text-black md:flex-row md:gap-8 [&>*]:border [&>*]:border-transparent [&>*]:duration-300 [&>*]:rounded-xl hover:[&>*]:border hover:[&>*]:border-white md:[&>*]:pl-0">
              {navigations.map((navigation) => {
                return (
                  <p className="pl-2 py-4" key={navigation.id}>
                    {navigation.link}
                  </p>
                );
              })}
            </nav>
            <div className="flex flex-col gap-4 mt-10 md:flex-row md:mt-0">
              <button className="bg-white rounded-lg py-3 md:bg-transparent md:py-2 md:px-6">
                <span
                  className={`font-bold text-[14px] text-black ${
                    navBg ? "md:text-primary" : "md:text-white"
                  }`}
                >
                  Sign In
                </span>
              </button>
              <button
                className={`border-2 border-primary rounded-lg py-3 ${
                  navBg ? "md:border-primary" : "md:border-white"
                } md:py-2 md:px-6`}
              >
                <span
                  className={`font-bold text-[14px] text-black ${
                    navBg ? "md:text-primary" : "md:text-white"
                  }`}
                >
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
