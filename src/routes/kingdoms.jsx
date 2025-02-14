import React from "react";
import classes from "../styles/classes.module.scss";


function Kingdoms() {
  return (
  <>
    <h1 className={classes.header}>Vietta Elldrasile</h1> 
    <nav className={classes.navbar}>
      <a href={`/`}>Главная</a>
      <a href={`/story`}>Сюжет</a>
      <a href={`/mechanics`}>Справочник</a>
      <a href={`/map`}>Карта</a>
      <a href={`/kingdoms`} className={classes.hover}>Королевства</a>
    </nav>
    <main className={classes.content}>
      <h2 className={classes.header}>Королевства Некронии</h2>
      <p>В разработке...</p>
    </main>
  </>);
}

export default Kingdoms;