import { FC } from "react";
import "./Home.css"
import { Link } from "react-router-dom";

const Home: FC = () => {  
  return (
    <main>
      <section className="headliner">
        <p className="headliner__overline">
          new product
        </p>
        <h1>
          XX99 Mark II Headphones
        </h1>
        <p className="headliner__desc">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <Link to={"/headphones/xx99-markii"}>
          See product
        </Link>
        <div className="headliner__backgroundImageWrapper">

          <picture className="headliner__backgroundimage">
            <source media="(min-width: 1024px)" srcSet="/assets/home/desktop/image-hero.jpg"/>
            <source media="(min-width: 768px)" srcSet="/assets/home/tablet/image-header.jpg"/>
            <img src="/assets/home/mobile/image-header.jpg" alt="XX99 mark 2 headphones" />
          </picture>
        </div>
      </section>
    </main>
  );
};

export default Home;
