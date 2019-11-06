import React from 'react'

import './card.css'

export const Card = (props) => {
    console.log(props.monster)
    return (
        <div className="card">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="Monster"></img>
        <h3>{props.monster.name}</h3>
        <p>{props.monster.email}</p>
        </div>
    )
}