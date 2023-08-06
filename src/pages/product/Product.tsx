import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../api/getProduct";
import About from "../../components/about/About";
import MainNav from "../../components/mainNav/MainNav";

const Product: FC = () => {
    const { product } = useParams<{ category: string; product: string }>();
    const navigate = useNavigate();

    useEffect(() => {
        const getProductData = async (product: string) => {
            try {
                const productData = await getProduct(product);
                console.log(productData.data());
            } catch {
                navigate("/not-found");
            }
        };

        if (product) {
            getProductData(product);
        }
    });

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <main>
            <section>
                <button onClick={handleGoBack}>
                    Go Back
                </button>
            </section>
            <MainNav />
            <About sectionClass="product" />
        </main>
    );
};

export default Product;
