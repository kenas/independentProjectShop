//Components
import logo from '../../assets/logo.svg';
import cart from '../../assets/cart.svg';
import { Outlet, NavLink} from "react-router-dom";
import magnifying from '../../assets/magnifying.svg';

//Local css
import styles from '../NavBar/NavBar.module.css';

const NavBar = () => {
    return (
        <>
        <nav className={styles.navBar}>

                <div className={styles.navBarLogoContainer}>
                    <NavLink to="/">
                        <img src={logo} alt="Logo Gessify"/>
                    </NavLink>
                    <p>Gessify</p>
                </div>
          
                <ul className={styles.navBarLinksContainer}>
                    <li>
                        <NavLink to='/search'>
                           
                                <div className={styles.searchContainerBackground}>
                                <img 
                                    src={magnifying} 
                                    alt="Search for products"
                                    className={styles.magnifyingPosition}
                                />
                                </div>

                       
                        </NavLink>
                    </li>
                    <li><NavLink to="/home" className={({ isActive }) => (isActive ? styles.active : '')}>Home</NavLink></li>
                    <li><NavLink to="/category/man" className={({ isActive }) => (isActive ? styles.active : '')}>Man</NavLink></li>
                    <li><NavLink to="/category/woman" className={({ isActive }) => (isActive ? styles.active : '')}>Woman</NavLink></li>
                    <li><NavLink to="/category/eletronic" className={({ isActive }) => (isActive ? styles.active : '')}>Eletronic</NavLink></li>
                    <li><NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : '')}>Log in</NavLink></li>
                    <li><NavLink to="/signup"><button className="">sing up</button></NavLink></li>
                    <li>
                        <NavLink to="/cart">
                            <div className={styles.counter}>0</div>
                            <img src={cart} alt="You Cart"/>
                        </NavLink>
                    </li>
                    <li><NavLink to="/cart">00,00</NavLink></li>
                </ul>

        </nav>
        <Outlet />
        </>
    )
}

export default NavBar;