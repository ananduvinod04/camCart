import "./productCard.css";

const ProductCard = ({ product }) => {
  return (
   <div className="product-card-wrapper">
  <div className="w-[15rem] h-[20rem] bg-black text-white border border-black rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col">

  
    <div className="h-[40%]">
      <img
        className="w-full h-full object-cover rounded-t-lg"
        src={product.image}
        alt="product image"
      />
    </div>

   
    <div className="h-[60%] px-4 pt-2 pb-4 flex flex-col">
      <h2 className="text-base font-semibold leading-tight">{product.title}</h2>
      <p className="text-yellow-500 text-sm">{product.rating}</p>
      <p className="text-gray-400 text-xs flex-grow overflow-hidden text-ellipsis">
        {product.description}
      </p>
      <p className="text-base font-bold mt-1">{product.price}</p>

      <div className="mt-auto">
        <button className="w-full px-2 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
          Buy Now
        </button>
      </div>
    </div>

  </div>
</div>



  );
};

export default ProductCard;
