import React from "react";
import classes from "./styles/classes.module.scss";
import NavMenu from "./routes/components/menu";

function MainPage() {
  return (
    <>
    <NavMenu />
    <main className={classes.content}>
      <h2 className={classes.header}>Добро пожаловать, путник!</h2>
      <p>Это история магических миров, войны королевств и поистинне завлекающего окружения. Отправляйся в путь, странник. И пусть удача сопутствует тебе.</p>
    </main>
    </>
  )
}
export default MainPage;