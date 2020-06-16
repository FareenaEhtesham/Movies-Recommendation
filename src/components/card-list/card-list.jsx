import React from 'react'
import './card-list.css'
import Card from '../Card/card.jsx'

const CardList =(props) =>{

    return(
        <div className="card-list">

            {props.myBooks.map ( a => {

                return(
                <Card key={a.imdbID} movie={a}/>
                )

            })}

        </div>
    )
}


export default CardList