  // Import Components
  import { useState, useEffect } from 'react';
  import leftArrow from '../../assets/leftArrow.svg';
  import rightArrow from '../../assets/rightArrow.svg'

  
  // Import css
  import styles from '../Header/Header.module.css';
  
  const Header = ({pictures}) => {
   
    const [carousel, setCarousel] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCarousel((prev) => (prev >= pictures.length -1 ? 0 : prev +1))
      }, 3000);

      return () => clearInterval(interval);
    }, [])

    const slideStyle = (index) => ({
        transform: `translateX(${(index - carousel) * 100}%)`,
    });

    const arrowLeft = () => {
        //Am I on the first slide? If true go to last slide if false go preview slide. Note: after the => are brakets is is conditional statment
        setCarousel((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
    }

    const arrowRight = () => {
        //Check if the current slide is the last. Note: after the => are brakets is is conditional statment
        setCarousel((prev) => (prev === pictures.length -1 ? 0 : prev +1));
    }
  
    return (
      <header>
        <div className={styles.containerForArrows}>
            <img 
                src={leftArrow} 
                alt="Move the slight to left" width="48"
                onClick={() => arrowLeft()}
                className={styles.arrowLeft}
            />
            <img 
                src={rightArrow} 
                alt="Move the slight to the right" 
                width="48"
                onClick={() => arrowRight()}
                className={styles.arrowRight}
            />
        </div>
        <div className={styles.containerBullets}>
            {pictures.map((point, index) => 
              <p
                className={carousel === index ? styles.bulletActive : styles.bulletInactive}
                key={index}>
              </p>
            )}
          </div>

        {pictures.map((img, index) => (
        <div
          key={index}
          className={styles.containerForEachPicture}
          style={slideStyle(index)}
        >
          <img src={img.url} alt={img.salesText} />
          <div className={styles.sellOffer}>
            <h2>{img.salesText.title}</h2>
            <p>{img.salesText.description}</p>
          </div>

        </div>
      ))}

      </header>
    );
  };
  
  export default Header;