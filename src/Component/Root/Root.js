import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../Home';
import LocalS from '../../Biod/LocalS'
import Tabel from '../../Biod/Tabel'
import Edit from '../../Biod/edit'

const Root = () => (
    <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/input" component={LocalS}/>   
        <Route path="/show" component={Tabel}/>
        <Route path="/edit" component={Edit}/>
    </Router>
)

export default Root