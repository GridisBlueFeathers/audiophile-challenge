import "./CartItem.scss";
export interface ItemProps {
    name: string;
    picture: string;
    amount: number;
    id: number;
    cost: number;
}

interface CartItemProps {
    cartItem: ItemProps;
    decreaseHandler(id: number): void;
    increaseHandler(id: number): void;
}

const CartItem = ({cartItem, decreaseHandler, increaseHandler}: CartItemProps) => {
    const {name, amount, picture, cost, id} = cartItem;

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
                <button className="cart__amountControl" onClick={() => decreaseHandler(id)}>-</button>
                <span className="cart__amount">{amount}</span>
                <button className="cart__amountControl" onClick={() => increaseHandler(id)}>+</button>
            </div>
        </li>
    );
};

export default CartItem;