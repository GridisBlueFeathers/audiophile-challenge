import { Link, useAsyncValue, useParams } from "react-router-dom";
import MainNav from "../../components/mainNav/MainNav";
import About from "../../components/about/About";
import { DocumentSnapshot } from "firebase/firestore";
import { CategoryData } from "../../utils/loaders/categoryLoader";
import "./Category.scss"

const Category = () => {
    const { category } = useParams();

    const categoryDoc = useAsyncValue() as DocumentSnapshot;
    const categoryData = categoryDoc.data() as CategoryData;

    return (
        <main className="category">
            <h2>{category}</h2>
            <section className="items">
                <ul>
                    {
                        categoryData.items.map((item, index) => {
                            return (
                                <li key={item.uri} className={`${(index % 2) ? "reversed" : ""}`}>
                                    <Link to={item.uri}>
                                        <div className="items__imageWrapper">
                                            <picture>
                                                <source
                                                    media="(min-width: 769px)" 
                                                    srcSet={`/assets/product-${item.uri}/desktop/image-category-page-preview.jpg`}
                                                />
                                                <source
                                                    media="(min-width: 426px)" 
                                                    srcSet={`/assets/product-${item.uri}/tablet/image-category-page-preview.jpg`}
                                                />
                                                <img
                                                    src={`/assets/product-${item.uri}/mobile/image-category-page-preview.jpg`}
                                                    alt={`${item.name} picture`}
                                                />
                                            </picture>
                                        </div>
                                        <div className="items__itemInfo">
                                            <span className={`items__new${item.new ? "" : " invisible"}`}>New product</span>
                                            <h2>
                                                {item.name}
                                                <br />
                                                {item.category}
                                            </h2>
                                            <p>
                                                {item.description}
                                            </p>
                                            <button>
                                                See product
                                            </button>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            <MainNav navClass="home__nav"/>
            <About sectionClass="home__about"/>
        </main>
    )
};

export default Category;
