import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import InvestmentCalculator from './pages/investment-calculator/investment-calculator';
import KeyRatiosAnalyses from './pages/key-ratios-analyses/key-ratios-analyses';
import 'animate.css';
import './styles.scss';
import Layout from './components/Layout/Layout';
import { NavigationItemProps } from './components/NavigationItems/NavigationItemsProps.type';

const Main = withRouter (({history}): JSX.Element => {

    const handleNavigationItemClick = (route: string) => {
        history.push(route);
        // setCurrentRoute(route);
        // setSideDrawerState(false);
    };

    const handleMenuIconClick = () => {
        // setSideDrawerState(!showSideDrawer);
    };

    const handleBackdropClick = () => {
        // setSideDrawerState(!showSideDrawer);
    };

    const handleLogout = () => {
        // userApi.logout();
        // dispatch({ type: AuthActionTypes.Logout });
        // history.push('/login');
    };

    function getNavigationItems(): NavigationItemProps[] {
        return [
            {
                id: 'home',
                text: 'Home',
                route: '/',
                active: true,
            },
            {
                id: 'investment-calculator',
                text: 'Investment Calculator',
                route: '/investment-calculator',
            },
            {
                id: 'key-ratios',
                text: 'Key Ratios',
                route: '/key-ratios',
            }
        ];
    }

    return (
        <div data-testid="app-container">
                <Layout
                    navigationItems={getNavigationItems()}
                    navigationItemClickHandler={handleNavigationItemClick}
                    // activeUrl={currentRoute}
                    menuIconClickHandler={handleMenuIconClick}
                    backdropClickHandler={handleBackdropClick}
                    showSideDrawer={false}
                >
                    <Switch>
                        <Route path='/investment-calculator' component={InvestmentCalculator} />
                        <Route path='/key-ratios' component={KeyRatiosAnalyses} />
                        <Route path='/' render={() => <Redirect to='key-ratios-analyses' />} />
                    </Switch>
                </Layout>
        </div >
    )
});

export default Main;
