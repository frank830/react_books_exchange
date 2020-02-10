import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    let attachedClasses = [classes.NavigationItems];
    if (props.mode ==='SideDrawer') {
        attachedClasses = [classes.SideDrawer];
    }

    return(
        <ul className={attachedClasses.join(' ')} >
            <NavigationItem mode={props.mode} link="/"> Log In 1 </NavigationItem>
            <NavigationItem mode={props.mode} link="/"> Log In 2 </NavigationItem>
            <NavigationItem mode={props.mode} link="/"> Log In 3 </NavigationItem>
        </ul >
    );
};


export default navigationItems;