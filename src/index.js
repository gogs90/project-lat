import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './index.css';
// import App from './App';
// import LocalS from './Biod/LocalS';
import Home from './Home'
import Root from './Component/Root/Root'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';


let key = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : [];

const globalState = {
    totalUser: key.length,
    totalCreated: 0
}

const rootReducer = (state = globalState, action) => {
    if(action.type === 'ADD_USER'){
        return{
            ...state,
            totalCreated: state.totalCreated + 1
        }
    }
    return state;
}

//Store
const store = createStore(rootReducer);


// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Home/>,document.getElementById('home'));
ReactDOM.render(
<Provider store={store}>
    <Root/>
</Provider>,document.getElementById('home'));
// ReactDOM.render(<LocalS/>, document.getElementById('tampil'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
