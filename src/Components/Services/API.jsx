export const getAllProducts  = async (category = '') => {

    try {
        const response = await fetch('https://fakestoreapi.com/products', {

            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(!response.ok) {
            throw new Error('I coud not reach API');
        } else {

            
            const data = await response.json();
            
            const products = category ? data.filter(product => product.category === category) : data
            return products;
        }

    } catch(error) {
        console.error(error);
    }
}