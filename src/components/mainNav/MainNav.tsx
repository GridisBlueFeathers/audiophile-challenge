import { FC } from "react";
import { Link } from "react-router-dom";
import headphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "/assets/shared/desktop/icon-arrow-right.svg";


const MainNav:FC = () => {
    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <Link to={"/headphones"}>
                        <div className="mainNav__imgContainer">
                            <img src={headphones} alt="" />
                        </div>
                        <p>
                            Headphones
                        </p>
                        <p>
                            <span>
                                Shop
                            </span>
                            <div>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/speakers"}>
                        <div className="mainNav__imgContainer">
                            <img src={speakers} alt="" />
                        </div>
                        <p>
                            Speakers
                        </p>
                        <p>
                            <span>
                                Shop
                            </span>
                            <div>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </p>
                    </Link>
                </li>
                <li>
                    <Link to={"/earphones"}>
                        <div className="mainNav__imgContainer">
                            <img src={earphones} alt="" />
                        </div>
                        <p>
                            Earphones
                        </p>
                        <p>
                            <span>
                                Shop
                            </span>
                            <div>
                                <img src={arrow} alt="arrow" />
                            </div>
                        </p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav;