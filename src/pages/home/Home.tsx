import { FC, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import MainNav from "../../components/mainNav/MainNav";
import About from "../../components/about/About";

const Home: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <main>
            <section className="headliner">
                <div className="container">
                    <p className="headliner__overline">new product</p>
                    <h1>
                        XX99 Mark II <br />
                        Headphones
                    </h1>
                    <p className="headliner__desc">
                        Experience natural, lifelike audio and exceptional build
                        quality made for the passionate music enthusiast.
                    </p>
                    <Link to={"/headphones/xx99-mark-two-headphones"}>See product</Link>
                </div>
            </section>
            <section className="mainNavSection">
                <MainNav />
            </section>
            <section className="primaryProduct">
                <div className="container">
                    <div className="primaryProduct__imageWrapper">
                        <picture>
                            <source
                                media="(min-width: 769px)"
                                srcSet="/assets/home/desktop/image-speaker-zx9.png"
                            />
                            <source
                                media="(min-width: 425px)"
                                srcSet="/assets/home/tablet/image-speaker-zx9.png"
                            />
                            <img
                                src="/assets/home/mobile/image-speaker-zx9.png"
                                alt="speaker zx9 image"
                            />
                        </picture>
                    </div>
                    <h1>
                        zx9
                        <br />
                        speaker
                    </h1>
                    <p>
                        Upgrade to premium speakers that are phenomenally built
                        to deliver truly remarkable sound.
                    </p>
                    <Link to={"/speakers/zx9-speaker"}>See product</Link>
                </div>
            </section>
            <section className="secondaryProduct">
                <div className="container">
                    <h4>zx7 speaker</h4>
                    <Link to={"/speakers/zx7-speaker"}>See product</Link>
                </div>
            </section>
            <section className="tertiaryProduct">
                <div className="container">
                    <div className="tretiaryProduct__imageWrapper">
                        <picture>
                            <source
                                media="(min-width: 769px)"
                                srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
                            />
                            <source
                                media="(min-width: 425px)"
                                srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
                            />
                            <img
                                src="/assets/home/mobile/image-earphones-yx1.jpg"
                                alt="speaker zx9 image"
                            />
                        </picture>
                    </div>
                    <div className="tretiaryProduct__linkWrapper">
                        <h4>yx1 earphones</h4>
                        <Link to={"/earphones/yx1-earphones"}>See product</Link>
                    </div>
                </div>
            </section>
            <About sectionClass="home" />
        </main>
    );
};

export default Home;
