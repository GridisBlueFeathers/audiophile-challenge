import { FC } from "react";
import { useParams } from "react-router-dom";
import MainNav from "../../components/mainNav/MainNav";

const Category:FC = () => {
    const { category } = useParams()

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