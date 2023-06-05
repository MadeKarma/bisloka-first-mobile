import IlustrationOne from "../assets/img/aboutIlustrationOne.png";
import IlustrationTwo from "../assets/img/aboutIlustrationTwo.png";
import IlustrationThree from "../assets/img/aboutIlustrationThree.png";
import DotsBlue from "../assets/svg/Dots-blue";

export default function AboutUs() {
  interface IAbout {
    title: string;
    desc: string;
    img: string;
  }
  const Abouts: IAbout[] = [
    {
      title: "Dimana & Kapan Saja",
      desc: "Website yang responsive dapat dibuka diberbagai gadget anda akan mempermudah penyewaan bus",
      img: IlustrationOne,
    },
    {
      title: "Customer Priority",
      desc: "Customer Service kami akan melayani anda disaat anda mengalami kesulitan diwebsite kami.",
      img: IlustrationTwo,
    },
    {
      title: "Mudah Booking",
      desc: "Mudah booking dan konfirmasi ketersediaan unit yang akan digunakan.",
      img: IlustrationThree,
    },
  ];
  return (
    <section className="relative overflow-hidden">
      <div className="absolute -scale-y-[1] -top-0 w-full -z-10">
        <svg
          className="md:hidden"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 320l60-26.7C120 267 240 213 360 176s240-59 360-48 240 53 360 37.3c120-16.3 240-90.3 300-128L1440 0v320H0z"
            fill="#3BC5E9"
          ></path>
        </svg>
      </div>
      <div className="bs-container relative py-20">
        <div className="absolute top-0 -right-[70px] -z-10 md:-bottom-[12px] md:top-auto md:z-10">
          <DotsBlue />
        </div>
        <div className="absolute bg-[#3BC5E9] h-[600px] hidden left-0 opacity-[0.02] top-0 w-11/12 -z-10 md:block"></div>
        <div className="mb-12">
          <h2 className="font-bold text-[#3BC5E9] text-xl tracking-widest uppercase">
            tentang kami
          </h2>
          <h1 className="font-bold text-3xl md:text-5xl pt-[18px]">
            Mengapa Bisloka ?
          </h1>
        </div>
        <div className="gap-8 grid md:gap-[51px] md:grid-cols-3">
          {Abouts.map((about) => {
            return (
              <div className="bg-white flex flex-col gap-3 justify-between p-10 rounded-[15px] shadow-xl md:px-16">
                <div>
                  <img src={about.img} alt="" />
                </div>
                <div>
                  <h1 className="font-black leading-7 text-2xl mb-2 md:w-1/2">
                    {about.title}
                  </h1>
                  <p className="leading-8 text-[#4F4F4F] text-[14px]">
                    {about.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
