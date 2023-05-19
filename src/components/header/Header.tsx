import { FC, ChangeEvent } from "react";
import logo from "/assets/shared/desktop/logo.svg";
import cart from "/assets/shared/desktop/icon-cart.svg";
import burger from "/assets/shared/tablet/icon-hamburger.svg";
import { Link } from "react-router-dom";
import MainNav from "../mainNav/MainNav";
import "./Header.css"

const Header:FC = () => {
    const scrollPreventHandler = (e: Event): void => {
        e.preventDefault()
    }

    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    const burgerHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        if(e.target.value) {
            window.addEventListener(wheelEvent, scrollPreventHandler, { passive: false }); // modern desktop
            window.addEventListener('touchmove', scrollPreventHandler, { passive: false }); // mobile
        }
        console.log("yo");
    }

    const cartHandler = ():void => {
        console.log(" cart yo");
    }

    return (
        <header>
            <input type="checkbox" name="menuToggle" id="menuToggle" onChange={burgerHandler} />
            <div className="header__checkboxCoverWrapper">
                <img src={burger} alt="" />
            </div>
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
            <div className="header__cart" onClick={cartHandler}>
                <img src={cart} alt="" />
            </div>
        </header>
    )
}

export default Header;