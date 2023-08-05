import { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../api/getProduct";

const Product: FC = () => {
    const { product } = useParams<{ category?: string; product: string }>();
    const navigate = useNavigate()

    useEffect(() => {
        const getProductData = async (product: string) => {
            try {
                const productData = await getProduct(product)
                console.log(productData.data());
            } catch {
                navigate("/not-found");
            }
        }

        if (product) {
            getProductData(product)
        }
    });

    return <main></main>;
};

export default Product;
