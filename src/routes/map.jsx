import React from "react";

function Map() {
  return(
    <>
    <h1 class="header">Vietta Elldrasile</h1> 
  <nav class="navbar">
    <a href="../index.html">Главная</a>
    <a href="story.html">Сюжет</a>
    <a href="mechanics.html">Справочник</a>
    <a href="#" class="hover">Карта</a>
    <a href="kingdoms.html">Королевства</a>
  </nav>
  <main class="content">
    <h2 class="header">Карта Некронии</h2>
    <img class="centered-image" src="../img/map.jpg" alt="Карта не загрузилась..." />
    </main>
  </>
  )
}

export default Map;