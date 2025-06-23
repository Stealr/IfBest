import React from 'react';
import PropTypes from 'prop-types';
import './wrapper_style.css'; // Импортируем стили

const SectionWrapper = ({ title, buttonText, buttonHref, children }) => {
  return (
    <div className="section-wrapper">
      {title && <div className="section-wrapper__title">{title}</div>}
      
      {children}
      
      {buttonText && (
        <a href={buttonHref || '#'} className="section-wrapper__button">
          {buttonText}
        </a>
      )}
    </div>
  );
};

// Пропсы по умолчанию
SectionWrapper.defaultProps = {
  buttonText: 'Смотреть больше',
  buttonHref: '#'
};

// Проверка типов пропсов
SectionWrapper.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  buttonHref: PropTypes.string,
  children: PropTypes.node
};

export default SectionWrapper;