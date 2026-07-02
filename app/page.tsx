import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedExperiences from "../components/FeaturedExperiences";
import WhyUs from "../components/WhyUs";
import PopularTours from "../components/PopularTours";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedExperiences />
      <WhyUs />
      <PopularTours />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}