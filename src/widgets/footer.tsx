import { Logo } from "../shared/logo"


export const Footer = () => {

    return(
        <>
            <footer>
                <div className="footer-colomn">
                    <Logo />
                    <p className="footer-colomn-text orbitron-regular">Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .</p>
                </div>
                <div className="footer-colomn">
                    <h4 className="footer-colomt-title orbitron-regular">Menu Items</h4>
                    <ul className="footer-colomn-list">
                        <li className="colomn-list-item"><a href="!#" className="colomn-list-link orbitron-regular">About</a></li>
                        <li className="colomn-list-item"><a href="!#" className="colomn-list-link orbitron-regular">Blog</a></li>
                        <li className="colomn-list-item"><a href="!#" className="colomn-list-link orbitron-regular">Shop</a></li>
                        <li className="colomn-list-item"><a href="!#" className="colomn-list-link orbitron-regular">Contact us</a></li>
                    </ul>
                </div>
                <div className="footer-colomn">
                    <h4 className="footer-colomt-title orbitron-regular">Other Pages</h4>
                    <ul className="footer-colomn-list">
                        <li className="colomn-list-item"><a href="!#" className="colomn-list-link orbitron-regular">Styleguide</a></li>
                        <li className="colomn-list-item"><a href="!#" className="colomn-list-link orbitron-regular">Changelog</a></li>
                        <li className="colomn-list-item"><a href="!#" className="colomn-list-link orbitron-regular">licenses</a></li>
                        <li className="colomn-list-item"><a href="!#" className="colomn-list-link orbitron-regular">Team</a></li>
                    </ul>
                </div>

            </footer>
        </>
    )
}