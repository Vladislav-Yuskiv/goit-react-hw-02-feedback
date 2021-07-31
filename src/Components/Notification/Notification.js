import React, { Component } from 'react';
import s from './Notification.module.css';
import PropTypes from "prop-types";
class Notification extends Component {
    render() {
        const { message } = this.props;
        return (
            <>
                <p className={s.message}>{message}</p>
            </>
        )
    }
}
Notification.propTypes = {
    message: PropTypes.string.isRequired,
}
export default Notification;