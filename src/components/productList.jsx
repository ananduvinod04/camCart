import products from '../data/products';
import './productList.css';
import ProductCard from './productCard';

// Helper functions
const parsePrice = (priceStr) => parseFloat(priceStr.replace(/[^\d]/g, ''));
const parseRating = (ratingStr) => (ratingStr.match(/★/g) || []).length;

export default function ProductList({ searchTerm, sortOption }) {
  // Filter based on search term
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'priceLow') {
      return parsePrice(a.price) - parsePrice(b.price);
    } else if (sortOption === 'priceHigh') {
      return parsePrice(b.price) - parsePrice(a.price);
    } else if (sortOption === 'ratingHigh') {
      return parseRating(b.rating) - parseRating(a.rating);
    }
    return 0; // default: no sort
  });

  return (
    <div className='main'>
      <h1 className="text-3xl font-bold mb-6 text-center text-white">Our Products</h1>
      <div className='customProductListContainer'>
        {sortedProducts.length > 0 ? (
          sortedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-white text-center">No products found.</p>
        )}
      </div>
    </div>
  );
}
