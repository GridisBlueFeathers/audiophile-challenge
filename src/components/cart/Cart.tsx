import { FC, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import burger from "/assets/shared/tablet/icon-hamburger.svg";
import "./Cart.css";
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
        {
            id: 3,
            name: "YX1",
            cost: 599,
            picture: "/assets/cart/image-yx1-earphones.jpg",
            amount: 1,
        },
        {
            id: 1,
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

    return (
        <dialog id="cart">
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
