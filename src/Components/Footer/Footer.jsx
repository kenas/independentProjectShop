import styles from '../Footer/Footer.module.css';
import { Link} from 'react-router-dom';

//Methods loga's
import visa from '../../assets/visa.svg';
import visaEle from '../../assets/visa-ele.svg';
import paypal from '../../assets/Paypal.svg';
import payu from '../../assets/PayU.svg';
import mastercard from '../../assets/mastercard.svg';
import mastercard2 from '../../assets/mastercard2.svg';
import bigLogo from '../../assets/bigLogo.svg';


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
                    <li><img src={paypal}/></li>
                    <li><img src={payu}/></li>
                    <li><img src={mastercard}/></li>
                    <li><img src={mastercard2}/></li>
                </ul>
            </section>
            <section>
                <div className={styles.containerSub}>
                    <input type="text" name="email" placeholder="Your email"/>
                    <button>subscribe</button>
                </div>

            </section>
               
            <section>
                <div className={styles.containerLogo}>
                    <img src={bigLogo}/>
                    <p>Gessify</p>
                </div>
            </section>
        </footer>
    )
}

export default Footer;