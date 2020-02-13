import React from 'react';
import './ErrorPage.scss';
import { ErrorPageProps } from './error-page-props';
const image404 = require('../../assets/img/warning.svg');

const ErrorPage = ({ imageUrl = image404, errorCode, message }: ErrorPageProps): JSX.Element => (
    <div className="error-page-container full-height center-content">
        <div className="wrapper flex column center-content">
            <img className="error-img" src={imageUrl} />
            <p className="error-status">{errorCode}</p>
            <p className="error-msg">{message}</p>
        </div>
    </div>
)

export default ErrorPage;