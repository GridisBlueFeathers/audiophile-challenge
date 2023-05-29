import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/shared/desktop/logo.svg";
import "./Footer.css";

const Footer: FC = () => {
  return (
    <footer>
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
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="footer__credits">
        Copyright 2021. All Rights Reserved
      </p>
      <div className="footer__media">
        <ul>
            <li>
                <a href="#">
                    <img src="/assets/shared/desktop/icon-facebook.svg" alt="Facebook logo" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/assets/shared/desktop/icon-twitter.svg" alt="Twitter logo" />
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="/assets/shared/desktop/icon-instagram.svg" alt="Instagram logo" />
                </a>
            </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
