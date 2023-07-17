import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

const Category:FC = () => {
    const { category } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    return (
        <main>
        </main>
    )
};

export default Category;