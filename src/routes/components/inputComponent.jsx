import {React, useState} from "react";
import classes from "../../styles/classes.module.scss";

function InputComponent({value, name, rusName, setValue}) {
  const inputName = `${name}Input`
  return(
    <>
      <input id={name} type="number" value={value} name={inputName} onChange={event => setValue(event.target.value)} />
      <label htmlFor="PowerInput">{rusName}</label>
    </>
  )
}
export default InputComponent;