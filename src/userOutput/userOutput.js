import React from "react"
import styles from './userOutput.css';

const userOutput = (props) => {
  return(
    <div className={styles.card}>
      <p onClick = {props.click}>  My name is {props.name} and I have been a member for {props.years} years.</p>
      <input type = "text" onChange ={props.changed} value = {props.name}/>
    </div>
  )

}

export default userOutput;
