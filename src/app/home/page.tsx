import AboutSec from "../components/AboutSec";
import Destinantions from "../components/Destinantions";
import HomeHero from "../components/HomeHero";
import OfferSec from "../components/OfferSec";

const Home = () => {
  return (
    <section>
      <HomeHero />

      <Destinantions />
      <AboutSec />
      <OfferSec />
    </section>
  );
};

export default Home;
