import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './NavigationItem.module.css';


const navigationItem = (props) => {

    let attachedClasses = [classes.NavigationItem];

    if (props.mode === 'SideDrawer') {
        attachedClasses = [classes.SideDrawer];
    }

    return (
        <li className={attachedClasses.join(' ')}>
            <NavLink to={props.link}>
                {props.children}
            </NavLink>
        </li>
    );
};


export default navigationItem;