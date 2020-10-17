import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';



// https://jsonplaceholder.typicode.com/users

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '' 
  }
}

// lifecycle method to fetch data, convert to json, and then set monsters array.
componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
}

// the function that puts our app on the page
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
     )
    return (
    <div className="App">
      <SearchBox 
      placeholder='search monsters' 
      handleChange = {e => {this.setState({searchField: e.target.value})}}
        />
      <CardList monsters={filteredMonsters}/>
  </div>)
  }
}

export default App;
