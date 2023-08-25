import { FC, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import burger from "/assets/shared/tablet/icon-hamburger.svg";
import "./Cart.scss";
import CartItem, { ItemProps } from "../cartItem/CartItem";

const Cart: FC = () => {
    const [cart, setCart] = useState([
        {
            id: 4,
            name: "XX99 mk II",
            cost: 2999,
            picture: "/assets/cart/image-xx99-mark-two-headphones.jpg",
            amount: 1,
        },
        {
            id: 5,
            name: "XX59",
            cost: 899,
            picture: "/assets/cart/image-xx59-headphones.jpg",
            amount: 2,
        },
        {
            id: 2,
            name: "YX1",
            cost: 599,
            picture: "/assets/cart/image-yx1-earphones.jpg",
            amount: 1,
        },
    ]);

    const decreaseHandler = (id: number) => {
        const cartItemObj = cart.find((item) => item.id === id) as ItemProps;

        if (cartItemObj.amount - 1 == 0) {
            setCart(cart.filter((item) => item.id !== id));
            return;
        }

        setCart(
            cart.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        amount: item.amount - 1,
                    };
                }

                return item;
            })
        );
    };

    const increaseHandler = (id: number) => {
        setCart(
            cart.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        amount: item.amount + 1,
                    };
                }

                return item;
            })
        );
    };

    const clearHandler = () => {
        setCart([]);
    };

    const cartItems = cart.map((item) => {
        return (
            <CartItem
                cartItem={item}
                decreaseHandler={decreaseHandler}
                increaseHandler={increaseHandler}
                key={item.id}
            />
        );
    });

    const burgerHandler = (): void => {
        const modal = document.getElementById(
            "header__mainNavWrapper"
        ) as HTMLDialogElement;
        const cart = document.getElementById("cart") as HTMLDialogElement;

        cart.close();

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
        <dialog id="cart">
            <header className="header-dialog">
                <div className="container-dialog header__modalClose">
                    <button className="header__burger" onClick={burgerHandler}>
                        <img src={burger} alt="burger menu icon" />
                    </button>
                    <Link to={"/"} className="header__logo">
                        <img src={logo} alt="audiophile logo" className="header__modalClose" />
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
                    <button className="header__cart" >
                        <img src={cartIcon} alt="cart icon" className="header__modalClose" />
                    </button>
                </div>
            </header>
            <section>
                <div className="cart__heading">
                    <h6>cart ({cart.length})</h6>
                    <button onClick={clearHandler}>Remove all</button>
                </div>
                <ul>{cartItems}</ul>
                <div className="cart__total">
                    <span className="cart__totalText">Total</span>
                    <h6 className="cart__sum">
                        $
                        {cart.reduce((accumulator, currentItem) => {
                            return (
                                accumulator +
                                currentItem.cost * currentItem.amount
                            );
                        }, 0)}
                    </h6>
                </div>
                <Link to={"/checkout"}>Checkout</Link>
            </section>
        </dialog>
    );
};

export default Cart;
