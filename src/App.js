import React,{useState , useEffect} from 'react';
import './App.css';
import CardList from './components/card-list/card-list'
import Search from './components/Search/Search'
import Header from './components/header.jsx'

function App(){


  const[movies , setmovies] = useState([])

useEffect( () =>{

  fetch("https://www.omdbapi.com/?s=man&apikey=4a3b711b")
  .then(response => response.json())
  .then(jsonResponse => {
    setmovies(jsonResponse.Search);
   
  });
}, []);

    const searchHere =(searchValue) =>{

  fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
  .then(response => response.json())
  .then(jsonResponse => {
    if (jsonResponse.Response === "True") {
      setmovies(jsonResponse.Search);
      
    }
    else{
      console.log("Null")
    }
  });

    }

    return(
      <div className="App">
         <Header heading="React" />
        <Search searchMOvies={searchHere} />
        <br/>
        <CardList myBooks={movies} />
          
      
            
      {/* // <CardList name={a.nameg={}} />  and in cardList component you just said props.name */}

      </div>
    )
  }

export default App;
