import { FC } from "react";
import logo from "/assets/shared/desktop/logo.svg";

const Header:FC = () => {
    return (
        <header>
            <input type="checkbox" name="menuToggle" id="menuToggle" />
            <div className="header__logo">
                <img src={logo} alt="audiophile loge" />
            </div>
            <nav>
                <ul>
                    <li>

                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;