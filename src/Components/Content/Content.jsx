
import Header  from "../Header/Header";
import ProductList from '../ProductList/ProductList';


//CSS
import styles from './Content.module.css';


const Content = ({pictures, products}) => {

    return (
        <>
        <Header pictures={pictures}/>
        <section className={styles.content}>
            <ProductList />
        </section>

        </>
    )
}

export default Content;