import React from "react";
import { useState } from "react";
import classes from "../styles/classes.module.scss";
import NavMenu from "./components/menu";
import StoryComponent from "./components/storyComponents";
import stories from "../stories";

function Story() {
  const [elements, setElements] = useState(stories)
  const StoryComponentArray = elements.map(element => {
    return <StoryComponent key={element.id} header={element.header} text={element.text} />
  })
  return(
    <>
      <NavMenu />
  <main  className={classes.content}>
    <h2 className={classes.header}>Том 1. Некрония</h2>
    {StoryComponentArray}
  </main>
  </>
  )
}

export default Story;