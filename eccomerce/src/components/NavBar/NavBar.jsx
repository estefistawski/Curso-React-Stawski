import CartWidget from "../CartWidget/CartWidget";
const NavBar =()=>{
    return(
        <nav>
        <h3>ECCOMERCE</h3>
        <div>
            <button>Remeras</button>
            <button>Pantalones</button>
            <button>Calzado</button>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar;