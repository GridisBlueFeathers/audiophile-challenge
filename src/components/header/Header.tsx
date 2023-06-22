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
        const modal = document.getElementById(
            "cart"
        ) as HTMLDialogElement;

        const body = document.body as HTMLElement;
        body.style.overflow = "hidden";

        modal.showModal();
        modal.addEventListener(
            "click",
            (e) => {
                if(e.target === modal) {
                    console.log(e.target);
                    body.style.overflow = "scroll";
                    modal.close();
                }
            },
        );
    };

    return (
        <header>
            <div className="container">
                <input
                    type="checkbox"
                    name="menuToggle"
                    id="menuToggle"
                    onChange={burgerHandler}
                />
                <div className="header__checkboxCoverWrapper">
                    <img src={burger} alt="" />
                </div>
                <dialog id="header__mainNavWrapper">
                    <header className="header-dialog">
                        <div className="container-dialog">
                            <div className="header__checkboxCoverWrapper-dialog">
                                <img src={burger} alt="" />
                            </div>
                            <Link to={"/"} className="header__logo">
                                <img src={logo} alt="audiophile loge" />
                            </Link>
                            <div className="header__cart" onClick={cartHandler}>
                                <img src={cartIcon} alt="" />
                            </div>
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
                <div className="header__cart" onClick={cartHandler}>
                    <img src={cartIcon} alt="" />
                </div>
                <Cart />
            </div>
        </header>
    );
};

export default Header;
