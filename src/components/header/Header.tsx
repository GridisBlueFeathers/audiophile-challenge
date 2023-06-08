import { ChangeEvent, FC } from "react";
import logo from "/assets/shared/desktop/logo.svg";
import cart from "/assets/shared/desktop/icon-cart.svg";
import burger from "/assets/shared/tablet/icon-hamburger.svg";
import { Link } from "react-router-dom";
import MainNav from "../mainNav/MainNav";
import "./Header.css";

const Header: FC = () => {
    // const {category, product} = useParams();

    const burgerHandler = (e: ChangeEvent<HTMLInputElement>): void => {
        const modal = document.getElementById(
            "header__mainNavWrapper"
        ) as HTMLDialogElement;

        if (e.target.value === "on") {
            modal.showModal();
            modal.addEventListener(
                "click",
                () => {
                    modal.close();
                },
                { once: true }
            );
        }
    };

    const cartHandler = (): void => {
        console.log(" cart yo");
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
                    <img src={cart} alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;
