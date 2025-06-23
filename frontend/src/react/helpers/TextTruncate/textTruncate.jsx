import React from 'react';

const TruncatedText = ({ text, maxLength }) => {
  // Проверка на ошибки в исходных данных
  if (typeof text !== 'string' || typeof maxLength !== 'number' || maxLength <= 0) {
    return <span>{text}</span>;
  }

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }
  
  const actualLength = Math.max(1, maxLength - 3);
  const truncatedText = text.substring(0, actualLength) + '...';
  
  return <span title={text}>{truncatedText}</span>;
};

export default TruncatedText;