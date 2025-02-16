import React from "react";
import classes from "../styles/classes.module.scss";
import NavMenu from "./components/menu";

function Kingdoms() {
  return (
  <>
    <NavMenu />
    <main className={classes.content}>
      <h2 className={classes.header}>Королевства Некронии</h2>
      <p>В разработке...</p>
    </main>
  </>);
}

export default Kingdoms;