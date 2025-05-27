import { ContentCard } from "../components/ContentCard";
import { Hero } from "../components/Hero";
import styles from "../styles/contentCard.module.css";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <section className={styles.featuresSection}>
        <ContentCard
          contentClass="storeFeature"
          icon="../src/assets/dollar.svg"
          title="Best Prices"
          text="We offer competitive prices with a price match guarantee. If you find a better deal elsewhere, we'll match it!"
        />
        <ContentCard
          contentClass="storeFeature"
          icon="../src/assets/truck-side.svg"
          title="Fast Delivery"
          text="Enjoy quick and reliable shipping. Most orders are delivered within 3-5 business days."
        />
        <ContentCard
          contentClass="storeFeature"
          icon="../src/assets/gem.svg"
          title="Premium Quality"
          text="We carefully select each product to ensure the highest quality standards for our customers."
        />
      </section>
      <section className={styles.testimonialsSection}>
        <ContentCard
          contentClass="testimonial"
          icon="../src/assets/user1.jpg"
          text='"The customer service team was incredibly helpful and resolved my issue within minutes. Highly recommended!"'
        />
        <ContentCard
          contentClass="testimonial"
          icon="../src/assets/user2.jpg"
          text='"I was amazed by the quality of the products and the competitive prices. Will definitely shop here again!"'
        />
        <ContentCard
          contentClass="testimonial"
          icon="../src/assets/user3.jpg"
          text='"Fast shipping and excellent packaging. The products arrived in perfect condition. Great shopping experience!"'
        />
      </section>
    </div>
  );
};

export default HomePage;
