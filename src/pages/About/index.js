import "@/components/styles/About.css";

export default function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p>
        Welcome to Electronics Store! We are dedicated to bringing you the best
        in electronics.
      </p>
      <section>
        <h2>Our Mission</h2>
        <p>
          To deliver high-quality electronics at affordable prices with
          exceptional customer service.
        </p>
      </section>
      <section>
        <h2>Our Values</h2>
        <ul>
          <li>Quality</li>
          <li>Innovation</li>
          <li>Customer Satisfaction</li>
        </ul>
      </section>
    </div>
  );
}
