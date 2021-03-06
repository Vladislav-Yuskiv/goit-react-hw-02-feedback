import React, { Component } from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from "prop-types";

class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
        return (
            <>
                {options.map(option => {
                    
                   return  <button key={option} name={option} onClick={onLeaveFeedback} className={s.button}> {option} </button>
                })}
            </>
        )
    }
}
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    
}
export default FeedbackOptions; 