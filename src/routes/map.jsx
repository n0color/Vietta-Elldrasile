import React from "react";
import classes from "../styles/classes.module.scss";
import NavMenu from "./components/menu";

function Map() {
  return(
    <>
   <NavMenu />
  <main  className={classes.content}>
    <h2 className={classes.header}>Карта Некронии</h2>
    <img className={classes.centered_image} src="../img/map.jpg" alt="Карта не загрузилась..." />
    </main>
  </>
  )
}

export default Map;