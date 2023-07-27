import { FC } from "react";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import burger from "/assets/shared/tablet/icon-hamburger.svg";
import { Link } from "react-router-dom";
import MainNav from "../mainNav/MainNav";
import "./Header.css";
import Cart from "../cart/Cart";

const Header: FC = () => {
    // const {category, product} = useParams();

    const burgerHandler = (): void => {
        const modal = document.getElementById(
            "header__mainNavWrapper"
        ) as HTMLDialogElement;

        const body = document.body as HTMLElement;
        body.style.overflow = "hidden";

        modal.showModal();
        modal.addEventListener(
            "click",
            () => {
                body.style.overflow = "scroll";
                modal.close();
            },
            { once: true }
        );
    };

    const cartHandler = (): void => {
        const modal = document.getElementById("cart") as HTMLDialogElement;

        const body = document.body as HTMLElement;
        body.style.overflow = "hidden";

        modal.showModal();
        modal.addEventListener(
            "click",
            (e) => {
                const target = e.target as HTMLElement
                console.log(e.target);
                if(target === modal || target.classList.contains("header__modalClose")) {
                    body.style.overflow = "scroll";
                    modal.close();
                }
            },
        );
    };

    return (
        <header>
            <div className="container">
                <button onClick={burgerHandler} className="header__burger" >
                    <img src={burger} alt="" />
                </button>
                <dialog id="header__mainNavWrapper">
                    <header className="header-dialog">
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
                    <MainNav />
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
