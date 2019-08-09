import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props =>  {
  
  const [ personsState, setPersonState ] = useState({
    persons: [
      { name: 'Victory', age: 28 },
      { name:'Le', age: 27 },
      { name: 'Aang', age: 1 }
    ]
  });

  const [otherState, setOtherState] = useState('alsdkhfasld');
  console.log(personsState, otherState);

  const switchNameHandler = () => {
    // console.log('was clicked')
    // DONT' DO THIS: personsState.persons[1].name = 'Maximilian';
    setPersonState({
      persons: [
        { name: 'Zelda', age: 28 },
        { name:'Le', age: 27 },
        { name: 'Aang', age: 2 }
      ]
    });
  };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >I like martial arts </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    // return React.createElement('div', null, React.createElement('h1', {className: 'App'}, 'does this work?'));

  };
export default app;



  