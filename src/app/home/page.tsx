import AboutSec from "../components/AboutSec";
import Destinantions from "../components/Destinantions";
import HomeHero from "../components/HomeHero";
import OfferSec from "../components/OfferSec";
import Services from "../components/Services";

const Home = () => {
  return (
    <section>
      <HomeHero />

      <Destinantions />
      <AboutSec />
      <OfferSec />
      <Services />
    </section>
  );
};

export default Home;
