import React, { Component } from 'react'; 
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


class Layout extends Component{
    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false});
    }

    sideDrawerTogglerHandler = () => {
        this.setState((prevState) => {  
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }


    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerTogglerHandler}/>
                <SideDrawer open={this.state.showSideDrawer}closed={this.sideDrawerClosedHandler}/>
                {/* {this.props.children} */}
            </Aux>
        );
    }
}


export default Layout;