import React from "react";
import classes from "../styles/classes.module.scss";
function Map() {
  return(
    <>
    <h1 className={classes.header}>Vietta Elldrasile</h1> 
      <nav className={classes.navbar}>
        <a href={`/`}>Главная</a>
        <a href={`/story`}>Сюжет</a>
        <a href={`/mechanics`}>Справочник</a>
        <a href={`/map`}>Карта</a>
        <a href={`/kingdoms`} className={classes.hover}>Королевства</a>
      </nav>
  <main  className={classes.content}>
    <h2 className={classes.header}>Карта Некронии</h2>
    <img className={classes.centered_image} src="../img/map.jpg" alt="Карта не загрузилась..." />
    </main>
  </>
  )
}

export default Map;