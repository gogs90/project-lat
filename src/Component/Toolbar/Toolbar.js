import React from 'react';
import './Toolbar.css';
// import {Router, Route} from 'react-router-dom';
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
// import LocalS from '../../Biod/LocalS';
// import Tabel from '../../Biod/Tabel'
// import Home from '../../Home'
// import {Link} from 'react-router-dom';
import DrawerButton from '../SideDrawer/DrawerButton'

const toolbar = props => (
    <header className="tool_head">
        {/* <Router history={browserHistory}>
            <Route path={"input"} component={LocalS}/>
            <Link to={"/input"}>Products</Link>
        </Router> */}

        <nav className="tool_nav">
            <div>
                <DrawerButton click={props.drawerClick}/>
            </div>
            <div className="tool_logo"><a href="/">HALAMAN UTAMA</a></div>
            <div className="spacer"/>
            {/* <div className="tool_items">
                <ul>
                    <li>
                    <Router>
                        <Route path={"input"} component={LocalS}/>
                        <Link to={"/input"}>Products</Link>
                    </Router>
                    </li>
                    <li><a href="/">Input Data</a></li>
                    <li><a href="/">Show Data</a></li>
                </ul>
            </div> */}
        </nav>
    </header>
);

export default toolbar;