import React from 'react';

import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Section;
