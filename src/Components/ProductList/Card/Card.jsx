import rock from '../../../assets/rock.png';

import styles from './Card.module.css';

const Card = ({product}) => {

    return (
        <>
            <div className={styles.cardContainer}>
                <img src={rock} alt="Pic"/>
                <p>{product.title}</p>
            </div> 
        </>
    )
}

export default Card;