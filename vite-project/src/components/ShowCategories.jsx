
import { Link } from "react-router-dom"


function ShowCategories({showCats, setShowCats,setSelectedCat}) {
 const handleClick = (e) => {
  setSelectedCat(e.target.innerHTML)
 }

  return (

     <div className='showCategories' style={{visibility: showCats ? "visible" : "hidden"}} onMouseLeave={() => setShowCats(false)}>
      <ul>
        <Link to="/categories" onClick={handleClick} >electronics</Link>
        <Link to="/categories" onClick={handleClick} >jewelery</Link>
        <Link to="/categories" onClick={handleClick} >men's clothing</Link>
        <Link to="/categories" onClick={handleClick}  >women's clothing</Link>    
            
      </ul>
    </div>

  )
}

export default ShowCategories