import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainNav from "../../components/mainNav/MainNav";

const Category:FC = () => {
    const { category } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [category]);

    return (
        <main>
            {category}
            <MainNav/>
            <MainNav/>
            <MainNav/>
        </main>
    )
};

export default Category;