import React from "react";
import UserOutput from "./userOutput/userOutput";

// map through the state list to return all users dynamically
const users = (props) => props.persons.map((person, index) => {
  return <UserOutput
    click = {() => props.clicked(index)}
    name = {person.name}
    years = {person.years}
    key = {person.id}
  changed = {(event) => props.changed(event, person.id)}  />
});

export default users;
