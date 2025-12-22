import AboutSec from "../components/AboutSec";
import BookBike from "../components/BookBike";
import Destinantions from "../components/Destinantions";
import HomeHero from "../components/HomeHero";
import OfferSec from "../components/OfferSec";
import Packages from "../components/Packages";
import Services from "../components/Services";

const Home = () => {
  return (
    <section>
      <HomeHero />

      <Destinantions />
      <AboutSec />
      <OfferSec />
      <Services />
      <BookBike />
      <Packages />
    </section>
  );
};

export default Home;
