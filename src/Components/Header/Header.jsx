  // Import Components
  import { useState } from 'react';

  
  // Import css
  import styles from '../Header/Header.module.css';
  
  const Header = ({pictures}) => {
    console.log(pictures);
    const [carousel, setCarousel] = useState(0);
  
    return (
      <>
        <div className={styles.heroContainer}>
    
        </div>

      </>
    );
  };
  
  export default Header;