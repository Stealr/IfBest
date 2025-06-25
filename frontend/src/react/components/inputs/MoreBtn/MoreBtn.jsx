import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './more_btn_styles.scss';

const MoreBtn = ({ LinkTo, className }) => {
  return (
    <Link to={LinkTo || '#'} className={className || 'section-wrapper__link'}></Link>
  );
};

MoreBtn.propTypes = {
  LinkTo: PropTypes.string,
  className: PropTypes.string
};

export default MoreBtn;