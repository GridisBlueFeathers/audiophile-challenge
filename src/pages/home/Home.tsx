import { FC } from "react";
import "./Home.css"
import { Link } from "react-router-dom";
import MainNav from "../../components/mainNav/MainNav";

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
      </section>
      <section className="mainNavSection">
        <MainNav />
      </section>
      <section className="primaryProduct">
        <div className="container">
          <div className="primaryProduct__imageWrapper">
            <picture>
              <source media="(min-width: 425px)" srcSet="/assets/home/tablet/image-speaker-zx9.png" />
              <source media="(min-width: 768px)" srcSet="/assets/home/desktop/image-speaker-zx9.png" />
              <img src="/assets/home/mobile/image-speaker-zx9.png" alt="speaker zx9 image" />
            </picture>
          </div>
          <h1>
            zx9 speaker
          </h1>
        </div>
      </section>
    </main>
  );
};

export default Home;
