import { useDispatch } from "react-redux";
import "./CartItem.scss";
import { decrementProduct, incrementProduct } from "../cart/cartSlice";
import { MouseEvent } from "react";

export interface ItemProps {
    name: string;
    picture: string;
    amount: number;
    id: number;
    cost: number;
}

interface CartItemProps {
    cartItem: ItemProps;
}

const CartItem = ({cartItem}: CartItemProps) => {
    const {name, amount, picture, cost, id} = cartItem;
    const dispatch = useDispatch()

    const decreaseHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        dispatch(decrementProduct(cartItem))
    }

    const increaseHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        dispatch(incrementProduct(cartItem))
    }

    return (
        <li id={`${id}`} className="cart__item">
            <div className="cart__picture">
                <img src={picture} alt={`${name} photo`} />
            </div>
            <div className="cart__itemDesc">
                <span className="cart__itemName">{name}</span>
                <span className="cart__itemCost">
                    $ {(cost * amount).toLocaleString()}
                </span>
            </div>
            <div className="cart__controls">
                <button className="cart__amountControl" onClick={decreaseHandler}>-</button>
                <span className="cart__amount">{amount}</span>
                <button className="cart__amountControl" onClick={increaseHandler}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
