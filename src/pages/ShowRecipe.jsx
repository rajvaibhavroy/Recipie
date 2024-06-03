import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ShowRecipe = () => {
    let location = useLocation();
    console.log(location.state)
    const [products, setproducts] = useState([]);
    async function fetchData() {
        let response = await fetch(`https://api.edamam.com/search?q=${location.state}&app_id=46630bf6&app_key=3e2f4804694e7f0283c3ce210e9b4f22`)
    
        let data = await response.json();
        console.log(data.hits)
        setproducts(data.hits)
      }
    
    
      useEffect(() => {
        fetchData();
      }, [location.state])
  return (
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
  )
}

export default ShowRecipe
