import React from 'react';
import { Route } from 'react-router-dom';
import ErrorPage from '../pages/error-page/error-page';
// import { useAuthContext } from '../state/GlobalContext';


const ProtectedRoute = ({ component: Component, show, ...rest }) => {
    const currentUser = null //useAuthContext();

    return (
        <>
            {currentUser ?
                <Route render={props =>
                    show ? <Component {...props} /> : <ErrorPage errorCode={403} message={'You don\'t have permission to access this page'} />}
                    {...rest} />
                : null
            }
        </>
    )
}

export default ProtectedRoute;