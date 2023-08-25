import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/shared/desktop/logo.svg";
import "./Footer.scss";

const Footer: FC = () => {
    return (
        <footer>
            <div className="container">
                <Link to={"/"} className="footer__logo">
                    <img src={logo} alt="audiophile loge" />
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/headphones"}>Headphones</Link>
                        </li>
                        <li>
                            <Link to={"/speakers"}>Speakers</Link>
                        </li>
                        <li>
                            <Link to={"/earphones"}>Earphones</Link>
                        </li>
                    </ul>
                </nav>
                <p className="footer__desc">
                    Audiophile is an all in one stop to fulfill your audio
                    needs. We're a small team of music lovers and sound
                    specialists who are devoted to helping you get the most out
                    of personal audio. Come and visit our demo facility - we’re
                    open 7 days a week.
                </p>
                <div className="footer__credits">
                    <p className="footer__copyright">
                        Copyright 2021. All Rights Reserved
                    </p>
                    <div className="footer__media">
                        <ul>
                            <li>
                                <a
                                    href="#"
                                    style={{
                                        mask: "url(/assets/shared/desktop/icon-facebook.svg) no-repeat center / contain",
                                        WebkitMask:
                                            "url(/assets/shared/desktop/icon-facebook.svg) no-repeat center / contain",
                                    }}
                                ></a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    style={{
                                        mask: "url(/assets/shared/desktop/icon-twitter.svg) no-repeat center / contain",
                                        WebkitMask:
                                            "url(/assets/shared/desktop/icon-twitter.svg) no-repeat center / contain",
                                    }}
                                ></a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    style={{
                                        mask: "url(/assets/shared/desktop/icon-instagram.svg) no-repeat center / contain",
                                        WebkitMask:
                                            "url(/assets/shared/desktop/icon-instagram.svg) no-repeat center / contain",
                                    }}
                                ></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
