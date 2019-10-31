import React from 'react';
import './DrawerButton.css';

const DrawerButton = props => (
    <button className="button_main" onClick={props.click}>
        <div className="button_line"></div>
        <div className="button_line"></div>
        <div className="button_line"></div>
    </button>
);

export default DrawerButton;