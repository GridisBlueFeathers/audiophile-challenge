import { FC, useState } from "react";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import burger from "/assets/shared/tablet/icon-hamburger.svg";
import { Link } from "react-router-dom";
import MainNav from "../mainNav/MainNav";
import "./Header.css";

const Header: FC = () => {
    // const {category, product} = useParams();
    const [cart] = useState([
        {
            name: "XX99 mark II",
            cost: 2999,
            picture: "/assets/cart/image-xx99-mark-two-headphones.jpg",
            amount: 1,
        },
        {
            name: "XX59",
            cost: 899,
            picture: "/assets/cart/image-xx59-headphones.jpg",
            amount: 2
        },
        {
            name: "YX1",
            cost: 599,
            picture: "/assets/cart/image-yx1-earphones.jpg",
            amount: 1
        },
    ])

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
            "header__cart"
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
                <dialog id="header__cart">
                    <header className="header-dialog">
                        <div className="container-dialog">
                            <div className="header__checkboxCoverWrapper-dialog">
                                <img src={burger} alt="" />
                            </div>
                            <Link to={"/"} className="header__logo">
                                <img src={logo} alt="audiophile loge" />
                            </Link>
                            <div className="header__cart">
                                <img src={cartIcon} alt="" />
                            </div>
                        </div>
                    </header>
                    <section>
                        <div className="header__cartHeading">
                            <span>
                                cart ({cart.length})
                            </span>
                            <button>
                                Remove all
                            </button>
                        </div>
                        <ul>
                            {
                                cart.map(item => {
                                    return (
                                        <li>
                                            <div className="header__cartItemPicture">
                                                <img src={item.picture} alt={`${item.name} photo`} />
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </section>
                </dialog>
            </div>
        </header>
    );
};

export default Header;
