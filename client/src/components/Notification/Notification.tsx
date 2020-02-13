import React from 'react';
import './Notification.scss';

const Notification = ({ title, message, theme }) => {

    return (
        <div 
        className="notification-container"
        style={{
            display: 'flex',
            backgroundColor: theme.notification.success,
            color: 'white',
            borderRadius: 5,
            padding: '1.2em'
        }}>
                <h4>{title}</h4>
                <div className="message-container">
                    <i className="material-icons">done</i>
                    <p>{message}</p>
                </div>
        </div>
    )
}

export default Notification;