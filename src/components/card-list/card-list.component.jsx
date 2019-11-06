import React from 'react'

import {Card} from '../card/card.component'

import './card-list.css'

export const CardList = (props) => {
    console.log(props.monsters)
    // console.log(props.children)
    return (
        <div className="card-list">
        {props.monsters.map(monster =>  <Card key = {monster.id} monster={monster} />)            
        }
        </div>
        )
}
