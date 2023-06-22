import { FC, useState } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import burger from "/assets/shared/tablet/icon-hamburger.svg";
import "./Cart.css";
import CartItem from "../cartItem/CartItem";

const Cart: FC = () => {
    const [cart] = useState([
        {   
            id: 4,
            name: "XX99 mark II",
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
            id: 1,
            name: "YX1",
            cost: 599,
            picture: "/assets/cart/image-yx1-earphones.jpg",
            amount: 1,
        },
    ]);

    const decreaseHandler = (id: number) => {
        console.log(id);
    };
    
    const increaseHandler = (id: number) => {
        console.log(id);
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
                    <span>cart ({cart.length})</span>
                    <button>Remove all</button>
                </div>
                <ul>{cartItems}</ul>
                <div className="cart__total">
                    <span>Total</span>
                    <span className="cart__sum">
                        $
                        {cart.reduce((accumulator, currentItem) => {
                            return (
                                accumulator +
                                currentItem.cost * currentItem.amount
                            );
                        }, 0)}
                    </span>
                </div>
                <Link to={"/checkout"}>Checkout</Link>
            </section>
        </dialog>
    );
};

export default Cart;
