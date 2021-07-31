import React, { Component } from 'react';
import s from './Statistics.module.css';
import PropTypes from "prop-types";

class Statistics extends Component {

    render() {
        const { good,neutral,bad ,total ,positivePercentage } = this.props;
        return (
            <>
                <p className={s.text}>Good: {good}</p>
                <p className={s.text}>Neutral: {neutral}</p>
                <p className={s.text}>Bad:{bad}</p>
                <p className={s.text}>Total:{total}</p>
                <p className={s.text}>Positive feedback: {positivePercentage}%</p>
            </>
        )
    }
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
}
export default Statistics;