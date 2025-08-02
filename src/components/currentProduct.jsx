
import "./currentProduct.css"
export default function CurrentProduct() {
  return (
    <>
<div className="currentProductContainer">
<div className="product-card-wrappers">
  <div className="w-[20rem] h-[18rem] bg-black text-white border border-black rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col">

  
    <div className="h-[40%]">
      <img
        className="w-full h-full object-cover rounded-t-lg"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiuKhO6MQ-E0ZLJyRBdwia2yJqq6MoQyVGo-kV7mKvvJ9I5vmpcpFget5Ze0fKZKP3Ne3jW7qaOdedTVrzb_WQe-yA315qHSJG6xXbSSNijJ65wDEw_xcHI539qj7vm16-pUHkNU3ed18EF/s1600/L1036595.jpg"
        alt="product image"
      />
    </div>

   
    <div className="h-[60%] px-4 pt-2 pb-4 flex flex-col">
      <h2 className="text-base font-semibold leading-tight">Pentax K-70</h2>
      <p className="text-yellow-500 text-sm">⭐⭐⭐</p>
      <p className="text-gray-400 text-xs flex-grow overflow-hidden text-ellipsis">
       DSLR Camera with 18-135mm Lens (Black)
      </p>
      <p className="text-base font-bold mt-1">₹78,990</p>

      <div className="mt-auto">
        <button className="w-full px-2 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
          Buy Now
        </button>
      </div>
    </div>

  </div>
</div>
</div>
    
 
    
    </>
  );
}
