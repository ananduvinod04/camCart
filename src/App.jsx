import { useState } from "react";
import NavbarWithSearch from "./components/navbar";
import CurrentProduct from "./components/currentProduct";
import ProductList from "./components/productList";
import Footer from "./components/footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState(""); // sorting state

  return (
    <div className="webContent">
      <header>
        <NavbarWithSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
      </header>

      <section>
        <CurrentProduct />
      </section>

      <section className="p-4">
        <ProductList searchTerm={searchTerm} sortOption={sortOption} />
      </section>

      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
