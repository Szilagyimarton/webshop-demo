import {  useEffect,  useState } from "react"
import Product from "./Product"
import './Home.css'
import Form from 'react-bootstrap/Form';
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
      <div className="searchbar">
        <Form.Control type="text" name="searchbar" id="searchbar" /* value={searchString} */ onChange={handleSearching} placeholder="Search.." />
      </div>
      <div className="home">
        {products && filteredProducts && filteredProducts.map((product, index) => <Product product={product} key={index} />)}
      </div>
    </>
  )
}

export default Home