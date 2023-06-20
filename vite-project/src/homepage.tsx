import React from "react";
import "./css/Homepage.css";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the home page.</p>
      <section className="hero">
        <div className="hero-content">
          <h1>Discover amazing destinations and book unforgettable tours.</h1>
          <a href="#" className="btn btn-primary">
            Explore Now
          </a>
        </div>
      </section>
      <section className="destinations">
        <h2>Popular Destinations</h2>
        {/* Add destination cards or a carousel here */}
      </section>
      <section className="tours">
        <h2>Featured Tours</h2>
        {/* Add featured tour cards or a carousel here */}
      </section>
    </div>
  );
};

export default Home;
