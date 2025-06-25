import React from 'react';
import PropTypes from 'prop-types';
import './content_section_styles.scss';
import MoreBtn from './components/inputs/MoreBtn/MoreBtn';

const SectionWrapper = ({ title, linkTo, children }) => {
  return (
    <div className="section-wrapper">
      <div className="section-wrapper__content">
        {title && <div className="section-wrapper__title">{title}</div>}
        {children}
      </div>

      <MoreBtn 
        to={linkTo} 
        className="section-wrapper__link">
      </MoreBtn>
    </div>
  );
};

SectionWrapper.defaultProps = {
  linkTo: '#'
};

SectionWrapper.propTypes = {
  title: PropTypes.string,
  linkTo: PropTypes.string,
  children: PropTypes.node
};

export default SectionWrapper;