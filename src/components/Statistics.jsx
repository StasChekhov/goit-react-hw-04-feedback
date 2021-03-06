import React from "react";
import s from './Feedback.module.css'
import PropTypes from "prop-types";

const Statistics = ({good, neutral, bad, total, positivePercentage,}) => (
    <ul className={s.statistic}>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{ total }</li>
        <li>Positive feedback:{ positivePercentage }%</li>
    </ul>
    
)
 
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}