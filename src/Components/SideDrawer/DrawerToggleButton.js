import React from 'react';
import classes from './DrawerToggleButton.module.scss'

const DrawerToggleButton = props => (
    <button className = {classes.toggle_button} onClick = {props.click}>
        <div className = {classes.toggle_button__line}></div>
        <div className = {classes.toggle_button__line}></div>
        <div className = {classes.toggle_button__line}></div>
    </button>
)

export default DrawerToggleButton