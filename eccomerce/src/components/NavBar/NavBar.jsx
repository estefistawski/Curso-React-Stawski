import CartWidget from "../CartWidget/CartWidget";
const NavBar =()=>{
    return(
        <nav>
        <h3 className="eccomerce">ECCOMERCE</h3>
        <div>
        <button type="button" className="btn btn-outline-dark">Remeras</button>
        <button type="button" className="btn btn-outline-dark">Pantalones</button>
        <button type="button" className="btn btn-outline-dark">Calzado</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar;