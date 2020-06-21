import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.modules.css';

const Hello = ({ name }) => {
  return (
    <div>
      <h1 className={styles.title}>This is a Parcel v2-beta example page</h1>
      <p className={styles.message}>Hello, {name}!</p>
    </div>
  )
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

Hello.defaultProps = {};

export default Hello;
