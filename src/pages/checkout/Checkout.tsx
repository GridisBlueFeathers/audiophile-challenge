import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const navigate = useNavigate();

    return (
        <main>
        <section className="back">
            <button onClick={() => {navigate(-1)}}>Go Back</button>
        </section>
        <section className="form">
        a
        </section>
        <section className="cart">
        b
        </section>
        </main>
    )
};

export default Checkout;
