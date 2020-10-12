import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import './App.css';



// https://jsonplaceholder.typicode.com/users

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [] 
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
    return (
    <div className="App">
    <CardList monsters={this.state.monsters}/>
  </div>)
  }
}

export default App;
