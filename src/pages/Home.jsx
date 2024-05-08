
import React, { useEffect, useRef, useState } from 'react'

const Home = () => {
  let inputRef = useRef();
  const [products, setproducts] = useState([]);
const [value, setvalue] = useState("");
console.log(value)
  async function fetchData() {
    let response = await fetch(`https://api.edamam.com/search?q=${value}&app_id=46630bf6&app_key=3e2f4804694e7f0283c3ce210e9b4f22`)

    let data = await response.json();
    console.log(data.hits)
    setproducts(data.hits)
  }


  useEffect(() => {
    fetchData();
  }, [value])

  const handleSearch = (e) => {
    e.preventDefault()
let search =inputRef.current.value
    // console.log(search)
setvalue(search)
  }

  return (

    <>

      <div>
        
          <div className='containerDivision'>

          <div className='searchBar'>
     <form className="d-flex "  role="search">
              <input style={{width:"400px"}} ref={inputRef} className="form-control me-2" type="search" placeholder="Search for Recipies" aria-label="Search" />
              <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
            </form>
     </div>
      

          </div>
       

     <div>
     

     <div className='cardBoxContainer'>

{products?.map((ele) => {
  return <div key={ele.id} className="cardbox" style={{ width: '18rem' }}>
    <img style={{ height: "300px" }} src={ele.recipe.image} class_Name="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title text-truncate">{ele.recipe.label}</h5>
      <p className="card-text">{ }</p>



      <button className="btn btn-primary ms-1">VIEW RECIPIE</button>
      
    </div>
  </div>
})}


</div>
     </div>
      </div>
    </>
  )
}


export default Home
