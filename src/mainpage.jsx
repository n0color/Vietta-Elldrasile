import React from "react";
import classes from "./styles/classes.module.scss";

function MainPage() {
  return (
    <>
    <h1 className={classes.header}>Vietta Elldrasile</h1> 
    <nav className={classes.navbar}>
      <a href={`/`} className={classes.hover}>Главная</a>
      <a href={`/story`}>Сюжет</a>
      <a href={`/mechanics`}>Справочник</a>
      <a href={`/map`}>Карта</a>
      <a href={`/kingdoms`}>Королевства</a>
    </nav>
    <main className={classes.content}>
      <h2 className={classes.header}>Добро пожаловать, путник!</h2>
      <p>Это история магических миров, войны королевств и поистинне завлекающего окружения. Отправляйся в путь, странник. И пусть удача сопутствует тебе.</p>
    </main>
    </>
  )
}
export default MainPage;