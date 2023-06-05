import { Icon } from "react-icons-kit";
import { chevronDown } from "react-icons-kit/feather/chevronDown";
import IconLocation from "../assets/img/IconLocation.png";
import IconBus from "../assets/img/IconBus.png";
import DotsBlue from "../assets/svg/Dots-blue";

export default function DirectSearch() {
  interface IDirect {
    title: string;
    img: string;
    content: string;
  }
  const directs: IDirect[] = [
    {
      title: "Depature",
      img: IconLocation,
      content: "Mau dijemput dimana ?",
    },
    {
      title: "Destination",
      img: IconLocation,
      content: "Mau dianter kemana ?",
    },
    {
      title: "Jenis Bus",
      img: IconBus,
      content: "Pilih jenis bis kamu",
    },
  ];

  return (
    <section className="relative pb-24">
      <div className="absolute hidden ml-[10px] -top-[55px] -z-10 md:block">
        <DotsBlue />
      </div>
      <div className="absolute -scale-[1] -top-0.5 w-full -z-10">
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
      <div className="absolute -scale-x-[1] -bottom-0.5 w-full -z-10">
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
      <div className="md:bg-white bs-container py-12 md:py-[60px] md:px-[76px] md:rounded-[10px] md:shadow-lg">
        <div className="py-8 md:py-0 md:pb-8">
          <h1 className="font-extrabold text-[#333] text-3xl">
            <span className="font-normal text-xl block">Hey kamu</span>Mau
            liburan kemana ?
          </h1>
        </div>
        <div className="grid md:border-y-2 md:py-3 md:grid-cols-3 [&>*:nth-child(odd)]:border-y-2 [&>*:nth-child(odd)]:border-[#888] md:[&>*:nth-child(odd)]:border-none">
          {directs.map((direct) => {
            return (
              <div className="py-4">
                <h4 className="font-bold mb-3 text-[14px] text-secondary">
                  {direct.title}
                </h4>
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <img src={direct.img} alt="" />
                    <h3 className="text-[18px]">{direct.content}</h3>
                  </div>
                  <div className="block md:hidden">
                    <Icon style={{}} icon={chevronDown} size={20} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end pt-8">
          <button className="bg-primary rounded-[10px] w-full md:w-max">
            <h1 className=" font-bold px-[105px] py-[19px] text-white">
              Cari Bus
            </h1>
          </button>
        </div>
      </div>
    </section>
  );
}
