import React from "react";
import styles from "./Cockpit.css"

const cockpit = (props) => {
  const styleClasses = [];
  let btnClass = null;

  if (props.showPersons){
    btnClass = styles.Red
  }

  if (props.persons.length<=2){
    styleClasses.push(styles.red)
  }
  if (props.persons.length<=1){
    styleClasses.push(styles.bold)
  }


return (
  <div className = {styles.Cockpit}>
    <p className = {styleClasses.join(' ')}>This App Is Working!</p>
    <button
      className = {btnClass}
      onClick={props.clicked}>
      Reveal Users
    </button>
  </div>
)
}

export default cockpit;
