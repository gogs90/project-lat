import React from 'react';
import './SideDrawer.css';
// import LocalS from '../../Biod/LocalS';
// import Tabel from '../../Biod/Tabel';
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const SideDrawer = props  => (
    <nav className="side-drawer">
        <ul>
            {/* <li><Link to={"/input"}>Products</Link></li> */}
            <li><a href="/">Input Data</a></li>
            <li><a href="/">Show Data</a></li>
        </ul>
        {/* <Router>
            <div className="tool_items">
                <ul>
                    <li>
                        <Link to={"/input"}>Input Data</Link>
                    </li>
                    <li>
                        <Link to={"/show"}>Show Data</Link>
                    </li>
                </ul>

                <Switch>
                    {/* <Route path="/">
                        <Home/>
                    </Route> */}
                    {/* <Route path="/input" >
                        <LocalS/>
                    </Route>
                    <Route path="/show" >
                        <Tabel/>
                    </Route>
                </Switch>
            </div>
        </Router> */}
    </nav>

);

export default SideDrawer;