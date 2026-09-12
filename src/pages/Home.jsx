import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import FeaturedDishes from "@/components/site/FeaturedDishes";
import RestaurantStory from "@/components/site/RestaurantStory";
import BiryaniCollection from "@/components/site/BiryaniCollection";
import MenuSection from "@/components/site/MenuSection";
import SouthIndianSection from "@/components/site/SouthIndianSection";
import Gallery from "@/components/site/Gallery";
import VisitUs from "@/components/site/VisitUs";
import Reviews from "@/components/site/Reviews";
import Footer from "@/components/site/Footer";
import MobileOrderBar from "@/components/site/MobileOrderBar";

export default function Home() {
  return (
    <div className="relative bg-obsidian">
      <Navbar />
      <main>
        <Hero />
        <FeaturedDishes />
        <RestaurantStory />
        <BiryaniCollection />
        <MenuSection />
        <SouthIndianSection />
        <Gallery />
        <VisitUs />
        <Reviews />
      </main>
      <Footer />
      <MobileOrderBar />
    </div>
  );
}