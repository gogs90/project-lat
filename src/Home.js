import React from 'react';
import Toolbars from './Component/Toolbar/Toolbar';
import SideDrawer from './Component/SideDrawer/SideDrawer';
import Backdrop from './Component/Backdrop/Backdrop';
import LocalS from './Biod/LocalS';
import Tabel from './Biod/Tabel';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { AppBar,Toolbar, Container,Button } from '@material-ui/core'

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
                <Toolbars drawerClick={this.drawerToggle}/>
                {sideDrawer}
                {backdrop}
                <main style={ {marginTop: '60px' } }>
                    <hr></hr>
                    {/* <div className="spacer" /> */}
                    <AppBar position="static">
                        <Toolbar className="tool_ui">
                            <div className="areaTeks">
                                <label>
                                    Hello! Selamat Datang pada halaman registrasi
                                </label>
                            </div>
                        </Toolbar>
                    </AppBar>
                    <Container maxWidth="md">
                        <Router>
                            <div className="menu-head">
                                <div className="tool_items">
                                    <ul>
                                        <li>
                                            <Button><Link to={"/input"}>Input Data</Link></Button>
                                        </li>
                                        <li>
                                            <Button><Link to={"/show"}>Show Data</Link></Button>
                                        </li>
                                        <li>
                                            <Button><Link to={"/show"}>Show Data</Link></Button>
                                        </li>
                                    </ul>
                                </div>
                                <Switch>
                                    <Route path="/input" >
                                        <LocalS view="iseng"/>
                                    </Route>
                                    <Route path="/show" >
                                        <Tabel view="standar"/>
                                    </Route>
                                </Switch>
                            </div>
                        </Router>
                    </Container>
                    {/* <Router>
                        <div className="menu_head">
                            <div className="tool_items">
                                <ul>
                                    <li>
                                        <Link to={"/input"}>Input Data</Link>
                                    </li>
                                    <li>
                                        |
                                    </li>
                                    <li>
                                        <Link to={"/show"}>Show Data</Link>
                                    </li>
                                </ul>

                                <Switch>
                                    <Route path="/input" >
                                        <LocalS view="iseng"/>
                                    </Route>
                                    <Route path="/show" >
                                        <Tabel view="standar"/>
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </Router> */}
                </main>
            </div>
        );
    }
}

export default Home;