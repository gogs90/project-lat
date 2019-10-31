import React from 'react';
import './SideDrawer.css';
// import {Link} from 'react-router-dom';
// import LocalS from '../../Biod/LocalS'

const SideDrawer = props  => (
    <nav className="side-drawer">
        <ul>
            {/* <li><Link to={"/input"}>Products</Link></li> */}
            <li><a href="/">Input Data</a></li>
            <li><a href="/">Show Data</a></li>
        </ul>
    </nav>

);

export default SideDrawer;