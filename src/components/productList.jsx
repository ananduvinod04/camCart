
import products from '../data/products';
import "./productList.css"

import ProductCard from './productCard';
export default function ProductList(){
    return(<>
    
     <div className='main'>
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Our Products</h1>
      <div className='customProductListContainer' >
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>)
}