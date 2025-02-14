import { useRouteError } from "react-router-dom";

function ErrorPage404() {
  const error = useRouteError();
  console.error(error);
  return(
    <>
    <h1 class="header">Vietta Elldrasile</h1> 
  <nav class="navbar">
    <a href={`/`}>Главная</a>
    <a href={`/story`} class="hover">Сюжет</a>
    <a href={`/mechanics`}>Справочник</a>
    <a href={`/map`}>Карта</a>
    <a href={`/kingdoms`}>Королевства</a>
  </nav>
  <main class="content">
    <h2>Прости! Такой страницы не существует :(</h2>
    <p>
      <i>{error.statusText}</i>
    </p>
  </main>
  </>
  )
}
export default ErrorPage404;