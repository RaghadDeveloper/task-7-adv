import { aboutData } from "@/data/AboutPageData";
import AboutHero from "../components/AboutHero";
import AboutSec from "../components/AboutSec";
import Testimonials from "../components/Testimonials";
import Features from "../components/Features";

const About = () => {
  return (
    <section>
      <AboutHero />
      <AboutSec data={aboutData} />
      <Features />
      <Testimonials />
    </section>
  );
};

export default About;
