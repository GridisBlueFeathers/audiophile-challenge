import { useState } from "react";
import GoBack from "../../components/goBack/GoBack";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store/store";
import "./Checkout.scss";

const Checkout = () => {
    const [isEMoney, setIsEMoney] = useState(true)
    const [isValid] = useState({
        name: true,
        email: true,
        phoneNumber: true,
        address: true,
        zip: true,
        city: true,
        country: true,
        eNumber: true,
        ePin: true
    })
    const cart = useSelector((state: RootState) => state.products);

    return (
        <div className="checkoutWrapper" >
            <main className="checkout" >
                <GoBack />
                <div>
                    <form action="#" className="checkout__form" >
                        <fieldset className="inputs" >
                            <h3>
                                Checkout
                            </h3>
                            <div className="form__section form__section-billing">
                                <span className="form__sectionTitle" >
                                    Billing details
                                </span>
                                <div className="form__fieldSet">
                                    <div className="form__field">
                                        <div className="form__tooltips">
                                            <label htmlFor="name" className="form__label" >
                                                Name
                                            </label>
                                            <span className="form__wrongFormat">
                                                Wrong format
                                            </span>
                                        </div>
                                        <input id="name" type="text" autoComplete="name" placeholder="Alexei Ward" className="form__input" pattern="^[\p{L} ,.'-]+$" />
                                    </div>
                                    <div className="form__field">
                                        <div className="form__tooltips">
                                            <label htmlFor="email" className="form__label" >
                                                Email Address
                                            </label>
                                            <span className="form__wrongFormat">
                                                Wrong format
                                            </span>
                                        </div>
                                        <input id="email" type="email" autoComplete="email" placeholder="alexei@mail.com" className="form__input" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"/>
                                    </div>
                                    <div className="form__field">
                                        <div className="form__tooltips">
                                            <label htmlFor="tel" className="form__label" >
                                                Phone Number
                                            </label>
                                            <span className="form__wrongFormat">
                                                Wrong format
                                            </span>
                                        </div>
                                        <input id="tel" type="tel" autoComplete="tel" placeholder="+1 202-555-0136" className="form__input" pattern="/^(\+[1-9]{1}[0-9]{2,14})?([0-9]{9,14})$/g" />
                                    </div>
                                </div>
                            </div>
                            <div className="form__section form__section-shipping">
                                <span className="form__sectionTitle" >
                                    Shipping info
                                </span>
                                <div className="form__fieldSet">
                                    <div className="form__field form__field-wide">
                                        <div className="form__tooltips">
                                            <label htmlFor="address" className="form__label" >
                                                Your Address
                                            </label>
                                            <span className="form__wrongFormat">
                                                Wrong format
                                            </span>
                                        </div>
                                        <input id="address" type="text" autoComplete="address" placeholder="1137 Williams Avenue" className="form__input" />
                                    </div>
                                    <div className="form__field">
                                        <div className="form__tooltips">
                                            <label htmlFor="zip" className="form__label" >
                                                ZIP Code
                                            </label>
                                            <span className="form__wrongFormat">
                                                Wrong format
                                            </span>
                                        </div>
                                        <input id="zip" type="number" placeholder="10001" className="form__input"  />
                                    </div>
                                    <div className="form__field">
                                        <div className="form__tooltips">
                                            <label htmlFor="city" className="form__label">
                                                City
                                            </label>
                                            <span className="form__wrongFormat">
                                                Wrong format
                                            </span>
                                        </div>
                                        <input id="city" type="text" placeholder="New York" className="form__input" />
                                    </div>
                                    <div className="form__field">
                                        <div className="form__tooltips">
                                            <label htmlFor="country" className="form__label">
                                                Country
                                            </label>
                                            <span className="form__wrongFormat">
                                                Wrong format
                                            </span>
                                        </div>
                                        <input id="country" type="text" autoComplete="country" placeholder="United States" className="form__input" />
                                    </div>
                                </div>
                            </div>
                            <div className="form__section form__section-payment">
                                <span className="form__sectionTitle" >
                                    Payment details
                                </span>
                                <div className="form__radioField">
                                    <span className="form__label-noField" >
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
                            </div>
                                {isEMoney ?
                                    <div className="form__section">
                                        <div className="form__fieldSet">
                                            <div className="form__field">
                                                <div className="form__tooltips">
                                                    <label htmlFor="eMoneyNumber" className={`form__label ${!isValid.eNumber && "form__label-wrong"}`}>
                                                        e-Money Number
                                                    </label>
                                                    <span className="form__wrongFormat">
                                                        Wrong format
                                                    </span>
                                                </div>
                                                <input id="eMoneyNumber" type="number" className="form__input" placeholder="238521993" />
                                            </div>
                                            <div className="form__field">
                                                <div className="form__tooltips">
                                                    <label htmlFor="eMoneyPin" className={`form__label ${!isValid.eNumber && "form__label-wrong"}`}>
                                                        e-Money PIN
                                                    </label>
                                                </div>
                                                <input id="eMoneyPin" type="number" className="form__input" placeholder="6891" />
                                            </div>
                                        </div>
                                    </div> :
                                    <div className="form__section">
                                        <div className="form__cash" >
                                            <span className="form__cashImgWrapper" >
                                                <img src="/assets/checkout/icon-cash-on-delivery.svg"/>
                                            </span>
                                            <p className="form__cashDescription" >
                                                The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.
                                            </p>
                                        </div>
                                    </div>
                                }
                        </fieldset>
                        <fieldset className="checkoutCart" >
                            <h6>
                                Summary
                            </h6>
                            <ul>
                                {cart.map(item => {
                                    return (
                                        <li key={item.id}>
                                            <div className="checkoutCart__item" >
                                                <div className="checkoutCart__imgWrapper" >
                                                    <img src={item.picture} />
                                                </div>
                                                <div className="checkoutCart__info" >
                                                    <span className="checkoutCart__name" >
                                                        {item.name}
                                                    </span>
                                                    <span className="checkoutCart__cost" >
                                                        $ {(item.cost * item.amount).toLocaleString()}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="checkoutCart__amount" >
                                                <span>
                                                    x{item.amount}
                                                </span>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="checkoutCart__priceItem">
                                <span className="checkoutCart__priceTitle">
                                    Total
                                </span>
                                <span className="checkoutCart__price">
                                    $ {cart.reduce((accumulator, item) => {
                                        return accumulator + (item.cost * item.amount)
                                    }, 0).toLocaleString()}
                                </span>
                            </div>
                            <div className="checkoutCart__priceItem">
                                <span className="checkoutCart__priceTitle">
                                    Shipping
                                </span>
                                <span className="checkoutCart__price">
                                    $ 50
                                </span>
                            </div>
                            <div className="checkoutCart__priceItem">
                                <span className="checkoutCart__priceTitle">
                                    VAT (Included)
                                </span>
                                <span className="checkoutCart__price">
                                    $ {Math.round(cart.reduce((accumulator, item) => {
                                        return accumulator + (item.cost * item.amount)
                                    }, 0) * 0.2).toLocaleString()}
                                </span>
                            </div>
                            <div className="checkoutCart__priceItem checkoutCart__priceItem-grand">
                                <span className="checkoutCart__priceTitle">
                                    Grand total
                                </span>
                                <span className="checkoutCart__price checkoutCart__price-grand">
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
