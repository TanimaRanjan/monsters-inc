import React from 'react'

import './search-field.css'

export const SearchField = ({placeholder, handleChange}) => {

        return (
            
            <input 
                type="search" className="search"
                placeholder={placeholder} 
                onChange={ handleChange}>
              </input>
            
        )
    }
  