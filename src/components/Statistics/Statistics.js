import React from 'react';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      {total ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {positivePercentage}%</p>
        </>
      ) : null}
    </>
  );
}

export default Statistics;
