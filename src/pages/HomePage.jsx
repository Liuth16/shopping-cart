import { ContentCard } from "../components/ContentCard";
import { Hero } from "../components/Hero";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Store</h1>
      <p>
        Browse our products and add them to your cart. Check the Products page
        to get started!
      </p>
      <Hero />
      <div className="featuresSection">
        <ContentCard
          contentClass={"storeFeature"}
          icon={"../src/assets/dollar.svg"}
          title={"Best prices"}
          text={
            "We have the best prices in the market, if you find anything cheaper we cover the offer."
          }
        />

        <ContentCard
          contentClass={"storeFeature"}
          icon={"../src/assets/truck-side.svg"}
          title={"Fast delivery"}
          text={
            "We guarantee fast delivery. You get you'r products in the same week."
          }
        />
        <ContentCard
          contentClass={"storeFeature"}
          icon={"../src/assets/gem.svg"}
          title={"Fast delivery"}
          text={
            "We guarantee fast delivery. You get you'r products in the same week."
          }
        />
      </div>
      <div className="testimonialsSection">
        <ContentCard
          contentClass={"testimonial"}
          icon={"../src/assets/user1.jpg"}
          text={'"Amazing customer support, solved my problem really fast."'}
        />
        <ContentCard
          contentClass={"testimonial"}
          icon={"../src/assets/user2.jpg"}
          text={'"Best prices I could find. Really worth to check."'}
        />
        <ContentCard
          contentClass={"testimonial"}
          icon={"../src/assets/user3.jpg"}
          text={'"Very fast delivery and high-quality products."'}
        />
      </div>
    </div>
  );
};

export default HomePage;
