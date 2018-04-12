import React from "react"

const userOutput = (props) => {
  return(
    <div>
      <p onClick = {props.click}>  My name is {props.name} and I have been a member for {props.years} years.</p>
      <input type = "text" onChange ={props.changed} value = {props.name}/>
    </div>
  )

}

export default userOutput;
