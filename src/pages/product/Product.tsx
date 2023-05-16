import { FC } from "react";
import { useParams } from "react-router-dom";

const Product:FC = () => {
    const { product } = useParams()

    return (
        <main>
            {product}
        </main>
    )
}

export default Product;