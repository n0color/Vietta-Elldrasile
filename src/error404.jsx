import { useRouteError } from "react-router-dom";
import NavMenu from "./routes/components/menu";
function ErrorPage404() {
  const error = useRouteError();
  console.error(error);
  return(
    <>
      <NavMenu /> 
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