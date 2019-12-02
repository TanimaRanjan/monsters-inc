import React from 'react'

import './card.css'

export const Card = ({monster}) => {
    console.log(monster)
    return (
        <div className="card">
        <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={monster.name}></img>
        <h3>{monster.name}</h3>
        <p>{monster.email}</p>
        </div>
    )
}