import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import MenuIcon from '../MenuIcon/MenuIcon';
import { HeaderProps } from './HeaderProps.type';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// const logo = require('../../../assets/images/ylt-logo.png');
import { Link } from 'react-router-dom';

const Header = ({ navigationItems, menuIconClickHandler, navigationItemClickHandler, activeUrl }: HeaderProps): JSX.Element => {

    return (
        <div className="header">
            <div
                className="welcome-bar"
            >
                <Link to="/">
                    img
                    {/* <img src={logo} /> */}
                </Link>
            </div>
            <AppBar position="static">
                <Toolbar>
                    <nav className="mobile-only">
                        <MenuIcon clickHandler={menuIconClickHandler} />
                    </nav>
                    <nav className="desktop-only">
                        <NavigationItems
                            items={navigationItems}
                            activeUrl={activeUrl}
                            clickHandler={navigationItemClickHandler} />
                    </nav>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;