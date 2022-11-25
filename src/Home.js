import React from "react";
import homeBanner from "./assets/home_banner.jpg";
import "./home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={homeBanner} alt="banner" className="home__image" />
        <div className="home__row">
          <Product
            title="The lean startup"
            price={29.99}
            image="https://picsum.photos/640/360"
            rating={3}
          />
          <Product
            title="The lean startup"
            price={49.95}
            image="https://picsum.photos/400/360"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean startup"
            price={20}
            image="https://picsum.photos/200/360"
            rating={3}
          />
          <Product
            title="The lean startup"
            price={99.95}
            image="https://picsum.photos/400/360"
            rating={4}
          />
          <Product
            title="The lean startup"
            price={39.95}
            image="https://picsum.photos/400/360"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            title="The lean startup"
            price={99}
            image="https://picsum.photos/200/360"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
