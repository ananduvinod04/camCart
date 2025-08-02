import  NavbarWithSearch from "./components/navbar"
import  CurrentProduct from "./components/currentProduct"
import ProductList from "./components/productList"
import Footer from "./components/footer"
function App() {
 
  return (
    <>
    <div className="webContent">
<header>
    <NavbarWithSearch />
       
      </header>
      <section>
<CurrentProduct />
      </section>
      <section>
        <ProductList />
      </section>
      <section>
        <Footer />
      </section>
      </div>
    </>
   
  )
}

export default App
