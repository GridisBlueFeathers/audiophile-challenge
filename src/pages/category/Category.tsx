import { FC } from "react";
import { useParams } from "react-router-dom";

const Category:FC = () => {
    const { category } = useParams()

    return (
        <main>
            {category}
        </main>
    )
};

export default Category;