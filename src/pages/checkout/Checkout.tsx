import { useState } from "react";
import GoBack from "../../components/goBack/GoBack";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store/store";
import "./Checkout.scss";

const Checkout = () => {
    const [isEMoney, setIsEMoney] = useState(true)
    const cart = useSelector((state: RootState) => state.products);

    return (
        <div className="checkoutWrapper" >
            <main className="checkout" >
                <GoBack />
                <div className="checkout__form" >
                    <form action="#" >
                        <fieldset className="form" >
                            <h3>
                                Checkout
                            </h3>
                            <div>
                                <span className="form__sectionTitle" >
                                    Billing details
                                </span>
                                <label htmlFor="name" className="form__label" >
                                    Name
                                </label>
                                <input id="name" type="text" autoComplete="name" placeholder="Alexei Ward" className="form__input" />
                                <label htmlFor="email" className="form__label"  >
                                    Email Address
                                </label>
                                <input id="email" type="email" autoComplete="email" placeholder="alexei@mail.com" className="form__input"  />
                                <label htmlFor="tel" className="form__label"  >
                                    Phone Number
                                </label>
                                <input id="tel" type="tel" autoComplete="tel" placeholder="+1 202-555-0136" className="form__input"  />
                            </div>
                            <div>
                                <span className="form__sectionTitle" >
                                    Shipping info
                                </span>
                                <label htmlFor="address" className="form__label"  >
                                    Address
                                </label>
                                <input id="address" type="text" autoComplete="address" placeholder="1137 Williams Avenue" className="form__input"  />
                                <label htmlFor="zip" className="form__label"  >
                                    ZIP Code
                                </label>
                                <input id="zip" type="number" placeholder="10001" className="form__input"  />
                                <label htmlFor="city" className="form__label"  >
                                    City
                                </label>
                                <input id="city" type="text" placeholder="New York" className="form__input"  />
                                <label htmlFor="country" className="form__label"  >
                                    Country
                                </label>
                                <input id="country" type="text" autoComplete="country" placeholder="United States" className="form__input"  />
                            </div>
                            <div>
                                <span className="form__sectionTitle" >
                                    Payment details
                                </span>
                                <span className="form__label" >
                                    Payment Method
                                </span>
                                <div className="form__radioWrapper">
                                    <input className="form__input-radio" id="eMoney" type="radio" name="paymentMethod" value={"e-Money"} checked={isEMoney} onChange={() => {setIsEMoney(true)}} />
                                    <label htmlFor="eMoney" className="form__label-radio" >
                                        e-Money
                                    </label>
                                    <input className="form__input-radio" id="cash" type="radio" name="paymentMethod" value={"cash"} onChange={() => {setIsEMoney(false)}}/>
                                    <label htmlFor="cash" className="form__label-radio" >
                                        Cash on Delivery
                                    </label>
                                </div>
                            </div>
                                {isEMoney &&
                                    <div>
                                        <label htmlFor="eMoneyNumber" className="form__label"  >
                                            e-Money Number
                                        </label>
                                        <input id="eMoneyNumber" type="number" className="form__input" />
                                        <label htmlFor="eMoneyPin" className="form__label"  >
                                            e-Money PIN
                                        </label>
                                        <input id="eMoneyPin" type="tel" className="form__input" />
                                    </div>
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
        </div>
    )
};

export default Checkout;
