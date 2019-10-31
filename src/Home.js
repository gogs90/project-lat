import React from 'react';
import Toolbar from './Component/Toolbar/Toolbar';
// import {render} from "react-dom"
// import {Router, Route} from "react-router";
// import SideDrawer from './Component/SideDrawer/SideDrawer';
import SideDrawer from './Component/SideDrawer/SideDrawer';
import Backdrop from './Component/Backdrop/Backdrop';
import LocalS from './Biod/LocalS';
import Tabel from './Biod/Tabel';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

class Home extends React.Component {
    state={
        sideDrawerOpen: false
    }
    drawerToggle = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropToggle = () => {
        this.setState({sideDrawerOpen : false})
    }

    render(){
        let sideDrawer;
        let backdrop;

        if(this.state.sideDrawerOpen){
            sideDrawer = <SideDrawer/>;
            backdrop = <Backdrop click={this.backdropToggle}/>
        }
        return (
            <div style={{height: '100%'}}>
                {/* <Router>
                    <Route path={"input"} component={LocalS}/>
                </Router> */}
                <Toolbar drawerClick={this.drawerToggle}/>
                {sideDrawer}
                {backdrop}
                <main style={ {marginTop: '64px' } }>
                    <div className="areaTeks">
                        <marquee>
                            <label>
                                Hello! Selamat Datang pada halaman registrasi
                            </label>
                        </marquee>
                    </div>
                    <hr></hr>
                    <div className="spacer" />
                    <Router>
                        <div className="tool_items">
                            <ul>
                                {/* <li>
                                    <Link to={"/"}>Home</Link>
                                </li> */}
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
                                <Route path="/input" >
                                    <LocalS/>
                                </Route>
                                <Route path="/show" >
                                    <Tabel/>
                                </Route>
                            </Switch>
                        </div>
                    </Router>
                </main>
            </div>
        );
    }
}

export default Home;