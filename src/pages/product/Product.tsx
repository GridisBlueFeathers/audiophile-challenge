import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import About from "../../components/about/About";
import MainNav from "../../components/mainNav/MainNav";
import "./Product.css";
import { firestore } from "../../api/firebase";
import { doc } from "firebase/firestore";

const Product = () => {
    const { category, product } = useParams<{
        category: string;
        product: string;
    }>();
    const navigate = useNavigate();
    const [productAmount, setProductAmount] = useState(1)
    const [snapshot, loading] = useDocumentOnce(doc(firestore, `/products/${product}`));

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleIncreaseProductAmount = () => {
        setProductAmount(productAmount + 1);
    };

    const handleDecreaseProductAmount = () => {
        if (productAmount) {
            setProductAmount(productAmount - 1);
        }
    };

    const includesItems = snapshot?.data()?.includes.map(
        (item: { item: string; quantity: number }) => {
            return (
                <li key={item.item}>
                    <span className="product__boxQuantity">
                        {item.quantity}x
                    </span>
                    <span className="product__boxItem">{item.item}</span>
                </li>
            );
        }
    );

    const othersItems = snapshot?.data()?.others.map(
        (other: { id: string; link: string; name: string }) => {
            return (
                <li key={other.id}>
                    <Link to={other.link}>
                        <div className="product__otherImgWrapper">
                            <picture>
                                <source
                                    media="(min-width: 769px)"
                                    srcSet={`/assets/shared/desktop/image-${other.id}.jpg`}
                                />
                                <source
                                    media="(min-width: 425px)"
                                    srcSet={`/assets/shared/tablet/image-${other.id}.jpg`}
                                />
                                <img
                                    src={`/assets/shared/mobile/image-${other.id}.jpg`}
                                    alt=""
                                />
                            </picture>
                        </div>
                        <h5>{other.name}</h5>
                        <span className="product__otherLinkButton">
                            See product
                        </span>
                    </Link>
                </li>
            );
        }
    );

    if (loading) {
        return <main>Loading...</main>;
    }

    if (snapshot?.data()?.category !== category) {
        navigate("/not-found")
    }

    return (
        <main className="product">
            <section>
                <button onClick={handleGoBack}>Go Back</button>
            </section>
            <section className="product__info">
                <div className="product__imageWrapper">
                    <picture>
                        <source
                            media="(min-width: 769px)"
                            srcSet={`/assets/product-${product}/desktop/image-product.jpg`}
                        />
                        <source
                            media="(min-width: 425px)"
                            srcSet={`/assets/product-${product}/tablet/image-product.jpg`}
                        />
                        <img
                            src={`/assets/product-${product}/mobile/image-product.jpg`}
                            alt={`${snapshot?.data()?.name} picture`}
                        />
                    </picture>
                </div>
                <div className="product__infoText">
                    {snapshot?.data()?.new && (
                        <span className="product__new">new product</span>
                    )}
                    <h2>{snapshot?.data()?.name}</h2>
                    <p className="product__desc">{snapshot?.data()?.description}</p>
                    <span className="product__price">
                        $ {snapshot?.data()?.price}
                    </span>
                    <div className="product__cartControls">
                        <button className="product__cartAmountChange" onClick={handleDecreaseProductAmount}>-</button>
                        <span className="product__cartAmount">
                            {productAmount}
                        </span>
                        <button className="product__cartAmountChange" onClick={handleIncreaseProductAmount}>+</button>
                        <button className="product__cartAdd">
                            Add to cart
                        </button>
                    </div>
                </div>
            </section>
            <section className="product__features">
                <div className="product__featuresItems">
                    <h3>features</h3>
                    <p className="product__featuresText">
                        {snapshot?.data()?.featuresPOne}
                        <br />
                        <br />
                        {snapshot?.data()?.featuresPTwo}
                    </p>
                </div>
                <div className="product__box">
                    <h3>in the box</h3>
                    <ul>{includesItems}</ul>
                </div>
            </section>
            <section className="product__pictures">
                <div className="product__side">
                    <div className="product__sideImgWrapper">
                        <picture>
                            <source
                                media="(min-width: 769px)"
                                srcSet={`/assets/product-${product}/desktop/image-gallery-1.jpg`}
                            />
                            <source
                                media="(min-width: 425px)"
                                srcSet={`/assets/product-${product}/tablet/image-gallery-1.jpg`}
                            />
                            <img
                                src={`/assets/product-${product}/mobile/image-gallery-1.jpg`}
                                alt=""
                            />
                        </picture>
                    </div>
                    <div className="product__sideImgWrapper">
                        <picture>
                            <source
                                media="(min-width: 769px)"
                                srcSet={`/assets/product-${product}/desktop/image-gallery-2.jpg`}
                            />
                            <source
                                media="(min-width: 425px)"
                                srcSet={`/assets/product-${product}/tablet/image-gallery-2.jpg`}
                            />
                            <img
                                src={`/assets/product-${product}/mobile/image-gallery-2.jpg`}
                                alt=""
                            />
                        </picture>
                    </div>
                </div>
                <div className="product__mainImgWrapper">
                    <picture>
                        <source
                            media="(min-width: 769px)"
                            srcSet={`/assets/product-${product}/desktop/image-gallery-3.jpg`}
                        />
                        <source
                            media="(min-width: 425px)"
                            srcSet={`/assets/product-${product}/tablet/image-gallery-3.jpg`}
                        />
                        <img
                            src={`/assets/product-${product}/mobile/image-gallery-3.jpg`}
                            alt=""
                        />
                    </picture>
                </div>
            </section>
            <section className="product__others">
                <h3>You may also like</h3>
                <ul>{othersItems}</ul>
            </section>
            <MainNav />
            <About sectionClass="product__about" />
        </main>
    );
};

export default Product;
