import { FC, MouseEvent } from "react";
import { Link } from "react-router-dom";
import logo from "/assets/shared/desktop/logo.svg";
import cartIcon from "/assets/shared/desktop/icon-cart.svg";
import burger from "/assets/shared/tablet/icon-hamburger.svg";
import "./Cart.scss";
import CartItem from "../cartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/store/store";
import { clearCart } from "./cartSlice";

const Cart: FC = () => {
    const cart = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();

    const clearHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        dispatch(clearCart())
    }

    const cartItems = cart.map((item) => {
        return (
            <CartItem
                cartItem={item}
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
