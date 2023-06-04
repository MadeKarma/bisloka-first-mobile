import HeroImg from "../assets/img/header-section.png";
import DotsBlue from "../assets/svg/Dots-blue";
import Dots from "../assets/svg/Dots-white";

export default function HeroSection() {
  return (
    <section className="h-screen">
      <div className="absolute bg-[#3BC5E9] hidden h-full right-0 w-[407px] -z-10 md:block"></div>
      <div className="grid content-center h-full md:bs-container">
        <div className="relative md:grid md:grid-cols-5">
          <div className="absolute right-0 -top-[115px] -z-10 md:hidden">
            <DotsBlue />
          </div>
          <div className="absolute bottom-0 -z-10 md:hidden">
            <DotsBlue />
          </div>
          <div className="bs-container self-center mb-12 md:mb-0 col-span-3 md:mx-0 lg:max-w-none">
            <h1 className="leading-none font-extrabold text-[#333] text-3xl w-3/4 md:text-[52px] mb-6">
              Cara Mudah Sewa Bus Pariwisata
            </h1>
            <p className="leading-8 text-[#4F4F4F] text-[14px] w-3/4">
              Booking bus untuk segala keperluan berpergian anda seperti
              perjalanan religi, kunjungan industri sampai rekreasi bersama
              orang-orang tercinta
            </p>
          </div>
          <div className="w-full relative mt-[140px] self-center col-span-2 -z-10">
            <span className="absolute opacity-50 right-0 -top-[65px] -z-[1]">
              <Dots />
            </span>
            <span className="absolute -bottom-[30px] left-[145px] opacity-50 -z-[1]">
              <Dots />
            </span>
            <div className="w-4/5 sm:w-3/5 md:w-full absolute md:static -mt-[140px] right-0">
              <img src={HeroImg} alt="" />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="md:hidden"
            >
              <path
                fill="#09f"
                d="M0 320l60-26.7C120 267 240 213 360 176s240-59 360-48 240 53 360 37.3c120-16.3 240-90.3 300-128L1440 0v320H0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
