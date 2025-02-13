import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Kingdoms from "./routes/kingdoms";
import Map from "./routes/map";
import Mechanics from "./routes/mechanics";
import Story from "./routes/story";
import MainPage from './mainpage';

import adaptive from "./styles/adaptive.module.scss";
import classes from "./styles/classes.module.scss";
import staticStyle from "./styles/static.module.scss";

const Menu = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Kingdoms">Kingdoms</Link></li>
                        <li><Link to="/Map">Map</Link></li>
                        <li><Link to="/Mechanics">Mechanics</Link></li>
                        <li><Link to="/Story">Story</Link></li>
                        <li><Link to="/Other">Other</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/Kingdoms" component={Kingdoms} />
                    <Route path="/Map" component={Map} />
                    <Route path="/Mechanics" component={Mechanics} />
                    <Route path="/Story" component={Story} />
                    <Route path="/Other" component={ "" } />
                </Switch>
            </div>
        </Router>
    );
};

export default Menu;