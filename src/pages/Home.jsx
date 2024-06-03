
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();
  let inputRef = useRef();
 
const [value, setvalue] = useState("");
console.log(value)


  const handleSearch = (e) => {
    e.preventDefault()
let search =inputRef.current.value
    console.log(search)
navigate('/showrecipe',{state:search})

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
     

    
     </div>
      </div>
    </>
  )
}


export default Home
