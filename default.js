import { products } from './constants/products.js'
import Product from './model/productSchema.js'

const Defaultdata = async () => {
    try {
        await Product.deleteMany({})
        await Product.insertMany(products);
        console.log('data inserted successfully')
    } catch (error) {
        console.log(error.message)
    }

}

export default Defaultdata;