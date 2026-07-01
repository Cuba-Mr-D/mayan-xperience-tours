import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedExperiences from "../components/FeaturedExperiences";
import WhyUs from "../components/WhyUs";
import PopularTours from "../components/PopularTours";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedExperiences />
      <WhyUs />
      <PopularTours />
      <Testimonials />
    </main>
  );
}