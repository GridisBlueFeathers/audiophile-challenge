import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import burger from "/assets/shared/tablet/icon-hamburger.svg";
import { Link, useLocation } from "react-router-dom";
import MainNav from "../mainNav/MainNav";
import "./Header.scss";
import Cart from "../cart/Cart";

const Header = () => {
    const location = useLocation();

    const burgerHandler = (): void => {
        const modal = document.getElementById(
            "header__mainNavWrapper"
        ) as HTMLDialogElement;

        const htmlElement = document.documentElement;
        const scrollTop = htmlElement.scrollTop;
        htmlElement.style.top = `-${scrollTop}px`;
        htmlElement.classList.add("scrollPrevent");

        modal.showModal();
        modal.addEventListener(
            "click",
            () => {
                htmlElement.classList.remove("scrollPrevent");
                htmlElement.scrollTop = scrollTop;
                htmlElement.style.removeProperty("top");
                modal.close();
            },
            { once: true }
        );
    };

    const cartHandler = (): void => {
        const modal = document.getElementById("cart") as HTMLDialogElement;

        const htmlElement = document.documentElement;
        const scrollTop = htmlElement.scrollTop;
        htmlElement.style.top = `-${scrollTop}px`;
        htmlElement.classList.add("scrollPrevent");

        modal.showModal();
        modal.addEventListener(
            "click",
            (e) => {
                const target = e.target as HTMLElement
                if(target === modal || target.classList.contains("header__modalClose")) {
                    htmlElement.classList.remove("scrollPrevent");
                    htmlElement.scrollTop = scrollTop;
                    htmlElement.style.removeProperty("top");
                    modal.close();
                }
            },
        );
    };

    return (
        <header className={location.pathname === "/" ? "header header-home" : ""} >
            <div className="container">
                <button onClick={burgerHandler} className="header__burger" >
                    <img src={burger} alt="" />
                </button>
                <dialog id="header__mainNavWrapper">
                    <header className={location.pathname === "/" ? "header-dialog" : "header-dialog header-home"}>
                        <div className="container-dialog">
                            <button className="header__burger" >
                                <img src={burger} alt="burger menu icon" />
                            </button>
                            <Link to={"/"} className="header__logo">
                                <img src={logo} alt="audiophile logo" />
                            </Link>
                            <button className="header__cart" onClick={cartHandler}>
                                <img src={cartIcon} alt="cart icon" />
                            </button>
                        </div>
                    </header>
                    <MainNav navClass="header__nav-dialog"/>
                </dialog>
                <Link to={"/"} className="header__logo">
                    <img src={logo} alt="audiophile loge" />
                </Link>
                <nav className="header__nav">
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
                <button className="header__cart" onClick={cartHandler}>
                    <img src={cartIcon} alt="" />
                </button>
                <Cart />
            </div>
        </header>
    );
};

export default Header;
