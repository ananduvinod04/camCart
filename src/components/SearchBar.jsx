export default function SearchBar({ searchTerm, onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="p-2 rounded w-full md:w-64 text-black"
    />
  );
}
