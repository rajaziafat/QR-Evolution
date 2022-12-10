import Navbar from "layouts/Navbar";
import Hero from "layouts/Hero";
import Offer from "layouts/Offer";
import Work from "layouts/Work";
import SupportedChains from "layouts/SupportedChains";
import Footer from "layouts/Footer";

function HomePage() {
  return (
    <div>
      <div className="mb-8 sm:mb-12 lg:mb-14 xl:mb-16">
        <Navbar />
      </div>

      <div className="mb-36 sm:mb-20">
        <Hero />
      </div>

      <div className="mb-16 sm:mb-24 lg:mb-32 xl:mb-150px">
        <Offer />
      </div>

      <Work />

      <SupportedChains />

      <Footer />
    </div>
  );
}

export default HomePage;
