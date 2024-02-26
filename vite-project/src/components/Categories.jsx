import  {  useEffect, useState } from 'react'
import Product from './Product'

function Categories({selectedCat,products}) {
 
  const [category, setCategory] = useState([])

  useEffect(() => {
    if(products){

      const productsOfcategory = products.filter(el => el.category === selectedCat)
      setCategory(productsOfcategory) 
    }

  },[products,selectedCat])




  return (
    <div className='category'>{category.length > 0 ?
       category.map((product,index) => <Product key={index} product={product}/>)
      :
      "Please select a category!"
      }</div>
  )
}

export default Categories