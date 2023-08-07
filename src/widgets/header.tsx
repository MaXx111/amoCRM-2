import { Cart } from "../shared/cart"
import { Logo } from "../shared/logo"


export const Header = () => {
    return(
        <>
            <header>
                <div className="header-wrapper">
                    <a href="!#" className="heaeder-logo"><Logo /></a>
                    <nav className="nav">
                        <ul className="nav-list">
                            <li className="nav-list-item">
                                <a href="!#" className="nav-list-link nav-list-link_active orbitron-regular">Home</a>
                            </li>
                            <li className="nav-list-item">
                                <a href="!#" className="nav-list-link orbitron-regular">About</a>
                            </li>
                            <li className="nav-list-item">
                                <a href="!#" className="nav-list-link orbitron-regular">Team</a>
                            </li>
                            <li className="nav-list-item">
                                <a href="!#" className="nav-list-link orbitron-regular">Shop</a>
                            </li>
                            <li className="nav-list-item">
                                <a href="!#" className="nav-list-link orbitron-regular">Pages</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="contacts">
                        <div className="cart">
                            <a href="!#" className="cart-link"><Cart /></a>
                            <span className="cart-number orbitron-regular">0</span>
                        </div>
                        <a href="!#" className="contact-us orbitron-regular">Contact Us</a>
                    </div>
                </div>
            </header>
        </>
    )
}