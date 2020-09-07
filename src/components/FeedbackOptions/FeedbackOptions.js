import React from 'react';
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

export default FeedbackOptions;
