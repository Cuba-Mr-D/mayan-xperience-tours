import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import PopularTours from "../components/PopularTours";
import WhyUs from "../components/WhyUs";
import FeaturedExperiences from "../components/FeaturedExperiences";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Most Popular Tours */}
      <PopularTours />

      {/* Why Travel With Us */}
      <WhyUs />

      {/* Travel Styles / Featured Experiences */}
      <FeaturedExperiences />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      <Footer />
    </main>
  );
}