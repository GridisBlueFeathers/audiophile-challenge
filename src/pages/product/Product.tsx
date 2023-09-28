import { MouseEvent, useState } from "react";
import { useNavigate, useParams, Link, useAsyncValue, Navigate } from "react-router-dom";
import { DocumentSnapshot } from "firebase/firestore";
import About from "../../components/about/About";
import MainNav from "../../components/mainNav/MainNav";
import "./Product.scss";
import { type ProductData } from "../../utils/loaders/productLoader";
import { useDispatch } from "react-redux";
import { addProduct } from "../../components/cart/cartSlice";

const Product = () => {
    const { category, product } = useParams<{
        category: string;
        product: string;
    }>();

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [productAmount, setProductAmount] = useState(1)

    const productDoc = useAsyncValue() as DocumentSnapshot;
    const productData = productDoc.data() as ProductData;

    if (productData.category !== category) {
        return <Navigate to="/not-found" />
    }

    const handleIncreaseProductAmount = () => {
        setProductAmount(productAmount + 1);
    };

    const handleDecreaseProductAmount = () => {
        if (productAmount) {
            setProductAmount(productAmount - 1);
        }
    };

    const handleAddToCart = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        dispatch(addProduct({
            id: productData.id,
            name: productData.name,
            picture: `/assets/cart/image-${productDoc.id}.jpg`,
            amount: productAmount,
            cost: productData.price
        }))
    }

    const includesItems = productData.includes.map(
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

    const othersItems = productData.others.map(
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
                                    media="(min-width: 630px)"
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

    return (
        <main className="product">
            <section className="product__back">
                <button onClick={() => {navigate(-1)}}>Go Back</button>
            </section>
            <section className="product__info">
                <div className="product__imageWrapper">
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet={`/assets/product-${product}/desktop/image-product.jpg`}
                        />
                        <source
                            media="(min-width: 630px)"
                            srcSet={`/assets/product-${product}/tablet/image-product.jpg`}
                        />
                        <img
                            src={`/assets/product-${product}/mobile/image-product.jpg`}
                            alt={`${productData.name} picture`}
                        />
                    </picture>
                </div>
                <div className="product__infoText">
                    {productData.new && (
                        <span className="product__new">new product</span>
                    )}
                    <h2 className={`${productData.new ? "product__nameNew" : "product__name"}`}>{productData.name}</h2>
                    <p className="product__desc">{productData.description}</p>
                    <span className="product__price">
                        $ {productData.price.toLocaleString()}
                    </span>
                    <div className="product__cartControls">
                        <button className="product__cartAmountChange" onClick={handleDecreaseProductAmount}>-</button>
                        <span className="product__cartAmount">
                            {productAmount}
                        </span>
                        <button className="product__cartAmountChange" onClick={handleIncreaseProductAmount}>+</button>
                        <button className="product__cartAdd" onClick={handleAddToCart}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </section>
            <section className="product__features">
                <div className="product__featuresItems">
                    <h3>features</h3>
                    <p className="product__featuresText">
                        {productData.featuresPOne}
                        <br />
                        <br />
                        {productData.featuresPTwo}
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
                                media="(min-width: 426px)"
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
                                media="(min-width: 426px)"
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
                            media="(min-width: 426px)"
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
            <MainNav navClass="product__nav"/>
            <About sectionClass="product__about" />
        </main>
    );
};

export default Product;
