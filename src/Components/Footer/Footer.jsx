import styles from '../Footer/Footer.module.css';
import { Link} from 'react-router-dom';

//Methods loga's
import visa from '../../assets/visa.svg';
import visaEle from '../../assets/visa-ele.svg';

const Footer = () => {
    return (
        <footer>
            <section className={styles.categories}>
                <h5>Categories</h5>

                <ul>
                    <li><Link to="/category/man">Men's clothing</Link></li>
                    <li><Link to="/category/women">Women's clothing</Link></li>
                    <li><Link to="/category/eletronic">Electronics</Link></li>
                    <li><Link to="/category/jewelery">Jewelery</Link></li>
                </ul>
            </section>
            <section className={styles.payMethods}>
            <ul>
                    <li><img src={visa}/></li>
                    <li><img src={visaEle}/></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            <section>

            </section>
            <section>

            </section>
        </footer>
    )
}

export default Footer;