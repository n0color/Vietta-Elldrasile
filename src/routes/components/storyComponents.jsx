import {React, useState} from "react";
import classes from "../../styles/classes.module.scss";
import { Link } from "react-router-dom";

function StoryComponent({header, text}) {
  return(
      <div className={classes.div}>
        <h3>{header}</h3>
        <p>{text}</p>
      </div>
  )
}
export default StoryComponent;