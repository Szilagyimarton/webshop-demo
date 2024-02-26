import {  useEffect,  useState } from "react"
import Product from "./Product"
import './Home.css'


function Home({products}) {

  const [searchString, setSearchString] = useState("")

  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);
  

  const handleSearching = (e) => {
    setSearchString(e.target.value)
    const filteredData = products.filter(el => el.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredProducts(filteredData)
 
  }
  

  return (
      <>
        <input type="text" name="searchbar" id="searchbar" /* value={searchString} */ onChange={handleSearching} /><div className="home">
        {products && filteredProducts && filteredProducts.map((product, index) => <Product product={product} key={index} />)}
      </div>
    </>
  )
}

export default Home