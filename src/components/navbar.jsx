import "./navbar.css";
import SearchBar from "./SearchBar";

export default function NavbarWithSearch({ searchTerm, setSearchTerm, sortOption, setSortOption }) {
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 fixed top-0 left-0 w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/photo-camera-photograph-svgrepo-com.svg"
            className="h-8"
            alt="CamCart Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white px-4">
            camCart
          </span>
        </a>

        {/* Sort Dropdown */}
        <div className="mb-2 sm:mb-0">
         
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-2 rounded text-black"
          >
            <option value="">None</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="ratingHigh">Rating: High to Low</option>
          </select>
        </div>

        {/* SearchBar */}
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      </div>
    </nav>
  );
}
