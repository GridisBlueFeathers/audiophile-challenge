import { FC } from "react";
import { Link } from "react-router-dom";
import headphones from "/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "/assets/shared/desktop/image-category-thumbnail-earphones.png";
import arrow from "/assets/shared/desktop/icon-arrow-right.svg";
import "./MainNav.css"


const MainNav:FC = () => {
    return (
        <nav className="mainNav">
            <ul>
                <li>
                    <Link to={"/headphones"}>
                        <div className="mainNav__imgContainer">
                            <img src={headphones} alt="" />
                        </div>
                        <div className="mainNav__text">
                            <p className="mainNav__category">
                                Headphones
                            </p>
                            <p className="mainNav__button">
                                <span className="mainNav__shop">
                                    Shop
                                </span>
                                <span className="mainNav__arrowContainer">
                                    <img src={arrow} alt="arrow" />
                                </span>
                            </p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={"/speakers"}>
                        <div className="mainNav__imgContainer">
                            <img src={speakers} alt="" />
                        </div>
                        <div className="mainNav__text">
                            <p className="mainNav__category">
                                Speakers
                            </p>
                            <p className="mainNav__button">
                                <span className="mainNav__shop">
                                    Shop
                                </span>
                                <span className="mainNav__arrowContainer">
                                    <img src={arrow} alt="arrow" />
                                </span>
                            </p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to={"/earphones"}>
                        <div className="mainNav__imgContainer">
                            <img src={earphones} alt="" />
                        </div>
                        <div className="mainNav__text">
                            <p className="mainNav__category">
                                Earphones
                            </p>
                            <p className="mainNav__button">
                                <span className="mainNav__shop">
                                    Shop
                                </span>
                                <span className="mainNav__arrowContainer">
                                    <img src={arrow} alt="arrow" />
                                </span>
                            </p>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default MainNav;