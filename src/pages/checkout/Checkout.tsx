import { useState } from "react";
import GoBack from "../../components/goBack/GoBack";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store/store";

const Checkout = () => {
    const [isEMoney, setIsEMoney] = useState(true)
    const cart = useSelector((state: RootState) => state.products);

    return (
        <main>
            <GoBack />
            <div className="checkout" >
                <form action="#" >
                    <fieldset className="form" >
                        <h3>
                            Checkout
                        </h3>
                            <span>
                                Billing details
                            </span>
                            <label htmlFor="name" >
                                Name
                            </label>
                            <input id="name" type="text" autoComplete="name" />
                            <label htmlFor="email" >
                                Email Address
                            </label>
                            <input id="email" type="email" autoComplete="email" />
                            <label htmlFor="tel" >
                                Phone Number
                            </label>
                            <input id="tel" type="tel" autoComplete="tel" />
                            <span>
                                Shipping info
                            </span>
                            <label htmlFor="address" >
                                Address
                            </label>
                            <input id="address" type="text" autoComplete="address" />
                            <label htmlFor="zip" >
                                ZIP Code
                            </label>
                            <input id="zip" type="number" />
                            <label htmlFor="city" >
                                City
                            </label>
                            <input id="city" type="text"/>
                            <label htmlFor="country" >
                                Country
                            </label>
                            <input id="country" type="text" autoComplete="country" />
                            <span>
                                Payment details
                            </span>
                            <span>
                                Payment Method
                            </span>
                            <input className="paymentMethod" id="eMoney" type="radio" name="paymentMethod" value={"e-Money"} checked={isEMoney} onChange={() => {setIsEMoney(true)}} />
                            <label htmlFor="eMoney" >
                                e-Money
                            </label>
                            <input className="paymentMethod" id="cash" type="radio" name="paymentMethod" value={"cash"} onChange={() => {setIsEMoney(false)}} />
                            <label htmlFor="cash" >
                                Cash on Delivery
                            </label>
                            {isEMoney &&
                                <>
                                    <label htmlFor="eMoneyNumber" >
                                        e-Money Number
                                    </label>
                                    <input id="eMoneyNumber" type="number"/>
                                    <label htmlFor="eMoneyPin" >
                                        e-Money PIN
                                    </label>
                                    <input id="eMoneyPin" type="tel"/>
                                </>
                            }
                    </fieldset>
                    <fieldset className="checkoutCart">
                        <h6>
                            Summary
                        </h6>
                        <ul>
                            {cart.map(item => {
                                return (
                                    <li key={item.id}>
                                        <div className="checkoutCart__imgWrapper">
                                            <img src={item.picture} />
                                        </div>
                                        <div className="checkoutCart__info">
                                            <span>
                                                {item.name}
                                            </span>
                                            <span>
                                                $ {(item.cost * item.amount).toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="checkoutCart__amount">
                                            <span>
                                                x{item.amount}
                                            </span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <div>
                            <span>
                                Total
                            </span>
                            <span>
                                $ {cart.reduce((accumulator, item) => {
                                    return accumulator + (item.cost * item.amount)
                                }, 0).toLocaleString()}
                            </span>
                        </div>
                        <div>
                            <span>
                                Shipping
                            </span>
                            <span>
                                $ 50
                            </span>
                        </div>
                        <div>
                            <span>
                                VAT (Included)
                            </span>
                            <span>
                                $ {Math.round(cart.reduce((accumulator, item) => {
                                    return accumulator + (item.cost * item.amount)
                                }, 0) * 0.2).toLocaleString()}
                            </span>
                        </div>
                        <div>
                            <span>
                                Grand total
                            </span>
                            <span>
                                $ {(cart.reduce((accumulator, item) => {
                                    return accumulator + (item.cost * item.amount)
                                }, 0) + 50).toLocaleString()}
                            </span>
                        </div>
                        <button>
                            Continue & Pay
                        </button>
                    </fieldset>
                </form>
            </div>
        </main>
    )
};

export default Checkout;
