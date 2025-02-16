import {React, useState} from "react";
import classes from "../../styles/classes.module.scss";
import { Link, useLocation } from "react-router-dom";

function NavMenu({clickLink}) {
  let location = useLocation();
 
  return(
    <>
      <h1 className={classes.header}>Vietta Elldrasile</h1> 
      <nav className={classes.navbar}>
        <Link to={`/`} className={`${classes.link} ${location.pathname == '/' ? classes.hover : ''}`}>Главная</Link>
        <Link to={`/story`} className={`${classes.link} ${location.pathname == '/story' ? classes.hover : ''}`}>Сюжет</Link>
        <Link to={`/mechanics`} className={`${classes.link} ${location.pathname == '/mechanics' ? classes.hover : ''}`}>Справочник</Link>
        <Link to={`/map`} className={`${classes.link} ${location.pathname == '/map' ? classes.hover : ''}`}>Карта</Link>
        <Link to="/kingdoms" className={`${classes.link} ${location.pathname == '/kingdoms' ? classes.hover : ''}`}>Королевства</Link>
      </nav>
    </>
  )
}
export default NavMenu;