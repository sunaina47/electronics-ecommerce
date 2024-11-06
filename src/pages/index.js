import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import "@/components/styles/Home.css";

export default function Home() {
  return (
    <div>
      {/* <HeroBanner /> */}
      <section>
        <h2>Featured Products</h2>
        <div className="product-grid">
          {/* <ProductCard />
          <ProductCard />
          <ProductCard /> */}
        </div>
      </section>
    </div>
  );
}
