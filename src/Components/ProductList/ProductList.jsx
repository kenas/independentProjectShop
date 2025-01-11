// import {getAllProducts} from '../Services/API';
import { simulateDataFromAPI } from '../Services/Data';
import { useState, useEffect } from 'react';
import Card from '../ProductList/Card/Card';
import {firstLetterUpperCase} from '../Helper/Helper';

import leftArrow from '../../assets/leftArrowContent.svg';
import rightArrow from '../../assets/rightArrowContent.svg';

// import styles from './Card/Card.module.css';
import styles from '../ProductList/ProductList.module.css';

const ProductList = () => {

    const [groupByCategory, setGroupByCategory] = useState({});
    const [trackIndex, setTrackIndex] = useState({});

    const ItemsPerPage = 4;

    //Here simulate you are calling API
    useEffect(() => {
        
        const getData = async () => {
            const fetchData = await simulateDataFromAPI();
  
            const categories = fetchData.reduce((acc, eachObject) => {
                const category = eachObject.category;

                !acc[category] ? acc[category] = [] : acc[category].push(eachObject);
                return acc;
            }, {});

            setGroupByCategory(categories);

            const initTackIndex = Object.keys(categories).reduce((acc, category) => {
                acc[category] = 0;
                return acc;
            }, {});

            setTrackIndex(initTackIndex);
        }

        getData()

    }, [])

    const next = (category) => {
      if(trackIndex[category] + ItemsPerPage < groupByCategory[category].length) {
        setTrackIndex((prev) => ( {
                // Getting the object from the trackIndex state, where ...prev is creating a new object.
                // The [category] accesses the category's key, and prev[category] gives the previous index value
                // Then, we increment ItemsPerPage from the previous index to move back
            ...prev, [category]: prev[category] + ItemsPerPage
        }))
      }
    }

    const back = (category) => {

        if(trackIndex[category] > 0) {
            setTrackIndex((prev) => ({
                // Getting the object from the trackIndex state, where ...prev is creating a new object.
                // The [category] accesses the category's key, and prev[category] gives the previous index value
                // Then, we subtract ItemsPerPage from the previous index to move back
                ...prev, [category]: prev[category] - ItemsPerPage
            }))
        }
    }

    const productSlide = (category) => {
        // Calculate the translation based on trackIndex
        const translatePercentage = -(trackIndex[category] || 0) * (100 / ItemsPerPage);
        return { transform: `translateX(${translatePercentage}%)`, transition: 'transform 0.5s ease-in-out' };
    };


    return (
        <>
            {Object.entries(groupByCategory).map(([category, products]) => {
                return (
                    <div key={category}>
                        <h2>{firstLetterUpperCase(category)}</h2>
                        <div className={styles.containerProducts}>
                            <img
                                src={leftArrow}
                                alt="Move content to left"
                                onClick={() => back(category)}
                                className={styles.arrowLeft}
                            />
                            <div className={styles.slider} style={productSlide(category)}>
                                {products.map((product) => (
                                    <Card
                                        key={product.id}
                                        product={product}
                                        category={category}
                                    />
                                ))}
                            </div>
                            <img
                                src={rightArrow}
                                alt="Move content to right"
                                onClick={() => next(category)}
                                className={styles.arrowRight}
                            />
                        </div>
                    </div>
                );
            })}
        </>
    );

    // return (
    //     <>
    //         {Object.entries(groupByCategory).map(([category, eachObject], index) => {
    //             const visibleProducts = eachObject.slice(trackIndex[category], trackIndex[category] + ItemsPerPage);
    //             return (
    //           <div key={category}>  
    //             <h2>{category}</h2>
    //             <div className={styles.containerProducts}>
    //                 <img src={leftArrow} alt="Move content to left" onClick={() => back(category)}/>
    //                 <div className={styles.slider} style={productSlide(category)}>
    //                     {visibleProducts.map((product) => (
    //                         <Card
                   
    //                             key={product.id}
    //                             product={product}
    //                             category={category}
    //                         />
                        
    //                     ))}
    //                 </div>
    //                 <img src={rightArrow} alt="Move content to right" onClick={() => next(category)}/>
    //             </div>
    //             </div>
    //            ) 
    //         })}
    //     </>
    // )
}

export default ProductList;