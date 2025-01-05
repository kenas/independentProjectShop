import { useParams } from "react-router-dom";
const ProductCategory = () => {
    const {cat} = useParams();
    return (

        <>
        <p>The Category: {cat}</p>
        </>
    )
}

export default ProductCategory;