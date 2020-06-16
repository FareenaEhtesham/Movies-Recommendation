import React from 'react'
import './card.css'
 
const image ="https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Card =({movie}) =>{

    const poster =
    movie.Poster === "N/A" ? image : movie.Poster;

    return(

        <div className="card-container">
            
          <h3>{movie.Title}</h3>

        <div>
            <img width="200" src={poster} />

            <p>({movie.Year})</p>

            </div>

        </div>
    )
} 

export default Card