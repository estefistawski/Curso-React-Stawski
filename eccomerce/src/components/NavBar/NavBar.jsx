import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand">HP BURGERS</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" aria-current="page" href="#">Combos</a>
                        <a className="nav-link" href="#">Burgers</a>
                        <a className="nav-link" href="#">Para acompañar</a>
                        <a className="nav-link" href="#">Bebidas</a>
                    </div>
                </div>
            </div>
            <div><CartWidget /></div>
        </nav>
    )
}
export default NavBar;