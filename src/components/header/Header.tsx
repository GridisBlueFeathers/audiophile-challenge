import { FC } from "react";
import logo from "/assets/shared/desktop/logo.svg";
import cart from "/assets/shared/desktop/icon-cart.svg";
import { Link } from "react-router-dom";
import MainNav from "../mainNav/MainNav";

const Header:FC = () => {
    return (
        <header>
            <input type="checkbox" name="menuToggle" id="menuToggle" />
            <div className="header__mainNavWrapper">
                <MainNav />
            </div>
            <div className="header__logo">
                <img src={logo} alt="audiophile loge" />
            </div>
            <nav className="header__nav">
                <ul>
                    <li>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to={"/headphones"}>
                            Headphones
                        </Link>
                    </li>
                    <li>
                        <Link to={"/speakers"}>
                            Speakers
                        </Link>
                    </li>
                    <li>
                        <Link to={"/earphones"}>
                            Earphones
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="header__cart">
                <img src={cart} alt="" />
            </div>
        </header>
    )
}

export default Header;