import Dots from "../assets/svg/Dots-white";
import DotsBlue from "../assets/svg/Dots-blue";
import HeroImg from "../assets/img/header-section.png";

export default function HeroSection() {
  return (
    <section>
      <div className="absolute bg-[#3BC5E9] h-[780.36px] hidden right-0 -z-10 md:block md:w-[340px] 2xl:w-2/5"></div>
      <div className="content-center grid h-screen md:bs-container">
        <div className="relative md:grid md:grid-cols-5">
          <div className="absolute right-0 -top-[115px] -z-10 md:hidden">
            <DotsBlue />
          </div>
          <div className="absolute bottom-0 -z-10 md:hidden">
            <DotsBlue />
          </div>
          <div className="bs-container col-span-3 mb-12 self-center md:mb-0 md:mx-0 lg:max-w-none">
            <h1 className="font-extrabold leading-none mb-6 text-[#333] text-3xl w-3/4 md:text-[52px]">
              Cara Mudah Sewa Bus Pariwisata
            </h1>
            <p className="leading-8 text-[#4F4F4F] text-[14px] w-3/4">
              Booking bus untuk segala keperluan berpergian anda seperti
              perjalanan religi, kunjungan industri sampai rekreasi bersama
              orang-orang tercinta
            </p>
          </div>
          <div className="col-span-2 mt-[140px] relative self-center w-full -z-10 md:mt-0">
            <span className="absolute opacity-50 right-0 -top-[200px] -z-[1]">
              <Dots />
            </span>
            <span className="absolute -bottom-[200px] left-[120px] opacity-50 -z-[1]">
              <Dots />
            </span>
            <div className="absolute -mt-[140px] right-0 w-4/5 sm:w-3/5 md:w-full">
              <img src={HeroImg} alt="" />
            </div>
            <svg
              className="md:hidden"
              viewBox="0 0 1440 320"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 320l60-26.7C120 267 240 213 360 176s240-59 360-48 240 53 360 37.3c120-16.3 240-90.3 300-128L1440 0v320H0z"
                fill="#09f"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
