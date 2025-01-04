import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";



const NavBar = () => {
    return (
        <>
        <Link to="category/man">Man</Link>
        <Link to="category/woman">Woman</Link>
        <Link to="category/eletronic">Eletronic</Link>
        <Link to="home">Home</Link>
     
        <Outlet />
        </>
    )
}

export default NavBar;