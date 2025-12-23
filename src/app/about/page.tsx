import { aboutData } from "@/data/AboutPageData";
import AboutHero from "../components/AboutHero";
import AboutSec from "../components/AboutSec";
import Testimonials from "../components/Testimonials";

const About = () => {
  return (
    <section>
      <AboutHero />
      <AboutSec data={aboutData} />
      <Testimonials />
    </section>
  );
};

export default About;
