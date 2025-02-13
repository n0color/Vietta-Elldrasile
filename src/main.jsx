import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Kingdoms from "./routes/kingdoms";
import Map from "./routes/map";
import Mechanics from "./routes/mechanics";
import Story from "./routes/story";
import adaptive from "./styles/adaptive.module.scss";
import classes from "./styles/classes.module.scss";
import staticStyle from "./styles/static.module.scss";
import Menu from './Menu';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
  </StrictMode>,
)
