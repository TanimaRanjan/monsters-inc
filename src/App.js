import React , {Component }  from 'react';

import { CardList  } from './components/card-list/card-list.component';

// import { SearchField } from './components/search-field/search-field.component';

import './App.css';
import { SearchField } from './components/search-field/search-field.component';

class App extends Component {
  constructor () {
    super() 
    this.state = {
      monsters : [],
      searchField : ''
    }
  }



  componentDidMount() { 
    // When this component is loaded 
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  handleChange = (e) => {
    this.setState({searchField:e.target.value})
   } 
  render () {
    // Get the monster from state and search field
    // Then filter the monsters using the search field
    const { monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

  return (
    <div className="App">
      <h1>Monsters Inc.</h1>
        <SearchField 
          placeholder='Search Monsters'
          handleChange={this.handleChange} />
        <CardList  monsters={filteredMonsters}/>
        
    </div>
  ); }
}

export default App;
