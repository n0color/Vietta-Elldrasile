import React from "react";

function MainPage() {
  return (
    <>
    <h1 className="header">Vietta Elldrasile</h1> 
    <nav className="navbar">
      <a href="#" className="hover">Главная</a>
      <a href="pages/story.html">Сюжет</a>
      <a href="pages/mechanics.html">Справочник</a>
      <a href="pages/map.html">Карта</a>
      <a href="pages/kingdoms.html">Королевства</a>
    </nav>
    <main className="content">
      <h2 className="header">Добро пожаловать, путник!</h2>
      <p>Это история магических миров, войны королевств и поистинне завлекающего окружения. Отправляйся в путь, странник. И пусть удача сопутствует тебе.</p>
    </main>
    </>
  )
}
export default MainPage;