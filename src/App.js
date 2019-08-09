import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Victory', age: 28 },
      { name:'Le', age: 27 },
      { name: 'Aang', age: 1 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked')
    // DONT' DO THIS: this.state.persons[1].name = 'Maximilian';
    this.setState({persons: [
      { name: newName, age: 28 },
      { name:'Le', age: 27 },
      { name: 'Aang', age: 2 }
    ]
  } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button onClick={() => this.switchNameHandler('Zeldaaaa')}>Switch Name</button> 
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, 'Link')}>I like martial arts </Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'does this work?'));
  }
}

export default App;
