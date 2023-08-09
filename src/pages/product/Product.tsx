import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../api/getProduct";
import About from "../../components/about/About";
import MainNav from "../../components/mainNav/MainNav";
import { DocumentData } from "firebase/firestore";
import "./Product.css";

const Product: FC = () => {
    const { category, product } = useParams<{
        category: string;
        product: string;
    }>();
    const navigate = useNavigate();
    const [productData, setProductData] = useState<DocumentData | null>(null);
    const [cartAmount /*setCartAmount*/] = useState(1);

    useEffect(() => {
        const getProductData = async (product: string) => {
            try {
                const productDocumentData = await getProduct(product);

                if (
                    productDocumentData &&
                    productDocumentData.category === category
                ) {
                    setProductData(productDocumentData);
                    return;
                }

                navigate("/not-found");
            } catch {
                navigate("/not-found");
            }
        };

        if (product) {
            getProductData(product);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleGoBack = () => {
        navigate(-1);
    };

    const includesItems = productData?.includes.map(
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

    if (!productData) {
        return <main>Loading...</main>;
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
                            alt={`${productData.name} picture`}
                        />
                    </picture>
                </div>
                <div className="product__infoText">
                    {productData.new && (
                        <span className="product__new">new product</span>
                    )}
                    <h2>{productData.name}</h2>
                    <p className="product__desc">{productData.description}</p>
                    <span className="product__price">
                        $ {productData.price}
                    </span>
                    <div className="product__cartControls">
                        <button className="product__cartAmountChange">-</button>
                        <span className="product__cartAmount">
                            {cartAmount}
                        </span>
                        <button className="product__cartAmountChange">+</button>
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
                                media="(min-width: 425px)"
                                srcSet={`/assets/product-${product}/tablet/image-gallery-1.jpg`}
                            />
                            <img src={`/assets/product-${product}/mobile/image-gallery-1.jpg`} alt="" />
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
                            <img src={`/assets/product-${product}/mobile/image-gallery-2.jpg`} alt="" />
                        </picture>
                    </div>
                </div>
            </section>
            <MainNav />
            <About sectionClass="product__about" />
        </main>
    );
};

export default Product;
