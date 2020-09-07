import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {Object.keys(options).map(value => (
        <button
          key={value}
          name={value}
          className={styles.btn}
          onClick={e => onLeaveFeedback(e)}
        >
          {value}
        </button>
      ))}
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    value: PropTypes.string,
  }).isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
