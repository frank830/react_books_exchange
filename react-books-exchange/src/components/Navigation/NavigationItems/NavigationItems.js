import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/"> Log In 1 </NavigationItem>
        <NavigationItem link="/"> Log In 2 </NavigationItem>
        <NavigationItem link="/"> Log In 3 </NavigationItem>
    </ul>
);

export default navigationItems;