import { aboutData } from "@/data/HomeHero";
import AboutSec from "../components/AboutSec";
import BookBike from "../components/BookBike";
import Destinantions from "../components/Destinantions";
import HomeHero from "../components/HomeHero";
import OfferSec from "../components/OfferSec";
import Packages from "../components/Packages";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <section>
      <HomeHero />

      <Destinantions />
      <AboutSec data={aboutData} />
      <OfferSec />
      <Services />
      <BookBike />
      <Packages />
      <Testimonials />
    </section>
  );
};

export default Home;
