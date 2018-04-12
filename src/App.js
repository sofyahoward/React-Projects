import React, { Component } from 'react';
import './App.css';
// import UserInput from "./userInput/userInput"
import UserOutput from "./userOutput/userOutput"

class App extends Component {
// state of the application
  state = {
    persons:[
    {id:"vdywppq1", name: "Sonya", years: 3},
    {id: "vsdiad2", name: "Akil", years: 5},
    {id: "wqljpq1", name: "Alan", years: 1}
  ],
    showPersons: false
  }

// event handler to delete each user by clicking on a component
deletePersonHandler = (personIndex) => {
  const persons = [...this.state.persons];
  persons.splice(personIndex, 1);
  this.setState({persons: persons})
}

// event handler to show users upon button click
  revealUsersHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

// event handler to allow name changes in the input to be dynamic
// STILL CONFUSED ABOUT THIS ONE
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      {console.log(id)}
      return p.id===id
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex]=person;

    this.setState({persons: persons});
  }

  render() {
    // rendering the persons upon click of a button
    // initially show no users, so it is null
    let persons = null;

    // then use if statement to render users if state is true
      if (this.state.showPersons) {
        persons = (
    // map through the state list to return all users dynamically
          <div>
            {this.state.persons.map((person, index) => {
              return <UserOutput
              click = {() => this.deletePersonHandler(index)}
              name = {person.name}
              years = {person.years}
              key = {person.id}
              changed = {(event) => this.nameChangedHandler(event, person.id)}  />
            })}
          </div>
        );
      }

    return (
      // return the button first
      // then the input field
      // then the user information
      <div className="App">

        <button
          onClick={this.revealUsersHandler}>
          Reveal Users
        </button>

        {persons}

      </div>

    );
  }
}

export default App;
