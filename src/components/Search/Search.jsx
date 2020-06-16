import React, { useState } from 'react'
import "./search.css";

const Search =(props) =>{

  const[input , setinput] = useState()


  const Changer =(e) =>{

    setinput(e.target.value)

  }

  const searching =(event) =>{
      event.preventDefault()
      props.searchMOvies(input)
  }

    return (
      <form className="search">
        <input type="text"
            
            onChange = {Changer}
            />

            <input type="submit" value="Search" onClick={searching}/>
      </form>
    )





}
     

export default Search