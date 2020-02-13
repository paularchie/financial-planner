import React from 'react';
import './Layout.scss';
import SideDrawer from "../SideDrawer/SideDrawer";
import Header from '../Header/Header';
import { LayoutProps } from './LayoutProps.type';
import Footer from '../Footer/Footer';

const Layout = (props: LayoutProps): JSX.Element => {

    return (
        <div className="layout-container">
            <div className="content-wrapper">
                <Header
                    menuIconClickHandler={props.menuIconClickHandler}
                    navigationItems={props.navigationItems}
                    navigationItemClickHandler={props.navigationItemClickHandler}
                    activeUrl={props.activeUrl}
                ></Header>

                <SideDrawer
                    showSideDrawer={props.showSideDrawer}
                    backdropClickHandler={props.backdropClickHandler}
                    navigationItems={props.navigationItems}
                    navigationItemClickHandler={props.navigationItemClickHandler}
                    activeUrl={props.activeUrl}
                ></SideDrawer>

                <main>
                    {/* <div className="main-content-wrapper"> */}
                        {props.children}
                    {/* </div> */}
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
