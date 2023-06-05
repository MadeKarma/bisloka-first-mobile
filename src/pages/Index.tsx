import AboutUs from "../component/AboutUs";
import DirectSearch from "../component/DirectSearch";
import HeroSection from "../component/HeroSection";
import Navbar from "../component/Navbar";

export default function Index() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DirectSearch />
      <AboutUs />
    </>
  );
}
