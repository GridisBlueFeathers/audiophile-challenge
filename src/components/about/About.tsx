import "./About.css";

const About = ({ sectionClass }: { sectionClass: string }) => {
    return (
        <section className={`about ${sectionClass}`}>
            <div className="container">
                <div className="about__imageWrapper">
                    <picture>
                        <source
                            media="(min-width: 880px)"
                            srcSet="/assets/shared/desktop/image-best-gear.jpg"
                        />
                        <source
                            media="(min-width: 426px)"
                            srcSet="/assets/shared/tablet/image-best-gear.jpg"
                        />
                        <img
                            src="/assets/shared/mobile/image-best-gear.jpg"
                            alt=""
                        />
                    </picture>
                </div>
                <article>
                    <h2>
                        Bringing you the <span>best</span> audio gear
                    </h2>
                    <p>
                        Located at the heart of New York City, Audiophile is the
                        premier store for high end headphones, earphones,
                        speakers, and audio accessories. We have a large
                        showroom and luxury demonstration rooms available for
                        you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the
                        fantastic people who make Audiophile the best place to
                        buy your portable audio equipment.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default About;
