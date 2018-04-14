import React, { Component } from 'react';
import styles from './App.css';
import Users from "../Components/Users/Users"
import Cockpit from "../Components/Cockpit/Cockpit"

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

    // initially show no users, so it is null
    let persons = null;

    // render users if state is true
      if (this.state.showPersons) {
        persons = <Users
              persons= {this.state.persons}
              clicked= {this.deletePersonHandler}
              changed= {this.nameChangedHandler}/>;
      }

// return narrowly focused components
    return (
      <div className= {styles.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.revealUsersHandler}
         />
        {persons}
      </div>
    );
  }
}

export default App;
