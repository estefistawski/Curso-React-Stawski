import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">TECNO MUNDO</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="categorias">
                        <div>
                        <Link to={`/category/Celular`}>Celulares</Link>
                        </div>
                        <div>
                        <Link to={`/category/Tablet`}>Tablets</Link>
                        </div>
                        <div>
                        <Link to={`/category/Computer`}>Computadoras</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div><CartWidget /></div>
        </nav>
    )
}
export default NavBar;