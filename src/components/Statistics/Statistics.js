import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentageFeedback,
}) => (
  <ul className="Statistics">
    <li className={s.Statisctics__item}>good: {good}</li>
    <li className={s.Statisctics__item}>neutral: {neutral}</li>
    <li className={s.Statisctics__item}>bad: {bad}</li>
    <li className={s.Statisctics__item}>total: {total}</li>
    <li className={s.Statisctics__item}>
      positive feedback: {positivePercentageFeedback}%
    </li>
  </ul>
);

Statistics.propTypes = PropTypes.objectOf(PropTypes.number).isRequired;

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentageFeedback: PropTypes.number.isRequired,
// };

export default Statistics;
