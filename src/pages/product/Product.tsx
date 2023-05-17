import { FC } from "react";
import { useParams } from "react-router-dom";

const Product:FC = () => {
    const { category, product } = useParams()

    return (
        <main>
            {product}
            <br />
            {category}
        </main>
    )
}

export default Product;